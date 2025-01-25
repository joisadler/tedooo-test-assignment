import styles from './home_page.module.scss';

import Feed from '@/components/feed';

const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Feed />
      </main>
    </div>
  );
};

export default HomePage;
