'use client';

import styles from './nav_bar.module.scss';
import NavBarItem from './nav_bar_item';
import { navItems } from './utils';
import { IconName } from '@/components/icons';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const activeItem = navItems.find((item) => item.href === pathname);

  return (
    <nav className={styles.container}>
      <ul className={styles.nav_list}>
        {navItems.map((item) => (
          <NavBarItem
            key={item.text}
            text={item.text}
            href={item.href}
            iconName={item.iconName as IconName}
            isActive={item.href === activeItem?.href}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
