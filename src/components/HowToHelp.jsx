import styles from './HowToHelp.module.css';

const ways = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="rgba(255,255,255,0.2)"/>
        <path d="M24 12 C18 12 14 16 14 20 C14 26 20 30 24 34 C28 30 34 26 34 20 C34 16 30 12 24 12Z" fill="white" opacity="0.9"/>
        <path d="M24 16 C20 16 18 18.5 18 20 C18 24 22 27 24 29 C26 27 30 24 30 20 C30 18.5 28 16 24 16Z" fill="white"/>
      </svg>
    ),
    label: 'Donate',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="rgba(255,255,255,0.2)"/>
        <circle cx="18" cy="18" r="4" fill="white" opacity="0.8"/>
        <circle cx="30" cy="18" r="4" fill="white" opacity="0.8"/>
        <circle cx="24" cy="16" r="4" fill="white"/>
        <path d="M10 34 C10 27 14 23 18 23" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M38 34 C38 27 34 23 30 23" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M14 36 C14 29 18 25 24 25 C30 25 34 29 34 36" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Volunteer',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="rgba(255,255,255,0.2)"/>
        <rect x="14" y="18" width="20" height="14" rx="3" fill="white" opacity="0.3"/>
        <rect x="16" y="20" width="16" height="10" rx="2" fill="white" opacity="0.5"/>
        <path d="M18 16 L18 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 16 L30 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="25" r="2" fill="white"/>
      </svg>
    ),
    label: 'Sponsor a Girl',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="rgba(255,255,255,0.2)"/>
        <path d="M12 24 L20 24 L22 18 L26 30 L28 24 L36 24" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="36" cy="16" r="4" fill="white" opacity="0.6"/>
        <path d="M34 16 L36 18 L39 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Spread Awareness',
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
            <div className={styles.wayItem} key={i}>
              <div className={styles.iconCircle}>{way.icon}</div>
              <span className={styles.wayLabel}>{way.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
