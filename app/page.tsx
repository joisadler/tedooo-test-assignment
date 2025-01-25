import styles from './page.module.scss';
import Link from 'next/link';

const IndexPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        index page
        <Link href="/home">Go to home page =&gt;</Link>
      </main>
    </div>
  );
};

export default IndexPage;
