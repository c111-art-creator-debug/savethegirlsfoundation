import styles from './Leadership.module.css';

const leaders = [
  {
    image: '/man.jpg',
    name: 'Chairman Ray Barber Jr.',
    title: 'Chairman, Save The Girls Foundation',
    quote: '"Every girl deserves safety, dignity, and a future she can be proud of."',
    bio: `This is the Chairman of the Foundation — Chairman Ray Barber Jr. A passionate advocate for human rights and child welfare, Chairman Barber has dedicated over two decades of his life to fighting exploitation and building systems that protect vulnerable girls across communities. Under his visionary leadership, Save The Girls Foundation has grown from a grassroots initiative into a nationally recognized organization that has rescued and rehabilitated over 1,250 girls. He believes that when you invest in a girl, you invest in an entire generation.`,
  },
  {
    image: '/woman.jpg',
    name: 'Cherry Lovenny',
    title: 'Convener & Chief Executive Officer',
    quote: '"Healing begins the moment a girl knows she is not alone."',
    bio: `This is the Convener of the Foundation and Chief Executive Officer — Cherry Lovenny. A trailblazing leader in social welfare and community development, Cherry brings warmth, strategy, and relentless determination to every initiative she leads. With a background in psychology and nonprofit management, she has built the foundation's counseling, education, and empowerment programs from the ground up. Cherry's hands-on approach and deep empathy for survivors have made her a trusted voice in the fight against gender-based exploitation. She is the heart and operational backbone of Save The Girls Foundation.`,
  },
];

const Leadership = () => {
  return (
    <section className={styles.section} id="leadership">
      <div className={styles.container}>
        <p className={styles.sectionLabel}>OUR LEADERSHIP</p>
        <h2 className={styles.heading}>
          The People Behind <span className={styles.pink}>the Mission</span>
        </h2>
        <p className={styles.subheading}>
          Driven by purpose, guided by compassion — meet the leaders who make it all possible.
        </p>

        <div className={styles.cards}>
          {leaders.map((leader, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.imageWrap}>
                <img src={leader.image} alt={leader.name} className={styles.image} />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.quoteBox}>
                  <span className={styles.quoteIcon}>"</span>
                  <p className={styles.quoteText}>{leader.quote.replace(/"/g, '')}</p>
                </div>
                <h3 className={styles.name}>{leader.name}</h3>
                <p className={styles.title}>{leader.title}</p>
                <div className={styles.divider}></div>
                <p className={styles.bio}>{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
