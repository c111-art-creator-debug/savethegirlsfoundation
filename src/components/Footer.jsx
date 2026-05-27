import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.container}>

          {/* Logo Column */}
          <div className={styles.logoCol}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="19" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.1)" />
                  <path d="M20 8 C14 8 10 13 10 18 C10 24 16 28 20 32 C24 28 30 24 30 18 C30 13 26 8 20 8Z" fill="white" opacity="0.3" />
                  <circle cx="20" cy="16" r="4" fill="white" />
                  <path d="M14 26 Q20 22 26 26" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <div>
                <div className={styles.logoText}>
                  <span className={styles.logoWhite}>Save </span>
                  <span className={styles.logoPink}>the girls</span>
                </div>
                <div className={styles.logoFoundation}>FOUNDATION</div>
              </div>
            </div>
            <p className={styles.logoTagline}>Educate. Empower. Protect.</p>
            <p className={styles.logoDesc}>
              Dedicated to rescuing and empowering girls to build independent, dignified futures.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.colLinks}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Our Programs</a></li>
              <li><a href="#involved">Get Involved</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Programs</h4>
            <ul className={styles.colLinks}>
              <li><a href="#programs">Rescue &amp; Protection</a></li>
              <li><a href="#programs">Healing &amp; Counseling</a></li>
              <li><a href="#programs">Education &amp; Skills</a></li>
              <li><a href="#programs">Empowerment</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterText}>
              Stay updated with our latest stories and impact.
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Your email address"
                className={styles.emailInput}
              />
              <button className={styles.sendBtn} aria-label="Subscribe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            © 2024 Save The Girls Foundation. All Rights Reserved.
          </p>
          <p className={styles.credit}>
            <span className={styles.pink}>Educate. Empower. Protect.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
