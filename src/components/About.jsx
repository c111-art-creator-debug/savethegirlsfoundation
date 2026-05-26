import heroImg from '../assets/hero.png';
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
            Save The Girls Foundation is dedicated to rescuing girls from exploitation and abuse, providing them with safety, education, counseling, and skills training to build independent futures.
          </p>
          <button className={styles.readBtn}>
            Read Our Story <span>→</span>
          </button>
        </div>

        {/* Right Image Grid */}
        <div className={styles.imageGrid}>
          <div className={styles.mainImageWrap}>
            <img src={heroImg} alt="Girl studying" className={styles.mainImage} />
          </div>
          <div className={styles.sideImages}>
            <div className={styles.sideImageWrap}>
              <img src={heroImg} alt="Girls at sunset" className={styles.sideImage} />
            </div>
            <div className={styles.playOverlay}>
              <div className={styles.playBtn}>
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" stroke="#e91e8c" strokeWidth="2" fill="white"/>
                  <path d="M10 8 L16 12 L10 16 Z" fill="#e91e8c"/>
                </svg>
              </div>
            </div>
            <div className={styles.sideImageWrap2}>
              <img src={heroImg} alt="Girls in class" className={styles.sideImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
