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
                  <circle cx="20" cy="20" r="19" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.1)"/>
                  <path d="M20 8 C14 8 10 13 10 18 C10 24 16 28 20 32 C24 28 30 24 30 18 C30 13 26 8 20 8Z" fill="white" opacity="0.3"/>
                  <circle cx="20" cy="16" r="4" fill="white"/>
                  <path d="M14 26 Q20 22 26 26" stroke="white" strokeWidth="1.5" fill="none"/>
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
              <li><a href="#programs">Rescue & Protection</a></li>
              <li><a href="#programs">Healing & Counseling</a></li>
              <li><a href="#programs">Education & Skills</a></li>
              <li><a href="#programs">Empowerment</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Connect With Us</h4>
            <div className={styles.socialIcons}>
              {/* Facebook */}
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className={styles.socialIcon} aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterText}>Stay updated with our latest stories and impact.</p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Your email address"
                className={styles.emailInput}
              />
              <button className={styles.sendBtn} aria-label="Subscribe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
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
