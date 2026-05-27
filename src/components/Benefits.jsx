import styles from './Benefits.module.css';

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="26" fill="#fce4f3"/>
        <path d="M28 14 C22 14 18 18 18 22 C18 28 24 32 28 36 C32 32 38 28 38 22 C38 18 34 14 28 14Z" fill="#e91e8c" opacity="0.25"/>
        <path d="M28 18 C24 18 22 20.5 22 22 C22 26 26 29 28 31 C30 29 34 26 34 22 C34 20.5 32 18 28 18Z" fill="#e91e8c" opacity="0.5"/>
        <path d="M23 22 L26 25 L33 19" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 42 L28 38 L36 42" stroke="#e91e8c" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Social Support',
    desc: 'Every rescued girl is connected to a dedicated social worker and a peer support network. We ensure no girl walks her recovery journey alone — community, belonging, and sisterhood are at the core of our model.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="26" fill="#fce4f3"/>
        <rect x="14" y="26" width="28" height="18" rx="3" fill="#e91e8c" opacity="0.15"/>
        <path d="M18 26 L28 14 L38 26" fill="#e91e8c" opacity="0.35"/>
        <rect x="23" y="34" width="10" height="10" rx="1.5" fill="#e91e8c" opacity="0.5"/>
        <circle cx="38" cy="20" r="6" fill="#e91e8c" opacity="0.2"/>
        <path d="M36 20 L38 22 L41 18" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Quality Education',
    desc: 'We provide full academic scholarships, school supplies, tutoring, and mentorship. Girls are enrolled in accredited schools and vocational programs tailored to their age, ability, and aspirations.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="26" fill="#fce4f3"/>
        <rect x="16" y="20" width="24" height="20" rx="3" fill="#e91e8c" opacity="0.15"/>
        <path d="M22 20 L22 16" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34 20 L34 16" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 28 L40 28" stroke="#e91e8c" strokeWidth="1.5"/>
        <circle cx="28" cy="34" r="2.5" fill="#e91e8c"/>
        <path d="M22 34 L22 34" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34 34 L34 34" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Health & Welfare',
    desc: 'Comprehensive medical care, mental health counseling, nutritional support, and hygiene provisions are offered to every girl in our program. We treat the whole person — body, mind, and spirit.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="26" fill="#fce4f3"/>
        <circle cx="28" cy="22" r="5" fill="#e91e8c" opacity="0.3"/>
        <circle cx="28" cy="22" r="3" fill="#e91e8c"/>
        <path d="M20 34 C20 29 23.5 26 28 26 C32.5 26 36 29 36 34" stroke="#e91e8c" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M28 36 L28 42" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 39 L32 39" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34 16 L38 14 L40 18" stroke="#e91e8c" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Skills & Empowerment',
    desc: 'From coding and fashion design to entrepreneurship and public speaking — girls are trained in practical life skills that open doors to financial independence and leadership opportunities.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="26" fill="#fce4f3"/>
        <path d="M28 14 L32 22 L42 23 L35 30 L37 40 L28 35 L19 40 L21 30 L14 23 L24 22 Z" fill="#e91e8c" opacity="0.2" stroke="#e91e8c" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M28 18 L31 24 L38 25 L33 30 L34.5 37 L28 33.5 L21.5 37 L23 30 L18 25 L25 24 Z" fill="#e91e8c" opacity="0.4"/>
      </svg>
    ),
    title: 'Safe Housing',
    desc: 'Girls rescued from dangerous environments are placed in secure, nurturing shelter homes staffed by trained caregivers. Our homes are safe spaces where healing, laughter, and growth are possible.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="26" fill="#fce4f3"/>
        <circle cx="20" cy="22" r="4" fill="#e91e8c" opacity="0.3"/>
        <circle cx="36" cy="22" r="4" fill="#e91e8c" opacity="0.3"/>
        <circle cx="28" cy="20" r="4" fill="#e91e8c"/>
        <path d="M12 38 C12 31 16 27 20 27" stroke="#e91e8c" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M44 38 C44 31 40 27 36 27" stroke="#e91e8c" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M16 40 C16 33 21 29 28 29 C35 29 40 33 40 40" stroke="#e91e8c" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Family Reunification',
    desc: 'Where safe and appropriate, we work to reunite girls with their families through mediation, family counseling, and ongoing monitoring — because a loving home is the greatest gift we can restore.',
  },
];

const Benefits = () => {
  return (
    <section className={styles.section} id="benefits">
      <div className={styles.container}>
        <p className={styles.sectionLabel}>WHAT RESCUED GIRLS RECEIVE</p>
        <h2 className={styles.heading}>
          A Complete Support System for <span className={styles.pink}>Every Girl</span>
        </h2>
        <p className={styles.subheading}>
          When a girl comes to us, she receives far more than rescue. She receives a second chance at life — with every resource she needs to thrive.
        </p>

        <div className={styles.grid}>
          {benefits.map((b, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.iconWrap}>{b.icon}</div>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
