import { useState } from 'react';
import styles from './DonatePage.module.css';

const PAYPAL_EMAIL = 'julieannganley@gmail.com';

const DonatePage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PAYPAL_EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section className={styles.section} id="donate">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.sectionLabel}>MAKE A DIFFERENCE</p>
          <h2 className={styles.heading}>
            Your Gift Rescues a <span className={styles.pink}>Girl Today</span>
          </h2>
          <p className={styles.subheading}>
            Every donation — no matter the size — funds rescue operations, safe shelter,
            education, and healing for girls who need it most.
          </p>
        </div>

        <div className={styles.grid}>

          {/* PayPal Card */}
          <div className={styles.btcCard}>
            {/* Glow blob */}
            <div className={styles.glowBlob}></div>

            {/* PayPal Logo */}
            <div className={styles.btcLogoWrap}>
              <svg className={styles.btcLogo} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="#003087"/>
                <path
                  d="M28 18h9.5c3.3 0 6 2.2 6.8 5.3.2.7.2 1.5.2 2.2 0 4.4-3.6 8-8 8h-3.2l-1.1 6.5c-.1.6-.6 1-1.2 1h-4c-.4 0-.7-.4-.6-.8l3.6-21.2c.1-.6.6-1 1.2-1zm-7.5 8h9.5c.6 0 1 .4 1 1 0 .1 0 .2-.1.3l-1.5 9c-.1.6-.6 1-1.2 1h-4c-.4 0-.7-.4-.6-.8l2-11.5c.1-.6.6-1 1.2-1z"
                  fill="#009CDE"
                />
                <path
                  d="M20.5 26h9.5c.6 0 1 .4 1 1 0 .1 0 .2-.1.3l-1.5 9c-.1.6-.6 1-1.2 1h-4c-.4 0-.7-.4-.6-.8l2-11.5c.1-.6.6-1 1.2-1z"
                  fill="#012169"
                />
              </svg>
            </div>

            <h3 className={styles.btcTitle}>Donate with PayPal</h3>
            <p className={styles.btcSubtitle}>
              Send any amount to our PayPal email below. Your contribution goes directly
              toward rescuing and supporting girls in need.
            </p>

            {/* PayPal decorative pattern */}
            <div className={styles.qrBox}>
              <div className={styles.qrInner}>
                <svg viewBox="0 0 80 80" fill="none" className={styles.qrSvg}>
                  {/* Corner squares with PayPal colors */}
                  <rect x="4" y="4" width="22" height="22" rx="3" fill="#003087" opacity="0.15"/>
                  <rect x="7" y="7" width="16" height="16" rx="2" stroke="#003087" strokeWidth="2" fill="none"/>
                  <rect x="11" y="11" width="8" height="8" rx="1" fill="#009CDE"/>

                  <rect x="54" y="4" width="22" height="22" rx="3" fill="#003087" opacity="0.15"/>
                  <rect x="57" y="7" width="16" height="16" rx="2" stroke="#003087" strokeWidth="2" fill="none"/>
                  <rect x="61" y="11" width="8" height="8" rx="1" fill="#009CDE"/>

                  <rect x="4" y="54" width="22" height="22" rx="3" fill="#003087" opacity="0.15"/>
                  <rect x="7" y="57" width="16" height="16" rx="2" stroke="#003087" strokeWidth="2" fill="none"/>
                  <rect x="11" y="61" width="8" height="8" rx="1" fill="#009CDE"/>

                  {/* Center dots pattern */}
                  <rect x="32" y="8" width="4" height="4" rx="1" fill="#009CDE" opacity="0.6"/>
                  <rect x="38" y="8" width="4" height="4" rx="1" fill="#003087" opacity="0.4"/>
                  <rect x="32" y="14" width="4" height="4" rx="1" fill="#003087" opacity="0.4"/>
                  <rect x="38" y="14" width="4" height="4" rx="1" fill="#009CDE" opacity="0.7"/>
                  <rect x="44" y="8" width="4" height="4" rx="1" fill="#003087" opacity="0.5"/>

                  <rect x="8" y="32" width="4" height="4" rx="1" fill="#003087" opacity="0.5"/>
                  <rect x="14" y="32" width="4" height="4" rx="1" fill="#009CDE" opacity="0.7"/>
                  <rect x="8" y="38" width="4" height="4" rx="1" fill="#003087" opacity="0.4"/>
                  <rect x="14" y="38" width="4" height="4" rx="1" fill="#009CDE" opacity="0.6"/>
                  <rect x="8" y="44" width="4" height="4" rx="1" fill="#003087" opacity="0.7"/>

                  <rect x="32" y="32" width="16" height="16" rx="3" fill="#003087" opacity="0.12"/>
                  <rect x="36" y="36" width="8" height="8" rx="2" fill="#009CDE" opacity="0.5"/>

                  <rect x="54" y="32" width="4" height="4" rx="1" fill="#009CDE" opacity="0.6"/>
                  <rect x="60" y="32" width="4" height="4" rx="1" fill="#003087" opacity="0.4"/>
                  <rect x="66" y="32" width="4" height="4" rx="1" fill="#009CDE" opacity="0.7"/>
                  <rect x="54" y="38" width="4" height="4" rx="1" fill="#003087" opacity="0.5"/>
                  <rect x="60" y="38" width="4" height="4" rx="1" fill="#009CDE" opacity="0.6"/>

                  <rect x="32" y="54" width="4" height="4" rx="1" fill="#003087" opacity="0.7"/>
                  <rect x="38" y="54" width="4" height="4" rx="1" fill="#009CDE" opacity="0.4"/>
                  <rect x="44" y="54" width="4" height="4" rx="1" fill="#003087" opacity="0.6"/>
                  <rect x="32" y="60" width="4" height="4" rx="1" fill="#009CDE" opacity="0.5"/>
                  <rect x="38" y="60" width="4" height="4" rx="1" fill="#003087" opacity="0.7"/>
                  <rect x="44" y="60" width="4" height="4" rx="1" fill="#009CDE" opacity="0.4"/>
                  <rect x="32" y="66" width="4" height="4" rx="1" fill="#003087" opacity="0.6"/>
                  <rect x="44" y="66" width="4" height="4" rx="1" fill="#009CDE" opacity="0.5"/>
                </svg>
                <div className={styles.qrLabel}>PayPal</div>
              </div>
            </div>

            {/* Email box */}
            <div className={styles.addressLabel}>PayPal Email Address</div>
            <div className={styles.addressBox}>
              <span className={styles.addressText}>{PAYPAL_EMAIL}</span>
              <button
                className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
                onClick={handleCopy}
                aria-label="Copy PayPal email"
              >
                {copied ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Notice */}
            <p className={styles.notice}>
              💳 Donations are processed securely through PayPal. Please verify the email 
              address before sending. All donations are non-refundable.
            </p>

            {/* Important instruction */}
            <p className={styles.notice} style={{ marginTop: '1rem', fontWeight: '600' }}>
              ⚠️ Set payment description/narration as <strong>Family & friends</strong> when donating.
            </p>
          </div>

          {/* Right side — impact + email */}
          <div className={styles.rightCol}>

            {/* Impact breakdown */}
            <div className={styles.impactCard}>
              <h3 className={styles.impactTitle}>What Your Donation Does</h3>
              <div className={styles.impactList}>
                {[
                  { amount: '$50',   desc: 'Provides two weeks of meals and basic care for one girl' },
                  { amount: '$100',  desc: 'Covers school supplies and uniforms for a full term' },
                  { amount: '$200',  desc: 'Funds a month of counseling and mental health support' },
                  { amount: '$500',  desc: 'Sponsors a girl\'s full semester of education' },
                  { amount: '$1,000', desc: 'Supports complete rehabilitation and reintegration' },
                ].map((item, i) => (
                  <div className={styles.impactRow} key={i}>
                    <span className={styles.impactAmount}>{item.amount}</span>
                    <span className={styles.impactDesc}>{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact via email */}
            <div className={styles.emailCard}>
              <div className={styles.emailIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className={styles.emailLabel}>Questions about donating? Reach us at</p>
                <a
                  href="mailto:savethegirlsfoundation.com"
                  className={styles.emailAddress}
                >
                  savethegirlsfoundation.com
                </a>
              </div>
            </div>

            {/* Trust badges */}
            <div className={styles.badges}>
              {[
                { icon: '🔒', text: 'Secure & Anonymous' },
                { icon: '💛', text: '100% Goes to Girls' },
                { icon: '🌍', text: 'Global Impact' },
              ].map((b, i) => (
                <div className={styles.badge} key={i}>
                  <span className={styles.badgeIcon}>{b.icon}</span>
                  <span className={styles.badgeText}>{b.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
