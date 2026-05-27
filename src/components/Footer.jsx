import { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setShowModal(true);
    setEmail('');
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.topSection}>
          <div className={styles.container}>

            {/* Logo Column */}
            <div className={styles.logoCol}>
              <div className={styles.logo}>
                <img
                  src="/logo (2).png"
                  alt="Save The Girls Foundation"
                  className={styles.logoImg}
                />
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
              <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className={styles.emailInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={styles.sendBtn} aria-label="Subscribe">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
              <p className={styles.contactLine}>
                Email us:{' '}
                <a href="mailto:savethegirlsfoundation.com" className={styles.contactEmail}>
                  savethegirlsfoundation.com
                </a>
              </p>
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

      {/* Newsletter Success Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#e91e8c" opacity="0.12"/>
                <circle cx="12" cy="12" r="11" stroke="#e91e8c" strokeWidth="1.5"/>
                <polyline points="7 12 10.5 15.5 17 9" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.modalTitle}>You're subscribed!</h3>
            <p className={styles.modalText}>
              Thank you for joining our community. We'll keep you updated with the latest
              stories, impact reports, and ways to help.
            </p>
            <button className={styles.modalBtn} onClick={() => setShowModal(false)}>
              Got it ✓
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
