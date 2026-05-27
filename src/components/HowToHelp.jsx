import styles from './HowToHelp.module.css';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const ways = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="rgba(255,255,255,0.2)" />
        <path
          d="M24 34 C24 34 12 26 12 18 C12 14 15 11 19 11 C21.5 11 23.5 12.5 24 14 C24.5 12.5 26.5 11 29 11 C33 11 36 14 36 18 C36 26 24 34 24 34Z"
          fill="white"
          opacity="0.9"
        />
      </svg>
    ),
    label: 'Donate',
    desc: 'Your financial gift funds rescue operations, shelter, education, and care for girls in need.',
    target: 'donate',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="rgba(255,255,255,0.2)" />
        <circle cx="24" cy="16" r="5" fill="white" opacity="0.9" />
        <path
          d="M14 36 C14 28 18 24 24 24 C30 24 34 28 34 36"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M33 12 L34.2 15.5 L38 15.5 L35 17.8 L36.2 21.5 L33 19.2 L29.8 21.5 L31 17.8 L28 15.5 L31.8 15.5 Z"
          fill="white"
          opacity="0.85"
        />
      </svg>
    ),
    label: 'Help a Girl',
    desc: "Sponsor a girl's education, mentorship, and rehabilitation journey — change one life at a time.",
    target: 'donate',
  },
];

const HowToHelp = () => {
  return (
    <section className={styles.section} id="involved">
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.heading}>How You Can Help</h2>
          <p className={styles.subtext}>Your support can change a girl's life.</p>
        </div>
        <div className={styles.ways}>
          {ways.map((way, i) => (
            <div
              className={styles.wayItem}
              key={i}
              onClick={() => scrollTo(way.target)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollTo(way.target)}
            >
              <div className={styles.iconCircle}>{way.icon}</div>
              <span className={styles.wayLabel}>{way.label}</span>
              <p className={styles.wayDesc}>{way.desc}</p>
              <span className={styles.wayArrow}>→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
