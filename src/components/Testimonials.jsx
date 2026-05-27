import { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Aaliyah Johnson',
    age: 17,
    location: 'Atlanta, Georgia',
    photo: '/rescue1.jpeg',
    stars: 5,
    story: `I was only 14 when I was taken from my family. I had lost all hope and didn't believe anyone cared. Then Save The Girls Foundation found me. They gave me a safe place to sleep, food, and people who actually listened. Today I'm in 11th grade, I love science, and I want to become a nurse. This foundation didn't just save my life — they gave me a reason to live it.`,
    tag: 'Rescued at 14 · Now thriving',
  },
  {
    name: 'Madison Williams',
    age: 19,
    location: 'Houston, Texas',
    photo: '/rescue2.jpeg',
    stars: 5,
    story: `I grew up in a home where I was never safe. By the time I was 15, I had nowhere to go. The foundation took me in, enrolled me in school, and connected me with a counselor who helped me understand that what happened to me was not my fault. I just graduated high school and I've been accepted to community college. I'm studying business. I want to open my own salon one day.`,
    tag: 'Rescued at 15 · College student',
  },
  {
    name: 'Destiny Brown',
    age: 18,
    location: 'Chicago, Illinois',
    photo: '/rescue3.jpeg',
    stars: 5,
    story: `Nobody believed me when I said I needed help. I was invisible. But the foundation saw me. They gave me therapy, taught me how to sew and design clothes, and helped me reconnect with my grandmother. I now run a small clothing business from home. I sell on Instagram and I'm saving up for fashion school. I am proof that a girl's story doesn't have to end in pain.`,
    tag: 'Rescued at 13 · Young entrepreneur',
  },
  {
    name: 'Jasmine Carter',
    age: 20,
    location: 'Philadelphia, Pennsylvania',
    photo: '/rescue4.jpeg',
    stars: 5,
    story: `I was trafficked at 16. I didn't know what was happening to me until the foundation's outreach team found me. The road to healing was long and hard, but I was never alone. I had social workers, counselors, and other girls who understood my pain. I'm now 20, I work part-time, and I volunteer every weekend to help other girls who are where I once was. Giving back is how I heal.`,
    tag: 'Rescued at 16 · Community volunteer',
  },
  {
    name: 'Brianna Thompson',
    age: 16,
    location: 'Detroit, Michigan',
    photo: '/rescue5.jpeg',
    stars: 5,
    story: `Before the foundation, I had missed two full years of school. I couldn't read properly and I was ashamed. The tutors here were so patient with me. They never made me feel stupid. Now I'm reading above my grade level and I just won a writing competition at my school. My teacher said I have a gift. I never thought anyone would say that about me. I'm so grateful.`,
    tag: 'Rescued at 14 · Award-winning writer',
  },
  {
    name: 'Kayla Robinson',
    age: 21,
    location: 'Los Angeles, California',
    photo: '/rescue6.jpeg',
    stars: 5,
    story: `I came to the foundation broken. I didn't trust anyone — not adults, not institutions, nobody. But the staff here were different. They never pushed me. They just showed up, every single day, until I was ready to open up. The therapy changed my life. I'm now studying social work at university because I want to be the person for someone else that this foundation was for me.`,
    tag: 'Rescued at 15 · University student',
  },
  {
    name: 'Serena Mitchell',
    age: 17,
    location: 'Dallas, Texas',
    photo: '/rescue7.jpeg',
    stars: 5,
    story: `I never thought I would smile again. After everything I went through, happiness felt like something that belonged to other people. But the foundation gave me art therapy, a safe room, and a mentor who believed in me before I believed in myself. I now paint every day. My artwork was displayed at a community gallery last month. I am more than what happened to me.`,
    tag: 'Rescued at 13 · Emerging artist',
  },
];

const StarRating = ({ count }) => (
  <div className={styles.stars}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className={styles.star}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const current = testimonials[active];

  return (
    <section className={styles.section} id="stories">
      <div className={styles.container}>
        <p className={styles.sectionLabel}>STORIES OF HOPE</p>
        <h2 className={styles.heading}>
          Voices of <span className={styles.pink}>Rescued Girls</span>
        </h2>
        <p className={styles.subheading}>
          Real stories. Real courage. Real transformation. These girls chose to share their
          journeys so others know — there is always hope.
        </p>

        {/* Featured Testimonial */}
        <div className={styles.featured}>
          <div className={styles.featuredInner}>
            <div className={styles.bigQuote}>"</div>
            <p className={styles.featuredText}>{current.story}</p>
            <div className={styles.featuredAuthor}>
              <div className={styles.featuredAvatarWrap}>
                <img
                  src={current.photo}
                  alt={current.name}
                  className={styles.featuredAvatar}
                />
              </div>
              <div>
                <p className={styles.featuredName}>{current.name}</p>
                <p className={styles.featuredMeta}>
                  Age {current.age} · {current.location}
                </p>
                <span className={styles.tag}>{current.tag}</span>
              </div>
              <div className={styles.featuredStars}>
                <StarRating count={current.stars} />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.navRow}>
            <button className={styles.navBtn} onClick={prev} aria-label="Previous">←</button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className={styles.navBtn} onClick={next} aria-label="Next">→</button>
          </div>
        </div>

        {/* Grid of all testimonials */}
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div
              className={`${styles.card} ${i === active ? styles.cardActive : ''}`}
              key={i}
              onClick={() => setActive(i)}
            >
              <StarRating count={t.stars} />
              <p className={styles.cardText}>"{t.story.slice(0, 115)}…"</p>
              <div className={styles.cardAuthor}>
                <div className={styles.avatarWrap}>
                  <img
                    src={t.photo}
                    alt={t.name}
                    className={styles.avatar}
                  />
                </div>
                <div>
                  <p className={styles.cardName}>{t.name}</p>
                  <p className={styles.cardLocation}>{t.location}</p>
                </div>
              </div>
              <span className={styles.cardTag}>{t.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
