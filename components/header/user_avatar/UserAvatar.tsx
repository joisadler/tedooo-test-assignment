import styles from './user_avatar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

const UserAvatar: React.FC = () => {
  // TODO: Replace with real current user avatar when implemented
  const src = '/images/yossi_adler_min.webp';

  const isProfilePage = usePathname() === '/profile';

  return (
    <div className={cn(styles.container, { [styles.active]: isProfilePage })}>
      <Link href="/profile">
        <Image
          className={styles.avatar}
          src={src}
          alt="User avatar"
          width={40}
          height={40}
          layout="fixed"
        />
      </Link>
    </div>
  );
};

export default UserAvatar;
