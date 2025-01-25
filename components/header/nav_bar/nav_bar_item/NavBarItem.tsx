import Link from 'next/link';
import cn from 'classnames';
import styles from './nav_bar_item.module.scss';
import icons, { IconName } from '@/components/icons';

interface NavBarItemProps {
  text: string;
  href: string;
  iconName: IconName;
  isActive: boolean;
}

const NavBarItem: React.FC<NavBarItemProps> = ({
  text,
  href,
  iconName,
  isActive,
}) => {
  const Icon = icons[iconName];

  return (
    <li className={cn(styles.container, { [styles.active]: isActive })}>
      <Link href={href} className={styles.link}>
        <Icon className={styles.icon} />
        {text}
      </Link>
    </li>
  );
};

export default NavBarItem;
