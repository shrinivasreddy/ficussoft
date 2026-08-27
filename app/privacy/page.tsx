import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | FicusSoft',
  description: 'How FicusSoft uses a first-party cookie to remember your cookie-notice preference.',
};

export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <header><Link href="/" aria-label="Return to FicusSoft home">← FicusSoft</Link><span>PRIVACY · COOKIE NOTICE</span></header>
      <article>
        <p className="policy-date">Effective August 27, 2026</p>
        <h1>Cookie<br/><em>Policy.</em></h1>
        <p className="policy-lead">This page explains the single first-party cookie used on the FicusSoft website.</p>
        <section><h2>What we store</h2><p>When you accept the cookie notice, this site stores a first-party cookie named <code>ficussoft_cookie_consent</code>. Its only purpose is to remember your choice so the notice does not appear on every visit.</p></section>
        <section><h2>How long it lasts</h2><p>The preference cookie lasts for up to 12 months unless you remove it sooner through your browser settings.</p></section>
        <section><h2>No tracking cookies</h2><p>We do not use this cookie for analytics, advertising, cross-site tracking, or profiling.</p></section>
        <section><h2>Managing your choice</h2><p>You can remove the cookie at any time using your browser’s site-data or cookie settings. The notice will appear again on your next visit.</p></section>
        <section><h2>Contact</h2><p>Questions about this policy can be sent to <a href="mailto:swaroop@ficussoft.com">swaroop@ficussoft.com</a>.</p></section>
      </article>
      <footer><Link href="/">Return to FicusSoft</Link><span>© {new Date().getFullYear()} FicusSoft</span></footer>
    </main>
  );
}
