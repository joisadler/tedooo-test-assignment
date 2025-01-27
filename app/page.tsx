import styles from './page.module.scss';
import Link from 'next/link';
import TedooLogoWithTextIcon from '@/components/icons/TedooLogoWithTextIcon';

const IndexPage: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.logo_container}>
        <TedooLogoWithTextIcon className={styles.logo} />
      </div>
      <h1 className={styles.main_title}>
        Welcome to My Test Assignment Project!
      </h1>
      <p className={styles.text}>
        Here&apos;s a quick overview of the tools I used and their purposes:
      </p>
      <ul className={styles.toolsList}>
        <li className={styles.text_item}>
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          <strong>Next.js</strong> - for building a fast and efficient
          React-based web app with minimal need to configure things and a
          convenient routing system right out of the box.
        </li>
        <li className={styles.text_item}>
          <span role="img" aria-label="palette">
            🎨
          </span>{' '}
          <strong>SCSS Modules</strong> - for modular and maintainable styling
          with design system variables, nesting, and the ability to use mixins
          and functions.
        </li>
        <li className={styles.text_item}>
          <span role="img" aria-label="gear">
            ⚛️
          </span>{' '}
          <strong>Functional Components with Hooks</strong> - for clean and
          efficient component logic.
        </li>
        <li className={styles.text_item}>
          <span role="img" aria-label="wrench">
            ✨
          </span>{' '}
          <strong>ESLint & Prettier</strong> - for maintaining code quality and
          consistent formatting across the project.
        </li>
        <li className={styles.text_item}>
          <span role="img" aria-label="shield">
            🛡️
          </span>{' '}
          <strong>TypeScript</strong> - for type safety, better developer
          experience, and catching errors early in the development process.
        </li>
        <li className={styles.text_item}>
          <span role="img" aria-label="diamond">
            💎
          </span>{' '}
          <strong>SVG Icon Components</strong> - for scalable and customizable
          icons with benefits such as improved performance, accessibility, and
          easier styling.
        </li>
      </ul>
      <h2 className={styles.section_title}>User Feed with Infinite Scroll</h2>
      <p className={styles.text}>
        I implemented infinite scrolling by listening to the <code>scroll</code>{' '}
        event to detect when the user reaches the end of the page. To optimize
        performance, I used the throttling technique and fetch the next 6 items
        only when needed.
      </p>
      <h2 className={styles.section_title}>Bonus Part Implementation</h2>
      <p className={styles.text}>
        To ensure impressions are sent only once per item:
      </p>
      <ul>
        <li className={styles.text_item}>
          Used a <strong>ref with a Set structure</strong> to store unique item
          IDs, ensuring no duplicate impressions are sent.
        </li>
        <li className={styles.text_item}>
          Used a <strong>ref with a Map structure</strong> to store DOM
          elements, allowing efficient visibility checks when scrolling.
        </li>
      </ul>
      <Link href="/home" className={styles.home_link}>
        Go to Home Page&nbsp;
        <span role="img" aria-label="right arrow">
          ➡️
        </span>
      </Link>
      <p className={styles.text}>
        <strong>
          P.S. Also, don&apos;t forget to check out the{' '}
          <Link href="/profile" className={styles.text_link}>
            Profile page
          </Link>
          ! 😊
        </strong>
      </p>
    </main>
  );
};

export default IndexPage;
