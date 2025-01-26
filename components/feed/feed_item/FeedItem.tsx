/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';
import styles from './feed_item.module.scss';
import Image from 'next/image';
import { FeedItem as FeedItemType } from '@/services/feed/feed.service';
import LikesIcon from '@/components/icons/LikesIcon';
import FeedItemActionButton from '@/components/feed/feed_item_action_button';
import { IconName } from '@/components/icons';
import { getTimeAgo } from '../utils';

export interface FeedItemProps extends FeedItemType {
  onToggleLike: (id: string) => void;
  onComment: (id: string) => void;
}

const FeedItem: React.FC<FeedItemProps> = ({
  id,
  username,
  avatar,
  date,
  shopName,
  text,
  images,
  comments,
  likes,
  didLike,
  onToggleLike,
  onComment,
}) => {
  const renderTimeAgo = () => {
    return (
      <span className={styles.time_ago}>&nbsp;·&nbsp;{getTimeAgo(date)}</span>
    );
  };

  const renderShopName = () => {
    return <span className={styles.shop_name}>{shopName}</span>;
  };

  const renderInfo = () => {
    return (
      <div className={styles.info}>
        <div className={styles.info_line}>
          <span className={styles.username}>{username}</span>
          {!shopName && renderTimeAgo()}
        </div>
        {shopName && (
          <div className={styles.info_line}>
            {renderShopName()}
            {renderTimeAgo()}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.container} id={id}>
      <div className={styles.header}>
        <Image
          src={avatar}
          alt={username}
          width={40}
          height={40}
          className={styles.avatar}
        />
        <div>{renderInfo()}</div>
      </div>
      {text && <p className={styles.text}>{text}</p>}
      <div
        className={cn(styles.images, {
          [styles.singleImage]: images.length === 1,
        })}
      >
        {images.slice(0, 2).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Post image"
            className={styles.image}
          />
        ))}
      </div>
      <div className={styles.stats_container}>
        <div className={styles.stats}>
          <span className={styles.likes}>
            <LikesIcon className={styles.likes_icon} />
            {likes} likes
          </span>
          <span className={styles.comments}>{comments} comments</span>
        </div>
      </div>
      <div className={styles.actions}>
        <FeedItemActionButton
          isActive={didLike}
          iconName={'LikeIcon' as IconName}
          iconText="Like"
          onToggle={() => onToggleLike(id)}
        />
        <FeedItemActionButton
          isActive={false}
          iconName={'CommentIcon' as IconName}
          iconText="Comment"
          onToggle={() => onComment(id)}
        />
      </div>
    </div>
  );
};

export default FeedItem;
