import { useState } from 'react';
import styles from './DonatePage.module.css';

const BTC_ADDRESS = '1DyfkGSKG7ngH4Vcei3Y3BohiMmNdEgk8d';

const DonatePage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BTC_ADDRESS).then(() => {
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

          {/* Bitcoin Card */}
          <div className={styles.btcCard}>
            {/* Glow blob */}
            <div className={styles.glowBlob}></div>

            {/* Bitcoin Logo */}
            <div className={styles.btcLogoWrap}>
              <svg className={styles.btcLogo} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="#F7931A"/>
                <path
                  d="M46.1 27.4c.6-4.2-2.6-6.5-7-8l1.4-5.7-3.5-.9-1.4 5.5c-.9-.2-1.9-.5-2.8-.7l1.4-5.6-3.5-.9-1.4 5.7c-.8-.2-1.5-.4-2.2-.5l-4.8-1.2-.9 3.7s2.6.6 2.5.6c1.4.4 1.7 1.3 1.6 2l-1.6 6.4c.1 0 .2.1.4.1l-.4-.1-2.2 8.9c-.2.4-.6 1-1.5.8.0.1-2.5-.6-2.5-.6l-1.7 4 4.6 1.1c.8.2 1.7.4 2.5.7l-1.4 5.8 3.5.9 1.4-5.7c1 .3 1.9.5 2.8.7l-1.4 5.6 3.5.9 1.4-5.8c5.9 1.1 10.3.7 12.2-4.7 1.5-4.3-.1-6.8-3.2-8.4 2.3-.5 4-2 4.4-5zm-7.9 11.1c-1.1 4.3-8.4 2-10.8 1.4l1.9-7.7c2.4.6 10.1 1.8 8.9 6.3zm1.1-11.2c-1 3.9-7.1 1.9-9.1 1.4l1.7-7c2 .5 8.5 1.4 7.4 5.6z"
                  fill="white"
                />
              </svg>
            </div>

            <h3 className={styles.btcTitle}>Donate with Bitcoin</h3>
            <p className={styles.btcSubtitle}>
              Send any amount of BTC to the address below. Your contribution goes directly
              toward rescuing and supporting girls in need.
            </p>

            {/* QR-style decorative pattern */}
            <div className={styles.qrBox}>
              <div className={styles.qrInner}>
                <svg viewBox="0 0 80 80" fill="none" className={styles.qrSvg}>
                  {/* Corner squares */}
                  <rect x="4" y="4" width="22" height="22" rx="3" fill="#F7931A" opacity="0.15"/>
                  <rect x="7" y="7" width="16" height="16" rx="2" stroke="#F7931A" strokeWidth="2" fill="none"/>
                  <rect x="11" y="11" width="8" height="8" rx="1" fill="#F7931A"/>

                  <rect x="54" y="4" width="22" height="22" rx="3" fill="#F7931A" opacity="0.15"/>
                  <rect x="57" y="7" width="16" height="16" rx="2" stroke="#F7931A" strokeWidth="2" fill="none"/>
                  <rect x="61" y="11" width="8" height="8" rx="1" fill="#F7931A"/>

                  <rect x="4" y="54" width="22" height="22" rx="3" fill="#F7931A" opacity="0.15"/>
                  <rect x="7" y="57" width="16" height="16" rx="2" stroke="#F7931A" strokeWidth="2" fill="none"/>
                  <rect x="11" y="61" width="8" height="8" rx="1" fill="#F7931A"/>

                  {/* Center dots pattern */}
                  <rect x="32" y="8" width="4" height="4" rx="1" fill="#F7931A" opacity="0.6"/>
                  <rect x="38" y="8" width="4" height="4" rx="1" fill="#F7931A" opacity="0.4"/>
                  <rect x="32" y="14" width="4" height="4" rx="1" fill="#F7931A" opacity="0.4"/>
                  <rect x="38" y="14" width="4" height="4" rx="1" fill="#F7931A" opacity="0.7"/>
                  <rect x="44" y="8" width="4" height="4" rx="1" fill="#F7931A" opacity="0.5"/>

                  <rect x="8" y="32" width="4" height="4" rx="1" fill="#F7931A" opacity="0.5"/>
                  <rect x="14" y="32" width="4" height="4" rx="1" fill="#F7931A" opacity="0.7"/>
                  <rect x="8" y="38" width="4" height="4" rx="1" fill="#F7931A" opacity="0.4"/>
                  <rect x="14" y="38" width="4" height="4" rx="1" fill="#F7931A" opacity="0.6"/>
                  <rect x="8" y="44" width="4" height="4" rx="1" fill="#F7931A" opacity="0.7"/>

                  <rect x="32" y="32" width="16" height="16" rx="3" fill="#F7931A" opacity="0.12"/>
                  <rect x="36" y="36" width="8" height="8" rx="2" fill="#F7931A" opacity="0.5"/>

                  <rect x="54" y="32" width="4" height="4" rx="1" fill="#F7931A" opacity="0.6"/>
                  <rect x="60" y="32" width="4" height="4" rx="1" fill="#F7931A" opacity="0.4"/>
                  <rect x="66" y="32" width="4" height="4" rx="1" fill="#F7931A" opacity="0.7"/>
                  <rect x="54" y="38" width="4" height="4" rx="1" fill="#F7931A" opacity="0.5"/>
                  <rect x="60" y="38" width="4" height="4" rx="1" fill="#F7931A" opacity="0.6"/>

                  <rect x="32" y="54" width="4" height="4" rx="1" fill="#F7931A" opacity="0.7"/>
                  <rect x="38" y="54" width="4" height="4" rx="1" fill="#F7931A" opacity="0.4"/>
                  <rect x="44" y="54" width="4" height="4" rx="1" fill="#F7931A" opacity="0.6"/>
                  <rect x="32" y="60" width="4" height="4" rx="1" fill="#F7931A" opacity="0.5"/>
                  <rect x="38" y="60" width="4" height="4" rx="1" fill="#F7931A" opacity="0.7"/>
                  <rect x="44" y="60" width="4" height="4" rx="1" fill="#F7931A" opacity="0.4"/>
                  <rect x="32" y="66" width="4" height="4" rx="1" fill="#F7931A" opacity="0.6"/>
                  <rect x="44" y="66" width="4" height="4" rx="1" fill="#F7931A" opacity="0.5"/>
                </svg>
                <div className={styles.qrLabel}>BTC</div>
              </div>
            </div>

            {/* Address box */}
            <div className={styles.addressLabel}>Bitcoin Wallet Address</div>
            <div className={styles.addressBox}>
              <span className={styles.addressText}>{BTC_ADDRESS}</span>
              <button
                className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
                onClick={handleCopy}
                aria-label="Copy Bitcoin address"
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
              ⚡ Transactions are processed on the Bitcoin network. Please double-check the
              address before sending. All donations are non-refundable.
            </p>
          </div>

          {/* Right side — impact + email */}
          <div className={styles.rightCol}>

            {/* Impact breakdown */}
            <div className={styles.impactCard}>
              <h3 className={styles.impactTitle}>What Your Donation Does</h3>
              <div className={styles.impactList}>
                {[
                  { amount: '$10', desc: 'Provides a week of meals for one girl' },
                  { amount: '$25', desc: 'Covers school supplies for a full term' },
                  { amount: '$50', desc: 'Funds one month of counseling sessions' },
                  { amount: '$100', desc: 'Sponsors a girl\'s education for a semester' },
                  { amount: '$250+', desc: 'Supports full rehabilitation & reintegration' },
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
