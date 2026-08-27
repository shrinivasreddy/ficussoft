'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type ConsentChoice = 'accepted' | 'necessary';

declare global {
  interface Window {
    clarity?: ((command: string, ...args: unknown[]) => void) & { q?: unknown[][] };
  }
}

const CONSENT_KEY = 'ficussoft-consent-v1';
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim();

function signalClarity(choice: ConsentChoice) {
  window.clarity?.('consentv2', {
    ad_Storage: 'denied',
    analytics_Storage: choice === 'accepted' ? 'granted' : 'denied',
  });
}

function loadClarity() {
  if (!CLARITY_PROJECT_ID || !/^[a-zA-Z0-9]+$/.test(CLARITY_PROJECT_ID)) return;
  if (document.querySelector('script[data-ficussoft-clarity]')) return;

  window.clarity = window.clarity || Object.assign(
    (...args: unknown[]) => {
      window.clarity!.q = window.clarity!.q || [];
      window.clarity!.q.push(args);
    },
    { q: [] as unknown[][] },
  );

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
  script.referrerPolicy = 'strict-origin-when-cross-origin';
  script.dataset.ficussoftClarity = 'true';
  document.head.appendChild(script);
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;
    if (saved === 'accepted') {
      loadClarity();
      signalClarity(saved);
    } else if (saved === 'necessary') {
      signalClarity(saved);
    } else {
      const timer = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(timer);
    }
  }, []);

  function save(choice: ConsentChoice) {
    window.localStorage.setItem(CONSENT_KEY, choice);
    if (choice === 'accepted') loadClarity();
    signalClarity(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="consent-banner" role="dialog" aria-modal="true" aria-labelledby="consent-title" aria-describedby="consent-copy">
      <div>
        <span>YOUR PRIVACY</span>
        <h2 id="consent-title">Cookies, with clarity.</h2>
        <p id="consent-copy">
          We use necessary storage to remember your choice. With permission, Microsoft Clarity may use analytics cookies to help us understand how people use this site. Read our <Link href="/privacy">Cookie &amp; Clarity Policy</Link>.
        </p>
      </div>
      <div className="consent-actions">
        <button type="button" className="consent-secondary" onClick={() => save('necessary')}>Only necessary</button>
        <button type="button" className="consent-primary" onClick={() => save('accepted')}>Accept analytics</button>
      </div>
    </aside>
  );
}
