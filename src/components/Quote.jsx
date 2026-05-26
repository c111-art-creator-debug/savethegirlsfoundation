import styles from './Quote.module.css';

const Quote = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.quoteIcon}>"</div>
        <p className={styles.quoteText}>
          Together, we can save her today<br />
          and <span className={styles.pink}>empower her tomorrow.</span>
        </p>
        <div className={styles.underline}></div>
      </div>
    </section>
  );
};

export default Quote;
