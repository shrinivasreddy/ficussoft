import Link from 'next/link';

export const metadata = {
  title: 'Cookie & Clarity Policy | FicusSoft',
  description: 'How FicusSoft uses essential browser storage and Microsoft Clarity analytics.',
};

export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <header><Link href="/" aria-label="Return to FicusSoft home">← FicusSoft</Link><span>PRIVACY · COOKIES · ANALYTICS</span></header>
      <article>
        <p className="policy-date">Effective August 27, 2026</p>
        <h1>Cookie &amp;<br/><em>Clarity Policy.</em></h1>
        <p className="policy-lead">This page explains the limited browser storage and analytics technologies used on the FicusSoft website, and the choices available to you.</p>
        <section><h2>Necessary storage</h2><p>We store your consent choice in your browser’s local storage. This prevents the consent banner from appearing on every page view. This preference stays on your device until you clear browser data.</p></section>
        <section><h2>Microsoft Clarity</h2><p>If you select “Accept analytics,” Microsoft Clarity may collect pseudonymous usage information such as page views, clicks, scrolling, device and browser details, and session interactions. We use these insights to understand performance and improve the website. We do not intentionally send form entries or sensitive information to Clarity.</p></section>
        <section><h2>Clarity cookies</h2><p>When analytics consent is granted, Clarity may set first-party cookies such as <code>_clck</code> and <code>_clsk</code>, and Microsoft may use related operational cookies. If you choose “Only necessary,” the Clarity analytics script is not loaded by this site.</p></section>
        <section><h2>Your choice</h2><p>You can accept optional analytics or continue with only necessary storage. To change your selection, clear this site’s local storage or browser data and revisit the site. Your browser may also offer cookie blocking and Global Privacy Control settings.</p></section>
        <section><h2>Microsoft information</h2><p>Microsoft processes Clarity data under its own terms and privacy practices. Learn more in the <a href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies" target="_blank" rel="noreferrer">Clarity cookie documentation</a> and the <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noreferrer">Microsoft Privacy Statement</a>.</p></section>
        <section><h2>Contact</h2><p>Questions about this policy can be sent to <a href="mailto:swaroop@ficussoft.com">swaroop@ficussoft.com</a>.</p></section>
      </article>
      <footer><Link href="/">Return to FicusSoft</Link><span>© {new Date().getFullYear()} FicusSoft</span></footer>
    </main>
  );
}
