'use client';
import { useState, useEffect, useCallback } from 'react';
import { throttle } from 'lodash';
import {
  FeedItem as FeedItemType,
  getFeedItems,
} from '@/services/feed/feed.service';
import FeedItem from './feed_item/FeedItem';
import styles from './feed.module.scss';

export default function Feed() {
  const [feedItems, setFeedItems] = useState<FeedItemType[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);

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

  useEffect(() => {
    if (feedItems.length > 0) return;
    fetchFeedItems();
  }, [fetchFeedItems, feedItems.length]);

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
        />
      ))}
      {loading && <p className={styles.loading}>Loading...</p>}
    </div>
  );
}
