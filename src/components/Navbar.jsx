import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19" stroke="#e91e8c" strokeWidth="2" fill="white"/>
              <path d="M20 8 C14 8 10 13 10 18 C10 24 16 28 20 32 C24 28 30 24 30 18 C30 13 26 8 20 8Z" fill="#e91e8c" opacity="0.15"/>
              <path d="M20 10 C15 10 12 14 12 18 C12 23 17 27 20 30 C23 27 28 23 28 18 C28 14 25 10 20 10Z" fill="#e91e8c" opacity="0.3"/>
              <circle cx="20" cy="16" r="4" fill="#e91e8c"/>
              <path d="M14 26 Q20 22 26 26" stroke="#e91e8c" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoSave}>Save </span>
            <span className={styles.logoPink}>the girls</span>
            <br />
            <span className={styles.logoFoundation}>FOUNDATION</span>
            <br />
            <span className={styles.logoTagline}>Educate. Empower. Protect.</span>
          </div>
        </div>

        {/* Nav Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li><a href="#home" className={styles.active}>Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#programs">Our Programs</a></li>
          <li><a href="#involved">Get Involved</a></li>
          <li><a href="#stories">Stories</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Donate Button */}
        <button className={styles.donateBtn}>
          <span className={styles.heartIcon}>♥</span> Donate Now
        </button>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
