import React from 'react';
import styles from './profile_page.module.scss';
import Image from 'next/image';

const ProfilePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Image
          src="/images/yossi_adler_full.webp"
          alt="Yossi Adler"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>Yossi Adler</h1>
          <p className={styles.subtitle}>Front End Developer</p>
          <div className={styles.contact_info}>
            <p>
              <a href="tel:0584782771" className={styles.link}>
                0584782771
              </a>{' '}
              |
              <a href="mailto:joisadler@gmail.com" className={styles.link}>
                joisadler@gmail.com
              </a>{' '}
              |
              <a
                href="https://www.linkedin.com/in/joisadler"
                className={styles.link}
              >
                linkedin.com/in/joisadler
              </a>{' '}
              |
              <a href="https://github.com/joisadler" className={styles.link}>
                github.com/joisadler
              </a>
            </p>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Summary</h2>
        <p className={styles.text}>
          Experienced Front End Developer with a strong focus on building
          high-performance, user-friendly web interfaces. Proficient in modern
          frontend technologies like <strong>React</strong>,{' '}
          <strong>Next.js</strong>, and <strong>TypeScript</strong>, with
          extensive experience in improving accessibility and user experience.
          Effectively integrating AI tools into development processes to enhance
          productivity.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        <div className={styles.job}>
          <h3 className={styles.jobTitle}>
            01.2024 - 12.2024 - Software Engineer (
            <a href="https://microsoft.com" className={styles.link}>
              Microsoft
            </a>{' '}
            vendor) at{' '}
            <a href="https://www.startupbooster.dev/" className={styles.link}>
              Startup Booster
            </a>
          </h3>
          <ul className={styles.list}>
            <li>
              Contributed to the development and enhancement of Microsoft
              cybersecurity product interfaces, including{' '}
              <a
                href="https://www.microsoft.com/en-us/security/business/microsoft-defender"
                className={styles.link}
              >
                Microsoft Defender
              </a>{' '}
              and{' '}
              <a
                href="https://azure.microsoft.com/en-us/products/microsoft-sentinel"
                className={styles.link}
              >
                Sentinel
              </a>
              .
            </li>
            <li>
              Participated in the development of UI components for libraries
              used across various Microsoft products.
            </li>
            <li>
              Focused on accessibility improvements, ensuring inclusivity for
              thousands of users.
            </li>
          </ul>
        </div>

        <div className={styles.job}>
          <h3 className={styles.jobTitle}>
            07.2021 - 12.2023 - Software Engineer at{' '}
            <a href="https://www.startupbooster.dev/" className={styles.link}>
              Startup Booster
            </a>
          </h3>
          <ul className={styles.list}>
            <li>
              Developed responsive web applications using <strong>React</strong>
              , <strong>Next.js</strong>, and
              <strong>TypeScript</strong>.
            </li>
            <li>
              Built mobile applications from scratch using{' '}
              <strong>React Native</strong>.
            </li>
            <li>
              Participated in Agile sprints, performing code reviews and
              documentation.
            </li>
          </ul>
        </div>

        <div className={styles.job}>
          <h3 className={styles.jobTitle}>
            09.2020 - 07.2021 - Front End Developer at{' '}
            <a href="https://inter.dev" className={styles.link}>
              Inter.dev
            </a>
          </h3>
          <ul className={styles.list}>
            <li>
              Created responsive{' '}
              <a href="https://inter.dev" className={styles.link}>
                websites
              </a>{' '}
              and{' '}
              <a href="https://mykeepy.com" className={styles.link}>
                landing pages
              </a>{' '}
              using modern techniques, enhancing accessibility and user
              engagement.
            </li>
            <li>
              Redesigned a large marketplace, improving UX/UI and achieving a
              Lighthouse performance score increase from 11% to 99%.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <ul className={styles.list}>
          <li>
            Full Stack Developer Bootcamp,{' '}
            <a href="https://www.coding-academy.org/" className={styles.link}>
              Coding Academy
            </a>
            , 2020
          </li>
          <li>
            JavaScript Web Developer Course,{' '}
            <a href="https://hexlet.io/" className={styles.link}>
              Hexlet.io
            </a>
            , 2017
          </li>
          <li>
            Continuous self-education through online courses, pet-projects, and
            meetups.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul className={styles.list}>
          <li>
            <h3>Frontend</h3> HTML5, CSS3, JavaScript (ES6+), TypeScript, React,
            React Native, Redux, Zustand, Sass (.scss), CSS Modules, Styled
            Components, Tailwind CSS, Material UI, FluentUI, Accessibility
            (WCAG), SVG, Canvas.
          </li>
          <li>
            <h3>Basic Backend Knowledge</h3> Node.js, Express.js, Next.js,
            MongoDB, RavenDB, REST API.
          </li>
          <li>
            <h3>Tools</h3> VSCode, Git, Eslint, Prettier, npm/Yarn, Figma,
            Storybook, Testim.io, Puppeteer, Lighthouse, Agile (Jira, Trello,
            Monday, Teamwork), AWS S3, Firebase, MacOS/Linux/Windows, GitHub
            Copilot, ChatGPT.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ProfilePage;
