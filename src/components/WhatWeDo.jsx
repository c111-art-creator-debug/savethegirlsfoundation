import styles from './WhatWeDo.module.css';

const programs = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#fce4f3"/>
        <circle cx="24" cy="18" r="5" fill="#e91e8c" opacity="0.3"/>
        <circle cx="24" cy="18" r="3.5" fill="#e91e8c"/>
        <path d="M12 36 C12 28 17 24 24 24 C31 24 36 28 36 36" stroke="#e91e8c" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M24 12 L26 10 L24 8 L22 10 Z" fill="#e91e8c"/>
      </svg>
    ),
    title: 'Rescue & Protection',
    desc: 'We rescue girls from exploitation and abuse and provide immediate safety, shelter, and compassionate care.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#fce4f3"/>
        <path d="M16 20 C16 16 19 13 24 13 C29 13 32 16 32 20 C32 25 28 28 24 30 C20 28 16 25 16 20Z" fill="#e91e8c" opacity="0.2"/>
        <path d="M18 20 C18 17 20.5 15 24 15 C27.5 15 30 17 30 20 C30 24 27 27 24 28.5 C21 27 18 24 18 20Z" fill="#e91e8c" opacity="0.3"/>
        <path d="M21 20 L23 22 L27 18" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 34 L24 31 L30 34" stroke="#e91e8c" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Healing & Counseling',
    desc: 'We offer informed counseling and therapy programs to restore self-worth and confidence.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#fce4f3"/>
        <rect x="12" y="22" width="24" height="16" rx="2" fill="#e91e8c" opacity="0.15"/>
        <path d="M16 22 L24 13 L32 22" fill="#e91e8c" opacity="0.4"/>
        <rect x="20" y="30" width="8" height="8" rx="1" fill="#e91e8c" opacity="0.5"/>
        <circle cx="32" cy="16" r="5" fill="#e91e8c" opacity="0.2"/>
        <path d="M30 16 L32 18 L35 14" stroke="#e91e8c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Education & Skills',
    desc: 'Education, vocational training, and life skills to live their best independent and bright futures.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#fce4f3"/>
        <circle cx="24" cy="17" r="4" fill="#e91e8c" opacity="0.3"/>
        <circle cx="24" cy="17" r="2.5" fill="#e91e8c"/>
        <path d="M18 28 C18 24 20.5 22 24 22 C27.5 22 30 24 30 28" stroke="#e91e8c" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M24 30 L24 36" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 33 L28 33" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 12 L32 10 L34 14" stroke="#e91e8c" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Empowerment',
    desc: 'We motivate, empower, and support girls to achieve their dreams and become leaders in life.',
  },
];

const WhatWeDo = () => {
  return (
    <section className={styles.section} id="programs">
      <div className={styles.container}>
        <p className={styles.sectionLabel}>WHAT WE DO</p>
        <h2 className={styles.heading}>Making a Difference Every Day</h2>

        <div className={styles.cards}>
          {programs.map((prog, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.iconWrap}>{prog.icon}</div>
              <h3 className={styles.cardTitle}>{prog.title}</h3>
              <p className={styles.cardDesc}>{prog.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
