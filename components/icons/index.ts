import HomeIcon from './HomeIcon';
import MessageIcon from './MessageIcon';
import NotificationIcon from './NotificationIcon';
import SearchIcon from './SearchIcon';
import TedoooLogoIcon from './TedoooLogoIcon';

const icons = {
  HomeIcon,
  MessageIcon,
  NotificationIcon,
  SearchIcon,
  TedoooLogoIcon,
};

export type IconName = keyof typeof icons;

export default icons;
