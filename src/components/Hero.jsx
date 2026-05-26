import heroImg from '../assets/hero.png';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      {/* Background decorative hearts */}
      <div className={styles.bgDecorations}>
        <div className={styles.heartBg1}>♡</div>
        <div className={styles.heartBg2}>♡</div>
        <div className={styles.heartBg3}>♡</div>
      </div>

      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Every girl<br />
            <span className={styles.pink}>deserves a future,</span><br />
            not just a chance.
          </h1>
          <div className={styles.divider}></div>
          <p className={styles.subtext}>
            We rescue girls, restore hope, and empower them<br />
            to live with <span className={styles.pink}>dignity</span>,{' '}
            <span className={styles.pink}>purpose</span>, and{' '}
            <span className={styles.pink}>confidence</span>.
          </p>
          <div className={styles.buttons}>
            <button className={styles.donateBtn}>
              <span>♥</span> Donate Now
            </button>
            <button className={styles.learnBtn}>
              Learn More <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.pinkBlob}></div>
          <img src={heroImg} alt="Girls supported by the foundation" className={styles.heroImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
