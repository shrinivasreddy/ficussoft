'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const CONSENT_COOKIE = 'ficussoft_cookie_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function hasConsentCookie() {
  return document.cookie.split('; ').some((cookie) => cookie.startsWith(`${CONSENT_COOKIE}=accepted`));
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (hasConsentCookie()) return;
    const timer = window.setTimeout(() => setVisible(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  function acceptCookies() {
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${CONSENT_COOKIE}=accepted; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="consent-banner" role="dialog" aria-modal="true" aria-labelledby="consent-title" aria-describedby="consent-copy">
      <div>
        <span>COOKIE NOTICE</span>
        <h2 id="consent-title">We use a simple cookie.</h2>
        <p id="consent-copy">
          We use one first-party cookie to remember that you accepted this notice. We do not use analytics or advertising cookies. Read our <Link href="/privacy">Cookie Policy</Link>.
        </p>
      </div>
      <div className="consent-actions">
        <button type="button" className="consent-primary" onClick={acceptCookies}>Accept cookies</button>
      </div>
    </aside>
  );
}
