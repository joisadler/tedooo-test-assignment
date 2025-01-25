import styles from './header.module.scss';
import TedoooLogoIcon from '@/components/icons/TedoooLogoIcon';
import SearchBar from './search_bar';
import NavBar from './nav_bar';
import UserAvatar from './user_avatar/UserAvatar';

export default function Header() {
  const handleSearch = (value: string) => {
    // TODO: Implement search if needed
    console.log('Search:', value);
  };

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left_section}>
          <a href="https://www.tedooo.com" className={styles.logo_link}>
            <TedoooLogoIcon className={styles.logo} />
          </a>
          <SearchBar placeholder="Search" onSearch={handleSearch} />
        </div>
        <div className={styles.right_section}>
          <NavBar />
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
