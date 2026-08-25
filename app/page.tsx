'use client';

import { useEffect, useState } from 'react';

const capabilities = [
  { id: '01', short: 'Product engineering', title: 'From first sketch to a product that ships.', description: 'A dedicated engineering team that joins yours. We shape the product, build the prototype, and stay close through launch and everything after.', tags: ['Proof of concept', 'Full-stack development', 'Cloud architecture', 'Product modernization'], signal: 'BUILD STATUS', reading: 'Production ready', visual: 'product' },
  { id: '02', short: 'Applied AI & vision', title: 'Intelligence designed for the real world.', description: 'Computer vision and machine learning built around your actual operating environment: training data, custom models, validation, and deployment.', tags: ['Visual inspection', 'Computer vision', 'Custom ML models', 'Intelligent automation'], signal: 'INSPECTION MODEL', reading: 'Inference active', visual: 'ai' },
  { id: '03', short: 'Embedded intelligence', title: 'Connected hardware. Smarter decisions.', description: 'Sensor-driven systems that turn field data into useful predictions. We connect embedded devices, reliable software, and intelligence at the edge.', tags: ['Sensor integration', 'Predictive maintenance', 'Edge computing', 'Industrial IoT'], signal: 'SENSOR NETWORK', reading: 'All systems online', visual: 'embedded' },
];

const stages = [
  { number: '01', name: 'Find the real problem', timing: 'DISCOVER', detail: 'We sit with your team, map the constraints, and define what success actually looks like before writing a line of code.' },
  { number: '02', name: 'Make it tangible', timing: 'PROTOTYPE', detail: 'Early working software turns assumptions into decisions. You see progress quickly and tell us what needs to change.' },
  { number: '03', name: 'Build in the open', timing: 'ENGINEER', detail: 'Our engineers work as an extension of your team, with direct communication, visible milestones, and shared ownership.' },
  { number: '04', name: 'Ship. Learn. Improve.', timing: 'SCALE', detail: 'Launch is a starting point. We validate the result, respond to real-world feedback, and keep making the product stronger.' },
];

const industries = ['Semiconductor', 'Industrial technology', 'Enterprise software', 'Connected devices'];

function Brand() {
  return <a className="brand" href="#home" aria-label="FicusSoft home"><span className="brand-mark">f</span>ficus<span>soft</span></a>;
}

function SignalCard({ visual, signal, reading }: { visual: string; signal: string; reading: string }) {
  return <div className={`signal-card signal-${visual}`} aria-label={`${signal}: ${reading}`}>
    <div className="signal-top"><span>{signal}</span><span className="live-dot">LIVE</span></div>
    <div className="signal-art" aria-hidden="true">
      {visual === 'product' && <div className="code-window"><span>deployment.pipeline</span><i>✓ architecture reviewed</i><i>✓ integration tests passed</i><i>✓ build deployed</i><b>ready to ship_</b></div>}
      {visual === 'ai' && <div className="vision-frame"><div className="scan-line"/><span className="detection one">component · verified</span><span className="detection two">inspection active</span></div>}
      {visual === 'embedded' && <div className="network"><span className="node center"/><span className="node n1"/><span className="node n2"/><span className="node n3"/><span className="node n4"/><span className="orbit"/><span className="orbit outer"/></div>}
    </div>
    <div className="signal-bottom"><span>FICUS / ENGINEERING SYSTEMS</span><strong>{reading}</strong></div>
  </div>;
}

export default function Home() {
  const [activeCapability, setActiveCapability] = useState(0);
  const [activeStage, setActiveStage] = useState(1);
  const [challenge, setChallenge] = useState('Build a new product');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollProgress(window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1));
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const selected = capabilities[activeCapability];
  const emailLink = `mailto:swaroop@ficussoft.com?subject=${encodeURIComponent(`New project inquiry: ${challenge}`)}&body=${encodeURIComponent(`Hi FicusSoft team,\n\nI'd like to discuss a project. My main goal is to ${challenge.toLowerCase()}.\n\nHere is a little more context:\n\n`)}`;

  return <main>
    <div className="progress-line" style={{ transform: `scaleX(${scrollProgress})` }} />
    <header className="nav"><Brand/><button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? '×' : '☰'}</button><nav className={menuOpen ? 'menu-open' : ''}><a onClick={() => setMenuOpen(false)} href="#services">Capabilities</a><a onClick={() => setMenuOpen(false)} href="#work">Our approach</a><a onClick={() => setMenuOpen(false)} href="#about">About us</a></nav><a className="button nav-cta" href="#contact">Start a project <span>↗</span></a></header>

    <section id="home" className="hero"><div className="hero-grid" aria-hidden="true"/><p className="eyebrow"><span/> SILICON VALLEY ENGINEERS · GLOBAL DELIVERY</p><h1>Tomorrow doesn’t<br/>wait. <span>Neither do we.</span></h1><p className="intro">From intelligent software to embedded systems, we turn ambitious ideas into products that work in the real world.</p><div className="hero-actions"><a className="button large" href="#contact">Build what’s next <span>↗</span></a><a className="text-link" href="#services">Explore our capabilities <span>↓</span></a></div><div className="metrics"><div><strong>20<span>+</span></strong><small>years of experience</small></div><div><strong>60<span>+</span></strong><small>client solutions</small></div><div><strong>25<span>+</span></strong><small>experienced engineers</small></div><div><strong>4</strong><small>global locations</small></div></div><div className="orb" aria-hidden="true"/><a className="scroll-note" href="#services">SCROLL TO EXPLORE <span>↓</span></a></section>

    <section className="ticker" aria-label="Areas of expertise"><div className="ticker-track">{[...industries, ...industries, ...industries].map((name, index) => <span key={`${name}-${index}`}><i>✳</i> {name}</span>)}</div></section>

    <section id="services" className="section capability-section"><div className="section-heading"><p className="eyebrow"><span/> WHAT WE BUILD</p><h2>Three disciplines.<br/><span>One relentless team.</span></h2><p className="section-description">The hard problems live between hardware, software, and intelligence. That’s exactly where we do our best work.</p></div><div className="capability-layout"><div><div className="capability-tabs" role="tablist" aria-label="Engineering capabilities">{capabilities.map((capability, index) => <button key={capability.id} role="tab" aria-selected={activeCapability === index} className={activeCapability === index ? 'capability-tab active' : 'capability-tab'} onClick={() => setActiveCapability(index)}><span>{capability.id}</span>{capability.short}<b>↗</b></button>)}</div><article className="capability-copy" role="tabpanel"><h3>{selected.title}</h3><p>{selected.description}</p><div className="tags">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="inline-link">Talk to an engineer <span>→</span></a></article></div><SignalCard key={selected.id} visual={selected.visual} signal={selected.signal} reading={selected.reading}/></div></section>

    <section id="work" className="proof-section"><div className="section proof-inner"><div className="proof-copy"><p className="eyebrow"><span/> ENGINEERING THAT EARNS ITS KEEP</p><h2>Less downtime.<br/><span>More of what matters.</span></h2><p>For a semiconductor client, we connected sensor data to a proprietary prediction engine—helping identify problems before they became expensive service calls.</p><a href="#contact" className="inline-link">Tell us your hard problem <span>→</span></a></div><div className="proof-stat"><span>UP TO</span><strong>50<span>%</span></strong><p>reduction in service costs<br/>for a semiconductor solution</p><div className="proof-bars" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div></div></section>

    <section id="approach" className="section process-section"><div className="section-heading"><p className="eyebrow"><span/> THE FICUSSOFT WAY</p><h2>Great partners don’t<br/><span>disappear after kickoff.</span></h2><p className="section-description">We work as an extension of your team, with your goals as our own. No hand-offs into a black box.</p></div><div className="stage-list">{stages.map((stage, index) => <button key={stage.number} className={activeStage === index ? 'stage active' : 'stage'} onClick={() => setActiveStage(index)} aria-expanded={activeStage === index}><span className="stage-number">{stage.number}</span><div className="stage-content"><div className="stage-title">{stage.name}<span>{stage.timing}</span></div>{activeStage === index && <p>{stage.detail}</p>}</div><span className="stage-arrow">{activeStage === index ? '−' : '+'}</span></button>)}</div></section>

    <section id="about" className="about-section"><div className="section about-inner"><div><p className="eyebrow"><span/> BUILT ON TRUST, ACROSS TIME ZONES</p><h2>Silicon Valley roots.<br/><span>A team without borders.</span></h2><p className="about-copy">Founded by engineers and built through long-term partnerships. We’ve helped early concepts become real products—and, in some cases, successful exits.</p><div className="locations"><div><span>01</span> California <i>HQ</i></div><div><span>02</span> India</div><div><span>03</span> United Kingdom</div><div><span>04</span> Italy</div></div></div><aside className="principles"><span>HOW WE SHOW UP</span><p>“They guide us to their goals, and we work as an extension of their teams to achieve them.”</p><strong>THE FICUSSOFT COMMITMENT</strong><div className="principle-rule"/></aside></div></section>

    <section id="contact" className="section contact-section"><div className="contact-card"><div><p className="eyebrow"><span/> READY WHEN YOU ARE</p><h2>Your next big idea<br/>deserves <span>a real team.</span></h2><p>Tell us what you’re figuring out. You’ll hear back from an engineer, not a sales script.</p></div><div className="project-picker"><label htmlFor="challenge">WHAT ARE YOU LOOKING TO DO?</label><select id="challenge" value={challenge} onChange={event => setChallenge(event.target.value)}><option>Build a new product</option><option>Add AI or computer vision</option><option>Connect embedded systems</option><option>Modernize existing software</option><option>Explore a difficult problem</option></select><a className="button large" href={emailLink}>Start the conversation <span>↗</span></a><span className="direct-contact">Prefer direct? <a href="mailto:swaroop@ficussoft.com">swaroop@ficussoft.com</a></span></div></div></section>

    <footer className="footer"><div><Brand/><p>Great ideas, brought to life with technology.<br/>In weeks, not years.</p></div><div className="footer-links"><a href="#services">Capabilities</a><a href="#work">Our work</a><a href="#about">About</a><a href="tel:+15105791838">+1 (510) 579-1838</a></div><div className="footer-base"><span>© {new Date().getFullYear()} FicusSoft. Built on trust.</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </main>;
}
