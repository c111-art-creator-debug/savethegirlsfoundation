import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        {/* Left Text */}
        <div className={styles.content}>
          <p className={styles.sectionLabel}>ABOUT US</p>
          <h2 className={styles.heading}>
            Restoring Lives.<br />
            <span className={styles.pink}>Building Futures.</span>
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.text}>
            Save The Girls Foundation is dedicated to rescuing girls from exploitation and abuse,
            providing them with safety, education, counseling, and skills training to build
            independent futures.
          </p>
          <button className={styles.readBtn}>
            Read Our Story <span>→</span>
          </button>
        </div>

        {/* Right — single full image, ladies1.jpeg */}
        <div className={styles.imageGrid}>
          <div className={styles.mainImageWrap}>
            <img
              src="/ladies1.jpeg"
              alt="Girls at the foundation"
              className={styles.mainImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
