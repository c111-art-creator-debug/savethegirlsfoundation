import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <img
            src="/logo (2).png"
            alt="Save The Girls Foundation"
            className={styles.logoImg}
          />
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
        <button
          className={styles.donateBtn}
          onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
        >
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
