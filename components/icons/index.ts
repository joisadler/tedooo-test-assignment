import CommentIcon from './CommentIcon';
import HomeIcon from './HomeIcon';
import LikeIcon from './LikeIcon';
import LikesIcon from './LikesIcon';
import MessageIcon from './MessageIcon';
import NotificationIcon from './NotificationIcon';
import SearchIcon from './SearchIcon';
import TedoooLogoIcon from './TedoooLogoIcon';
import TedooLogoWithTextIcon from './TedooLogoWithTextIcon';

const icons = {
  CommentIcon,
  HomeIcon,
  LikeIcon,
  LikesIcon,
  MessageIcon,
  NotificationIcon,
  SearchIcon,
  TedoooLogoIcon,
  TedooLogoWithTextIcon,
};

export type IconName = keyof typeof icons;

export default icons;
