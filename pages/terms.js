import Head from 'next/head'
import { useRouter } from 'next/router'

const S = {
  page: { background: '#08080F', minHeight: '100vh', color: '#FFFFFF', fontFamily: "'Inter','Segoe UI',sans-serif" },
  nav: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', height: 54, background: 'rgba(8,8,15,.95)', borderBottom: '1px solid #1E2A4A', position: 'sticky', top: 0, zIndex: 100 },
  logo: { display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, fontSize: '1.1rem', color: '#1A6CFF', cursor: 'pointer' },
  logoDot: { width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#1250CC,#1A6CFF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', fontWeight: 900, color: '#fff' },
  body: { maxWidth: 820, margin: '0 auto', padding: '48px 24px 80px' },
  h1: { fontSize: '2rem', fontWeight: 900, letterSpacing: -1, marginBottom: 6, color: '#FFFFFF' },
  meta: { fontSize: '.82rem', color: '#9CA3AF', marginBottom: 36, fontFamily: "'Courier New',monospace" },
  h2: { fontSize: '1.1rem', fontWeight: 800, color: '#1A6CFF', margin: '36px 0 10px', paddingTop: 24, borderTop: '1px solid #1E2A4A' },
  p: { fontSize: '.9rem', color: '#D1D5DB', lineHeight: 1.8, marginBottom: 12 },
  li: { fontSize: '.9rem', color: '#D1D5DB', lineHeight: 1.8, marginBottom: 6, paddingLeft: 8 },
  highlight: { background: 'rgba(26,108,255,.12)', border: '1px solid rgba(26,108,255,.3)', borderRadius: 8, padding: '16px 20px', marginBottom: 20 },
  warn: { background: 'rgba(245,166,35,.1)', border: '1px solid rgba(245,166,35,.3)', borderRadius: 8, padding: '16px 20px', marginBottom: 20 },
  danger: { background: 'rgba(255,77,109,.1)', border: '1px solid rgba(255,77,109,.3)', borderRadius: 8, padding: '16px 20px', marginBottom: 20 },
  badge: { display: 'inline-block', background: 'rgba(26,108,255,.15)', color: '#1A6CFF', border: '1px solid rgba(26,108,255,.3)', borderRadius: 100, padding: '2px 10px', fontSize: '.75rem', fontWeight: 700, marginRight: 6 },
  badgeGold: { display: 'inline-block', background: 'rgba(245,166,35,.15)', color: '#F5A623', border: '1px solid rgba(245,166,35,.3)', borderRadius: 100, padding: '2px 10px', fontSize: '.75rem', fontWeight: 700, marginRight: 6 },
  badgeRed: { display: 'inline-block', background: 'rgba(255,77,109,.15)', color: '#FF4D6D', border: '1px solid rgba(255,77,109,.3)', borderRadius: 100, padding: '2px 10px', fontSize: '.75rem', fontWeight: 700, marginRight: 6 },
  table: { width: '100%', borderCollapse: 'collapse', marginBottom: 20 },
  th: { background: '#131325', color: '#9CA3AF', fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: 1, padding: '10px 14px', textAlign: 'left', border: '1px solid #1E2A4A' },
  td: { padding: '10px 14px', border: '1px solid #1E2A4A', fontSize: '.875rem', color: '#D1D5DB', verticalAlign: 'top' },
  footer: { textAlign: 'center', padding: '32px 24px', borderTop: '1px solid #1E2A4A', color: '#6B7280', fontSize: '.82rem' },
};

export default function Terms() {
  const router = useRouter();
  const EFFECTIVE = 'April 5, 2026';
  const TRANSITION = 'November 1, 2026';
  const COMPANY = 'CramWiz';
  const EMAIL = 'cramwizai@gmail.com';
  const WEBSITE = 'cramwiz.vercel.app';

  return (
    <>
      <Head>
        <title>Terms & Conditions — CramWiz</title>
        <meta name="description" content="CramWiz Terms and Conditions — please read before using the platform." />
      </Head>
      <div style={S.page}>
        {/* Nav */}
        <nav style={S.nav}>
          <div style={S.logo} onClick={() => router.push('/')}>
            <div style={S.logoDot}>CW</div>CramWiz
          </div>
          <button onClick={() => router.push('/')} style={{ background: 'transparent', border: '1px solid #1E2A4A', borderRadius: 6, color: '#9CA3AF', padding: '6px 14px', cursor: 'pointer', fontSize: '.82rem' }}>← Back to Home</button>
        </nav>

        {/* Body */}
        <div style={S.body}>
          <h1 style={S.h1}>Terms & Conditions</h1>
          <p style={S.meta}>Effective: {EFFECTIVE} · Last updated: {EFFECTIVE} · Platform: {WEBSITE}</p>

          <div style={S.highlight}>
            <p style={{ ...S.p, marginBottom: 0, color: '#93BBFF', fontWeight: 600 }}>
              📋 Please read this document carefully. By accessing or using CramWiz, you agree to be bound by these Terms & Conditions. If you do not agree, do not use the platform.
            </p>
          </div>

          {/* 1. About */}
          <h2 style={S.h2}>1. About CramWiz</h2>
          <p style={S.p}>CramWiz (<strong style={{ color: '#fff' }}>"{COMPANY}"</strong>, "we", "us", "our") is an AI-powered academic study platform built specifically for Nigerian university students. The platform provides tools including but not limited to: AI-powered document analysis, exam question generation, past question solving, pattern mapping, assignment solving, voice playback, and project topic generation.</p>
          <p style={S.p}>CramWiz is developed and operated independently. For inquiries, contact us at <strong style={{ color: '#1A6CFF' }}>{EMAIL}</strong>.</p>

          {/* 2. Access Plans */}
          <h2 style={S.h2}>2. Access Plans & Pricing</h2>
          <p style={S.p}>CramWiz operates on a tiered access model described below:</p>

          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Plan</th>
                <th style={S.th}>Price</th>
                <th style={S.th}>Period</th>
                <th style={S.th}>Access Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><span style={S.badge}>Lifetime Access</span></td>
                <td style={S.td}>₦3,000 (one-time)</td>
                <td style={S.td}>Now — October 31, 2026</td>
                <td style={S.td}>Full access to all features, unlimited uploads, all AI tools</td>
              </tr>
              <tr>
                <td style={S.td}><span style={S.badgeGold}>Freemium</span></td>
                <td style={S.td}>Free (legacy)</td>
                <td style={S.td}>From November 1, 2026</td>
                <td style={S.td}>Limited — 1 document upload per day, restricted AI responses</td>
              </tr>
              <tr>
                <td style={S.td}><span style={S.badge}>Monthly Plan</span></td>
                <td style={S.td}>₦3,000/month</td>
                <td style={S.td}>From November 1, 2026</td>
                <td style={S.td}>Full access, renewed monthly</td>
              </tr>
              <tr>
                <td style={S.td}><span style={S.badge}>Semester Plan</span></td>
                <td style={S.td}>₦7,000/semester</td>
                <td style={S.td}>From November 1, 2026</td>
                <td style={S.td}>Full access for one academic semester (~5 months)</td>
              </tr>
              <tr>
                <td style={S.td}><span style={S.badge}>Annual Plan</span></td>
                <td style={S.td}>₦15,000/year</td>
                <td style={S.td}>From November 1, 2026</td>
                <td style={S.td}>Full access for one academic session (12 months)</td>
              </tr>
            </tbody>
          </table>

          {/* 3. Lifetime Access Transition */}
          <h2 style={S.h2}>3. Lifetime Access — Transition Notice</h2>
          <div style={S.warn}>
            <p style={{ ...S.p, marginBottom: 6, color: '#FDE68A', fontWeight: 700 }}>⚠️ Important: "Lifetime Access" Defined</p>
            <p style={{ ...S.p, marginBottom: 0 }}>
              The term <strong style={{ color: '#fff' }}>"Lifetime Access"</strong> as sold during the current promotional period refers to <strong style={{ color: '#fff' }}>uninterrupted full access from the date of purchase through October 31, 2026</strong>. This is a commercially reasonable definition given that CramWiz is an active, evolving platform with ongoing operational costs (AI processing, database infrastructure, hosting).
            </p>
          </div>
          <p style={S.p}>From <strong style={{ color: '#fff' }}>{TRANSITION}</strong>, all existing Lifetime Access users will automatically be migrated to the <strong style={{ color: '#F5A623' }}>Freemium tier</strong> unless they choose to upgrade to a paid subscription plan.</p>
          <p style={S.p}>Freemium users will retain access to the platform with the following limitations:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            {['1 document upload per day (resets at midnight)', 'AI response length limited to essential summaries', 'Voice playback remains available', 'Community access remains available', 'Assignment Solver, Pattern Mapping, and Question Bank require an active subscription'].map((item, i) => (
              <li key={i} style={S.li}>{item}</li>
            ))}
          </ul>
          <p style={S.p}>We will notify all Lifetime Access users by email at least <strong style={{ color: '#fff' }}>30 days before</strong> the {TRANSITION} transition date.</p>

          {/* 4. Payment & Refunds */}
          <h2 style={S.h2}>4. Payment, Refunds & Access Codes</h2>
          <p style={S.p}>All payments are processed manually via bank transfer to the account details provided on the platform. Payment is confirmed by the CramWiz admin team typically within a few hours of receipt upload.</p>
          <p style={S.p}><strong style={{ color: '#fff' }}>Access Codes:</strong> Upon payment confirmation, you will receive a unique, single-use access code sent to your registered email and WhatsApp number. This code is tied exclusively to your email address and cannot be transferred, resold, or shared.</p>
          <div style={S.danger}>
            <p style={{ ...S.p, marginBottom: 0, color: '#FCA5A5', fontWeight: 600 }}>
              🚫 No Refunds: All payments are final. CramWiz does not offer refunds once an access code has been issued or a subscription has been activated.
            </p>
          </div>
          <p style={S.p}>If you experience technical issues preventing access after payment, contact <strong style={{ color: '#1A6CFF' }}>{EMAIL}</strong> within 7 days and we will resolve the issue.</p>

          {/* 5. Ambassador Program */}
          <h2 style={S.h2}>5. Ambassador Program</h2>
          <p style={S.p}>CramWiz operates a referral-based Ambassador Program. By joining as an Ambassador, you agree to:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            {[
              'Promote CramWiz honestly and accurately to prospective students',
              'Not misrepresent CramWiz features, pricing, or access terms',
              'Not engage in spam, misleading advertising, or fake referrals',
              'Provide accurate bank account details for commission payouts',
            ].map((item, i) => <li key={i} style={S.li}>{item}</li>)}
          </ul>
          <p style={S.p}><strong style={{ color: '#fff' }}>Commission:</strong> ₦1,000 per confirmed student referral, paid directly to your registered bank account. Commissions are paid after admin confirms the referred student's payment. CramWiz reserves the right to withhold commission for fraudulent or self-referrals.</p>
          <p style={S.p}>Ambassador status may be revoked at any time for violation of these terms without notice.</p>

          {/* 6. Prohibited Conduct */}
          <h2 style={S.h2}>6. Prohibited Conduct & Account Suspension</h2>
          <p style={S.p}>Your account may be immediately suspended or permanently revoked without refund for any of the following:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            {[
              'Sharing, selling, or transferring your access code to another person',
              'Attempting to circumvent platform security or access controls',
              'Using the platform to generate or distribute plagiarised academic work for commercial purposes',
              'Abusive, harassing, or inappropriate conduct in the Community section',
              'Creating multiple accounts with a single payment',
              'Using automated tools, bots, or scripts to overload platform resources',
              'Attempting to reverse-engineer, copy, or redistribute CramWiz software',
              'Providing false information during registration or payment',
              'Misuse of the Ambassador Program (fake referrals, self-referrals)',
            ].map((item, i) => <li key={i} style={S.li}>• {item}</li>)}
          </ul>
          <div style={S.danger}>
            <p style={{ ...S.p, marginBottom: 0 }}>
              CramWiz reserves the right to <strong style={{ color: '#fff' }}>immediately terminate any account</strong>, revoke access codes, and bar re-registration for violations of these terms. No refund will be issued upon suspension for cause.
            </p>
          </div>

          {/* 7. Subscription Expiry */}
          <h2 style={S.h2}>7. Subscription Expiry & Enforcement</h2>
          <p style={S.p}>When a subscription plan expires (Monthly, Semester, or Annual), access to premium features will be automatically restricted by the platform system. You will receive reminder notifications:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            {['30 days before expiry — email notification', '7 days before expiry — in-app banner', 'On expiry date — automatic downgrade to Freemium'].map((item, i) => <li key={i} style={S.li}>• {item}</li>)}
          </ul>
          <p style={S.p}>CramWiz will not manually extend subscriptions or restore expired access. It is your responsibility to renew your plan before expiry.</p>

          {/* 8. AI Usage */}
          <h2 style={S.h2}>8. AI-Generated Content & Academic Integrity</h2>
          <p style={S.p}>CramWiz is a study aid platform. AI-generated content is intended to help you <strong style={{ color: '#fff' }}>understand material, prepare for exams, and develop academic skills</strong>. It is not intended for direct submission as your own original academic work.</p>
          <p style={S.p}>You are solely responsible for how you use AI-generated content. CramWiz accepts no liability for academic misconduct penalties resulting from improper use of the platform.</p>
          <p style={S.p}>AI responses may occasionally contain errors. Always verify important factual information, especially for high-stakes assessments. CramWiz does not guarantee the accuracy of all AI outputs.</p>

          {/* 9. Privacy */}
          <h2 style={S.h2}>9. Privacy & Data</h2>
          <p style={S.p}>CramWiz collects the following data to operate the platform: name, email address, WhatsApp number, department, university, uploaded documents (processed for AI analysis only), and usage activity.</p>
          <p style={S.p}><strong style={{ color: '#fff' }}>Uploaded documents</strong> are processed by AI models to generate study materials and are not stored permanently. They are not shared with third parties.</p>
          <p style={S.p}>Your personal data (name, email, institution) is stored securely in our database. We do not sell personal data to advertisers or third parties. For data removal requests, contact <strong style={{ color: '#1A6CFF' }}>{EMAIL}</strong>.</p>

          {/* 10. Service Availability */}
          <h2 style={S.h2}>10. Service Availability & Limitations</h2>
          <p style={S.p}>CramWiz is provided "as is." While we strive for high availability, we do not guarantee uninterrupted service. Downtime may occur due to maintenance, third-party AI provider issues, or infrastructure updates.</p>
          <p style={S.p}>During periods of high concurrent usage (300+ simultaneous users), AI response times may increase. The platform implements queuing to manage load — requests will process within a reasonable timeframe rather than failing.</p>

          {/* 11. Limitation of Liability */}
          <h2 style={S.h2}>11. Limitation of Liability</h2>
          <p style={S.p}>To the maximum extent permitted by applicable law, CramWiz and its operators shall not be liable for: indirect, incidental, or consequential damages; loss of data; exam failures or academic penalties resulting from use of AI-generated content; or service interruptions.</p>
          <p style={S.p}>Our total liability to any user shall not exceed the amount paid by that user for the current subscription period.</p>

          {/* 12. Changes */}
          <h2 style={S.h2}>12. Changes to These Terms</h2>
          <p style={S.p}>CramWiz reserves the right to update these Terms & Conditions at any time. Material changes (especially regarding pricing or access tiers) will be communicated to registered users via email at least 30 days in advance.</p>
          <p style={S.p}>Continued use of the platform after the effective date of updated terms constitutes acceptance of those changes.</p>

          {/* 13. Governing Law */}
          <h2 style={S.h2}>13. Governing Law</h2>
          <p style={S.p}>These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms shall be resolved through good-faith negotiation. Where that fails, disputes shall be subject to the jurisdiction of Nigerian courts.</p>

          {/* 14. Contact */}
          <h2 style={S.h2}>14. Contact Us</h2>
          <p style={S.p}>For any questions, concerns, or support requests regarding these Terms:</p>
          <div style={{ ...S.highlight, marginTop: 8 }}>
            <p style={{ ...S.p, marginBottom: 4 }}><strong style={{ color: '#fff' }}>Email:</strong> <span style={{ color: '#1A6CFF' }}>{EMAIL}</span></p>
            <p style={{ ...S.p, marginBottom: 4 }}><strong style={{ color: '#fff' }}>Platform:</strong> <span style={{ color: '#1A6CFF' }}>{WEBSITE}</span></p>
            <p style={{ ...S.p, marginBottom: 0 }}><strong style={{ color: '#fff' }}>Response time:</strong> Within 24–48 hours on business days</p>
          </div>

          <div style={{ ...S.warn, marginTop: 32 }}>
            <p style={{ ...S.p, marginBottom: 0, color: '#FDE68A' }}>
              By creating an account or submitting payment, you confirm that you have read, understood, and agreed to these Terms & Conditions in full.
            </p>
          </div>
        </div>

        <div style={S.footer}>
          <p>© {new Date().getFullYear()} CramWiz · All rights reserved · <span style={{ color: '#1A6CFF', cursor: 'pointer' }} onClick={() => router.push('/')}>Home</span></p>
          <p style={{ marginTop: 4 }}>Cram Smart. Pass Like a Boss.</p>
        </div>
      </div>
    </>
  );
}
