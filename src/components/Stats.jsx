import styles from './Stats.module.css';

const stats = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="6" fill="#e91e8c" opacity="0.2"/>
        <circle cx="20" cy="14" r="4" fill="#e91e8c"/>
        <path d="M8 32 C8 24 12 20 20 20 C28 20 32 24 32 32" stroke="#e91e8c" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M20 8 L22 6 L20 4 L18 6 Z" fill="#e91e8c"/>
      </svg>
    ),
    number: '100+',
    label: 'Girls Rescued',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="8" y="18" width="24" height="16" rx="2" fill="#e91e8c" opacity="0.15"/>
        <rect x="10" y="20" width="20" height="12" rx="1" fill="#e91e8c" opacity="0.2"/>
        <path d="M14 18 L20 10 L26 18" fill="#e91e8c"/>
        <rect x="17" y="26" width="6" height="8" rx="1" fill="#e91e8c"/>
        <circle cx="30" cy="12" r="5" fill="#e91e8c" opacity="0.2"/>
        <path d="M28 12 L30 14 L33 10" stroke="#e91e8c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    number: '75+',
    label: 'Educated & Trained',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="14" cy="14" r="4" fill="#e91e8c" opacity="0.3"/>
        <circle cx="26" cy="14" r="4" fill="#e91e8c" opacity="0.3"/>
        <circle cx="20" cy="12" r="4" fill="#e91e8c"/>
        <path d="M6 30 C6 24 10 20 14 20" stroke="#e91e8c" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M34 30 C34 24 30 20 26 20" stroke="#e91e8c" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M10 32 C10 26 14 22 20 22 C26 22 30 26 30 32" stroke="#e91e8c" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    number: '12+',
    label: 'Communities Reached',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M20 6 L34 12 L34 22 C34 29 27 35 20 38 C13 35 6 29 6 22 L6 12 Z" fill="#e91e8c" opacity="0.15"/>
        <path d="M20 10 L30 15 L30 22 C30 27 25 32 20 34 C15 32 10 27 10 22 L10 15 Z" fill="#e91e8c" opacity="0.2"/>
        <path d="M15 21 L18 24 L25 17" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    number: '24/7',
    label: 'Safe Shelter & Care',
  },
];

const Stats = () => {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {stats.map((stat, i) => (
          <div className={styles.statCard} key={i}>
            <div className={styles.iconWrap}>{stat.icon}</div>
            <div className={styles.number}>{stat.number}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
