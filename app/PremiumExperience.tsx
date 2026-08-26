'use client';

import { useEffect, useRef, useState } from 'react';

const IMG = {
  circuit: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=85',
  people: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85',
  architecture: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1250&q=82',
  servers: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1250&q=82',
  analytics: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1250&q=82',
  team: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1300&q=82',
};

const services = [
  { number: '01', name: 'Product engineering', copy: 'From a proof of concept or an investor-ready prototype to a flagship product built for competitive advantage, FicusSoft helps teams turn early ideas into successful market solutions.', tags: ['Proof of concept', 'Rapid prototyping', 'Flagship products', 'Product development'], tone: 'violet' },
  { number: '02', name: 'AI/ML solutions', copy: 'FicusSoft partners with industry leaders on visual-inspection solutions—from preparing training data and developing algorithms to validating results against the client’s goals.', tags: ['Visual inspection', 'Training data', 'Algorithm development', 'Result validation'], tone: 'orange' },
  { number: '03', name: 'Embedded solutions', copy: 'FicusSoft connects sensor data with predictive intelligence to help protect valuable company assets, reduce service costs, and support better operational decisions.', tags: ['Sensor data', 'Predictability engine', 'Asset protection', 'SEMI industry'], tone: 'green' },
];

const labModes = [
  { name: 'Visual inspection', label: 'VISION MODEL / ACTIVE', metric: '99.2%', caption: 'sample detection confidence', color: '#bb85ff', chips: ['ANOMALY DETECTED', 'FRAME 0248', '18 ms'], description: 'Identify surface defects, missing components, and quality issues before they leave the line.' },
  { name: 'Product journey', label: 'PRODUCT BUILD / IN PROGRESS', metric: 'POC→', caption: 'prototype to flagship product', color: '#fb9f70', chips: ['CONCEPT SHAPED', 'PROTOTYPE READY', 'MARKET FOCUSED'], description: 'Move an early solution concept through proof of concept and prototype toward a successful product in the market.' },
  { name: 'Predictive systems', label: 'SENSOR GRID / ONLINE', metric: '50%', caption: 'reported service-cost reduction', color: '#96ddb1', chips: ['SENSOR DATA', 'PREDICTION ACTIVE', 'ASSET PROTECTED'], description: 'Use sensor data and a proprietary predictability engine to detect problems earlier and reduce the cost of service.' },
];

const stories = [
  { label: 'SEMICONDUCTOR · PREDICTIVE MAINTENANCE', title: 'Seeing the failure before the factory does.', outcome: '50%', outcomeLabel: 'reported reduction in service costs', image: IMG.circuit, verified: true, color: '#d8eeff' },
  { label: 'HEALTHCARE · APPLIED INTELLIGENCE', title: 'Giving care teams back the time to care.', outcome: 'CASE STUDY', outcomeLabel: 'Illustrative project · details coming soon', image: IMG.analytics, verified: false, color: '#f2def8' },
  { label: 'CONNECTED PRODUCTS · EDGE SYSTEMS', title: 'When every device becomes a better listener.', outcome: 'CASE STUDY', outcomeLabel: 'Illustrative project · details coming soon', image: IMG.servers, verified: false, color: '#ffead8' },
];

const sectors = [
  { name: 'Industrial & semiconductor', detail: 'Equipment intelligence, visual quality control, and connected production.', icon: '◫' },
  { name: 'Healthcare & life sciences', detail: 'Secure digital experiences, operational insight, and responsible AI.', icon: '✳' },
  { name: 'Financial services', detail: 'Modern platforms, intelligent workflows, and decision-support tools.', icon: '◈' },
  { name: 'Retail & commerce', detail: 'Relevant customer journeys, smarter operations, and useful analytics.', icon: '◇' },
  { name: 'Logistics & mobility', detail: 'Live operational visibility, connected fleets, and predictive insights.', icon: '↗' },
  { name: 'Software & technology', detail: 'New products, platform modernization, and embedded engineering teams.', icon: '⌘' },
];

const stack: Record<string, string[]> = {
  'AI & machine learning': ['OpenAI', 'Anthropic', 'TensorFlow', 'PyTorch', 'OpenCV', 'Hugging Face'],
  'Web & mobile': ['React', 'Next.js', 'TypeScript', 'React Native', 'Flutter', 'Swift'],
  'Data & cloud': ['AWS', 'Google Cloud', 'Microsoft Azure', 'PostgreSQL', 'Apache Spark', 'Docker'],
  'Embedded & IoT': ['Embedded C', 'Python', 'NVIDIA Jetson', 'Arduino', 'MQTT', 'Edge AI'],
};

const notes = [
  { tag: 'PERSPECTIVE', title: 'The hard part of AI isn’t the model. It’s everything around it.', time: '6 min read', color: '#c0edcf' },
  { tag: 'FIELD NOTE', title: 'Why the best embedded teams don’t feel outsourced.', time: '5 min read', color: '#e8d8fa' },
  { tag: 'ENGINEERING', title: 'From sensor noise to decisions worth acting on.', time: '8 min read', color: '#ffdfc9' },
];

const clients = ['Visa', 'HP', 'Hitachi', 'SAP', 'Verizon', 'Marubeni', 'Microsoft', 'Mitsubishi', 'Kodak', 'Avalon'];

const testimonials = [
  { quote: 'FicusSoft worked as an extension of our team, translating an early idea into a product we could confidently move forward with.', role: 'Product leader', company: 'Client name pending approval', accent: '#dfd4f1' },
  { quote: 'The team stayed close to our goals, made the technical decisions understandable, and kept the work moving with real ownership.', role: 'Technology executive', company: 'Client name pending approval', accent: '#d8eeff' },
  { quote: 'Their combination of product thinking and engineering depth helped us solve a difficult problem without losing sight of the business outcome.', role: 'Engineering leader', company: 'Client name pending approval', accent: '#ffdfc9' },
];

function FicusLogo({ inverted = false }: { inverted?: boolean }) {
  return <a className={`px-logo ${inverted ? 'px-logo-inverted' : ''}`} href="#home" aria-label="FicusSoft home"><span className="px-logo-symbol">f</span><span>ficus<strong>soft</strong></span></a>;
}

function Arrow({ className = '' }: { className?: string }) {
  return <span className={`px-arrow ${className}`} aria-hidden="true">↗</span>;
}

export default function PremiumExperience() {
  const [activeService, setActiveService] = useState(0);
  const [activeLab, setActiveLab] = useState(0);
  const [activeStory, setActiveStory] = useState(0);
  const [stackCategory, setStackCategory] = useState('AI & machine learning');
  const [activeClient, setActiveClient] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [pointer, setPointer] = useState({ x: 52, y: 43 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1));
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function updatePointer(event: React.MouseEvent<HTMLElement>) {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (bounds) setPointer({ x: ((event.clientX - bounds.left) / bounds.width) * 100, y: ((event.clientY - bounds.top) / bounds.height) * 100 });
  }

  const service = services[activeService];
  const mode = labModes[activeLab];
  const story = stories[activeStory];
  const testimonial = testimonials[activeTestimonial];

  return <div className="premium-site">
    <div className="px-progress" style={{ transform: `scaleX(${scroll})` }} />

    <div className="px-notice"><span>Engineering the next, together.</span><a href="#intelligence">Explore applied intelligence <Arrow/></a></div>

    <header className="px-header"><FicusLogo/><button className="px-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? '×' : '☰'}</button><nav className={menuOpen ? 'px-nav open' : 'px-nav'}><a href="#capabilities" onClick={() => setMenuOpen(false)}>What we do</a><a href="#work" onClick={() => setMenuOpen(false)}>Our work</a><a href="#industries" onClick={() => setMenuOpen(false)}>Who we help</a><a href="#thinking" onClick={() => setMenuOpen(false)}>Thinking</a></nav><a className="px-header-cta" href="#contact">Let’s talk <Arrow/></a></header>

    <section className="px-hero" id="home" ref={heroRef} onMouseMove={updatePointer}><div className="px-hero-glow" style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }} aria-hidden="true"/><div className="px-wrap px-hero-content"><div className="px-kicker"><i/> SILICON VALLEY PRODUCT DEVELOPMENT · GLOBAL TEAMS</div><h1>Bringing tomorrow’s<br/><span>solution, today.</span><i>✳</i></h1><p>Great ideas, brought to life with technology. In weeks, not years.</p><div className="px-actions"><a href="#contact" className="px-btn px-btn-dark">Start something good <Arrow/></a><a href="#work" className="px-link">See what we make <span>↓</span></a></div><div className="px-hero-foot"><span>California · India · United Kingdom · Italy</span><span>SCROLL TO DISCOVER ↓</span></div></div><div className="px-orbit px-orbit-one"/><div className="px-orbit px-orbit-two"/><div className="px-hero-card"><span>THE FICUSSOFT WAY</span><strong>Trust → partnership</strong><i>Technology built together.</i></div></section>

    <section className="px-intro px-wrap"><div className="px-intro-label">ABOUT US · PARTNERING AND TEAMWORK</div><p>Technology built by <span>trust</span><br/>and meaningful <em>partnership.</em></p><div className="px-about-source"><strong>Specialized product development, with Silicon Valley roots.</strong><p>Headquartered in California’s Silicon Valley, FicusSoft works with specialized teams in India, the United Kingdom, and Italy. Founded by engineers, the company has helped take early solution concepts through to successful exits.</p><p>Client champions guide the goals. FicusSoft works as an extension of their teams to achieve the objective together.</p></div><div className="px-proof-strip"><div><strong>20<span>+</span></strong><small>years of experience</small></div><div><strong>25<span>+</span></strong><small>qualified, experienced team</small></div><div><strong>100<span>%</span></strong><small>satisfaction guaranteed</small></div><div><strong>60<span>+</span></strong><small>client solutions</small></div></div></section>

    <section id="capabilities" className="px-capabilities"><div className="px-wrap"><div className="px-section-top"><div><span className="px-index">01 / OUR CAPABILITIES</span><h2>Built for the hard parts.</h2></div><p>We bring the right people around the whole problem, not just the easiest piece of it.</p></div><div className="px-services"><div className="px-service-menu" role="tablist" aria-label="FicusSoft capabilities">{services.map((item,index) => <button key={item.number} role="tab" aria-selected={activeService === index} className={activeService === index ? 'px-service-row selected' : 'px-service-row'} onClick={() => setActiveService(index)}><span>{item.number}</span><strong>{item.name}</strong><Arrow/></button>)}</div><article className={`px-service-detail ${service.tone}`} role="tabpanel"><div className="px-service-art"><span>{service.number}</span><i>✳</i></div><h3>{service.name}</h3><p>{service.copy}</p><div className="px-chips">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="px-service-link">Explore this capability <Arrow/></a></article></div></div></section>

    <section id="intelligence" className="px-lab"><div className="px-wrap"><div className="px-lab-top"><div><span className="px-index">02 / INTELLIGENCE IN ACTION</span><h2>AI that earns<br/>its place.</h2></div><p>Useful intelligence begins where the real work happens: inside your product, your operations, and the decisions your team makes every day.</p></div><div className="px-lab-tabs" role="tablist" aria-label="AI solution demonstrations">{labModes.map((item,index) => <button key={item.name} role="tab" aria-selected={activeLab === index} className={activeLab === index ? 'active' : ''} onClick={() => setActiveLab(index)}><span>0{index + 1}</span>{item.name}</button>)}</div><div className="px-lab-window" style={{ '--lab-accent': mode.color } as React.CSSProperties}><div className="px-lab-window-head"><span><i/> {mode.label}</span><span>FICUS / APPLIED INTELLIGENCE</span></div><div className="px-lab-visual" aria-hidden="true"><div className="px-lab-grid"/><div className="px-lab-scan"/><div className="px-lab-target one"/><div className="px-lab-target two"/><div className="px-lab-cross">+</div></div><div className="px-lab-reading"><strong>{mode.metric}</strong><span>{mode.caption}</span></div><div className="px-lab-signals">{mode.chips.map(chip => <span key={chip}>{chip}</span>)}</div></div><div className="px-lab-description"><p>{mode.description}</p><a href="#contact">Let’s solve something together <Arrow/></a></div></div></section>

    <section id="work" className="px-work px-wrap"><div className="px-section-top"><div><span className="px-index">03 / SELECTED WORK</span><h2>Good work leaves a mark.</h2></div><a href="#contact" className="px-view-all">Discuss your challenge <Arrow/></a></div><article className="px-case"><div className="px-case-image" style={{ backgroundImage: `url(${story.image})` }}><div className="px-case-overlay"/><span>{story.label}</span>{!story.verified && <i>ILLUSTRATIVE CONCEPT</i>}</div><div className="px-case-content" style={{ background: story.color }}><span>FEATURED STORY / 0{activeStory + 1}</span><h3>{story.title}</h3><div className="px-case-result"><strong>{story.outcome}</strong><span>{story.outcomeLabel}</span></div><a href="#contact">Explore the story <Arrow/></a></div></article><div className="px-case-controls"><div>{stories.map((item,index) => <button key={item.title} aria-label={`View case study ${index + 1}`} aria-current={activeStory === index} className={activeStory === index ? 'active' : ''} onClick={() => setActiveStory(index)}/>)}</div><div><button aria-label="Previous case study" onClick={() => setActiveStory((activeStory + stories.length - 1) % stories.length)}>←</button><button aria-label="Next case study" onClick={() => setActiveStory((activeStory + 1) % stories.length)}>→</button></div></div></section>

    <section className="px-collaboration"><div className="px-collab-image" style={{ backgroundImage: `url(${IMG.people})` }}/><div className="px-collab-copy"><span className="px-index">THE FICUSSOFT WAY</span><h2>Guided by your goals.<br/>Built as one team.</h2><p>Much of FicusSoft’s success comes from the contribution and guidance of champions inside client organizations. They set the goals; FicusSoft works as an extension of their teams to achieve the objective.</p><a href="#contact">Meet your future team <Arrow/></a></div></section>

    <section className="px-clients px-wrap" aria-labelledby="clients-heading"><div className="px-section-top"><div><span className="px-index">04 / OUR CLIENTS</span><h2 id="clients-heading">Trusted names.<br/>Shared ambition.</h2></div><p>These organizations appear in the client section of FicusSoft’s current website. Select a name to explore the showcase.</p></div><div className="px-client-explorer"><div className="px-client-grid" aria-label="FicusSoft clients">{clients.map((client,index) => <button key={client} className={activeClient === index ? 'active' : ''} onClick={() => setActiveClient(index)} aria-pressed={activeClient === index}><span>{client}</span><i>0{index + 1}</i></button>)}</div><aside className="px-client-focus"><span>SELECTED CLIENT / {String(activeClient + 1).padStart(2, '0')}</span><strong key={clients[activeClient]}>{clients[activeClient]}</strong><p>Listed by FicusSoft as a client. Engagement details and an approved project summary can be added here.</p><a href="#contact">Discuss a similar challenge <Arrow/></a></aside></div></section>

    <section className="px-testimonials" aria-labelledby="testimonials-heading"><div className="px-wrap"><div className="px-testimonial-head"><div><span className="px-index">05 / CLIENT VOICES</span><h2 id="testimonials-heading">Partnership,<br/>in their words.</h2></div><span className="px-placeholder-badge">PLACEHOLDER QUOTES · APPROVAL REQUIRED</span></div><article className="px-quote-card" style={{ '--quote-accent': testimonial.accent } as React.CSSProperties}><div className="px-quote-mark">“</div><blockquote key={activeTestimonial}>{testimonial.quote}</blockquote><footer><div><strong>{testimonial.company}</strong><span>{testimonial.role}</span></div><div className="px-quote-count">0{activeTestimonial + 1} <i/> 0{testimonials.length}</div></footer></article><div className="px-testimonial-controls"><div>{testimonials.map((item,index) => <button key={item.role} className={activeTestimonial === index ? 'active' : ''} onClick={() => setActiveTestimonial(index)} aria-label={`Show testimonial ${index + 1}`} aria-current={activeTestimonial === index}><span>0{index + 1}</span>{item.role}</button>)}</div><div><button onClick={() => setActiveTestimonial((activeTestimonial + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial">←</button><button onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)} aria-label="Next testimonial">→</button></div></div></div></section>

    <section id="industries" className="px-industries px-wrap"><div className="px-section-top"><div><span className="px-index">06 / WHO WE HELP</span><h2>Every industry has<br/>a next chapter.</h2></div><p>Semiconductor experience is confirmed by FicusSoft. The remaining sectors are suggested placeholders to confirm with the team.</p></div><div className="px-industry-grid">{sectors.map(item => <a key={item.name} href="#contact" className="px-industry"><span>{item.icon}</span><h3>{item.name}</h3><p>{item.detail}</p><Arrow/></a>)}</div></section>

    <section className="px-stack"><div className="px-wrap"><div className="px-section-top"><div><span className="px-index">05 / TOOLS WITH PURPOSE</span><h2>Right tools.<br/>Real thinking.</h2></div><p>Technology choices should follow the problem, not the other way around.</p></div><div className="px-stack-tabs" role="tablist" aria-label="Technology categories">{Object.keys(stack).map(category => <button key={category} role="tab" aria-selected={stackCategory === category} className={stackCategory === category ? 'active' : ''} onClick={() => setStackCategory(category)}>{category}</button>)}</div><div className="px-stack-list" role="tabpanel">{stack[stackCategory].map((tool,index) => <div key={tool}><span>0{index + 1}</span><strong>{tool}</strong><Arrow/></div>)}</div><p className="px-stack-note">Illustrative technology categories. Confirm the active FicusSoft technology stack before publication.</p></div></section>

    <section id="thinking" className="px-thinking px-wrap"><div className="px-section-top"><div><span className="px-index">06 / IDEAS WORTH SHARING</span><h2>Curiosity, in progress.</h2></div><a href="#contact" className="px-view-all">Talk with an engineer <Arrow/></a></div><div className="px-note-grid">{notes.map(note => <article key={note.title} className="px-note"><div className="px-note-art" style={{ background: note.color }}><span>✳</span><i>FICUS / FIELDNOTES</i></div><span>{note.tag} · {note.time}</span><h3>{note.title}</h3><p>Editorial placeholder · full article coming soon</p></article>)}</div></section>

    <section id="contact" className="px-contact"><div className="px-wrap"><div><span className="px-index">A GOOD PLACE TO BEGIN</span><h2>What shall we<br/>make <i>matter?</i></h2><p>Tell us what you’re wrestling with. You’ll hear from people who build things, not people reading a script.</p><a href="mailto:swaroop@ficussoft.com?subject=Let%E2%80%99s%20build%20something%20that%20matters" className="px-btn px-btn-white">Start a conversation <Arrow/></a></div><aside><span>OR REACH US DIRECTLY</span><a href="mailto:swaroop@ficussoft.com">swaroop@ficussoft.com</a><a href="tel:+15105791838">+1 510 579 1838</a><div>Silicon Valley, California<br/>Working across four countries.</div></aside></div></section>

    <footer className="px-footer"><div className="px-wrap"><div className="px-footer-top"><FicusLogo inverted/><p>Ideas engineered<br/>into impact.</p><div><a href="#capabilities">Capabilities</a><a href="#work">Our work</a><a href="#industries">Industries</a><a href="#thinking">Thinking</a></div></div><div className="px-footer-base"><span>© {new Date().getFullYear()} FicusSoft. Made with care.</span><span>CALIFORNIA · INDIA · UK · ITALY</span><a href="#home">BACK TO TOP ↑</a></div></div></footer>
  </div>;
}
