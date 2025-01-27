'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { throttle } from 'lodash';
import {
  FeedItem as FeedItemType,
  getFeedItems,
  sendImpression,
} from '@/services/feed/feed.service';
import FeedItem from './feed_item/FeedItem';
import styles from './feed.module.scss';

export default function Feed() {
  const [feedItems, setFeedItems] = useState<FeedItemType[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);

  const impressionSentIds = useRef(new Set<string>());
  const itemRefs = useRef(new Map<string, HTMLDivElement>());

  const fetchFeedItems = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const data = await getFeedItems(skip);
      setFeedItems((prevItems) => [...prevItems, ...data.data]);
      setHasMore(data.hasMore);
      setSkip((prevSkip) => prevSkip + 6);
    } catch (error) {
      console.error('Error fetching feed:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, skip]);

  // Fetch feed items on initial load
  useEffect(() => {
    if (feedItems.length > 0) return;
    fetchFeedItems();
  }, [fetchFeedItems, feedItems.length]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition =
        document.body.scrollTop + document.body.clientHeight;
      const threshold = document.body.scrollHeight - 200;
      if (scrollPosition >= threshold) {
        fetchFeedItems();
      }
    }, 200);

    document.body.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, [fetchFeedItems]);

  const isElementInViewport = (el: HTMLDivElement) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2
    );
  };

  const sendImpressionOnce = (id: string) => {
    if (impressionSentIds.current.has(id)) return;
    sendImpression(id);
    impressionSentIds.current.add(id);
  };

  // Send impression one time for each item in the viewport (Bonus task)
  useEffect(() => {
    const handleScroll = throttle(() => {
      for (const [id, el] of itemRefs.current) {
        if (isElementInViewport(el)) {
          sendImpressionOnce(id);
        }
      }
    }, 200);
    document.body.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLike = (id: string) => {
    setFeedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              didLike: !item.didLike,
              likes: item.didLike ? item.likes - 1 : item.likes + 1,
            }
          : item,
      ),
    );
    // TODO: Implement API call to toggle like if needed
  };

  const onComment = (id: string) => {
    // TODO: Implement comment functionality if needed
    console.log('Commenting on post:', id);
  };

  return (
    <div className={styles.container}>
      {feedItems.map((item) => (
        <FeedItem
          key={item.id}
          {...item}
          onToggleLike={toggleLike}
          onComment={onComment}
          ref={(el) => {
            if (el) {
              itemRefs.current.set(item.id, el);
            }
          }}
        />
      ))}
      {loading && <p className={styles.loading}>Loading...</p>}
    </div>
  );
}
