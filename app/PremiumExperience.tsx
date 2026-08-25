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
  { number: '01', name: 'AI & intelligent automation', copy: 'Useful AI that fits the way your business actually runs—from intelligent agents and workflow orchestration to secure knowledge systems.', tags: ['AI agents', 'LLM integration', 'Workflow automation', 'Responsible AI'], tone: 'violet' },
  { number: '02', name: 'Digital product engineering', copy: 'Senior, embedded product teams that take new ideas from discovery to production and help existing products keep getting better.', tags: ['Product strategy', 'Web & mobile', 'Experience design', 'Platform modernization'], tone: 'orange' },
  { number: '03', name: 'Computer vision & applied ML', copy: 'Vision systems built for difficult, real-world conditions: training data, custom models, rigorous validation, and dependable deployment.', tags: ['Visual inspection', 'Object detection', 'Edge inference', 'Predictive analytics'], tone: 'blue' },
  { number: '04', name: 'Embedded & connected systems', copy: 'Connected products that move intelligence closer to the work, bringing together reliable firmware, live sensor data, and cloud services.', tags: ['Embedded software', 'Industrial IoT', 'Predictive maintenance', 'Edge computing'], tone: 'green' },
  { number: '05', name: 'Data, cloud & platforms', copy: 'The resilient data foundations and cloud infrastructure that let teams turn information into better decisions and safer operations.', tags: ['Cloud architecture', 'Data engineering', 'Business intelligence', 'DevOps'], tone: 'rose' },
];

const labModes = [
  { name: 'Visual inspection', label: 'VISION MODEL / ACTIVE', metric: '99.2%', caption: 'sample detection confidence', color: '#bb85ff', chips: ['ANOMALY DETECTED', 'FRAME 0248', '18 ms'], description: 'Identify surface defects, missing components, and quality issues before they leave the line.' },
  { name: 'Intelligent agents', label: 'AI AGENT / RUNNING', metric: '24/7', caption: 'illustrative service availability', color: '#fb9f70', chips: ['INBOX TRIAGED', 'CRM UPDATED', 'REPLY DRAFTED'], description: 'Connect specialized AI assistants to customer support, sales workflows, and internal knowledge.' },
  { name: 'Predictive systems', label: 'SENSOR GRID / ONLINE', metric: '50%', caption: 'reported service-cost reduction', color: '#96ddb1', chips: ['VIBRATION 0.08', 'TEMP 42°C', 'RISK LOW'], description: 'Transform live equipment signals into earlier warnings and more informed maintenance decisions.' },
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

  return <div className="premium-site">
    <div className="px-progress" style={{ transform: `scaleX(${scroll})` }} />

    <div className="px-notice"><span>Engineering the next, together.</span><a href="#intelligence">Explore applied intelligence <Arrow/></a></div>

    <header className="px-header"><FicusLogo/><button className="px-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? '×' : '☰'}</button><nav className={menuOpen ? 'px-nav open' : 'px-nav'}><a href="#capabilities" onClick={() => setMenuOpen(false)}>What we do</a><a href="#work" onClick={() => setMenuOpen(false)}>Our work</a><a href="#industries" onClick={() => setMenuOpen(false)}>Who we help</a><a href="#thinking" onClick={() => setMenuOpen(false)}>Thinking</a></nav><a className="px-header-cta" href="#contact">Let’s talk <Arrow/></a></header>

    <section className="px-hero" id="home" ref={heroRef} onMouseMove={updatePointer}><div className="px-hero-glow" style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }} aria-hidden="true"/><div className="px-wrap px-hero-content"><div className="px-kicker"><i/> INDEPENDENT ENGINEERS. GLOBAL PERSPECTIVE.</div><h1>Make what’s next<br/><span>matter.</span><i>✳</i></h1><p>We bring together design, engineering, and intelligence to turn difficult problems into products people actually need.</p><div className="px-actions"><a href="#contact" className="px-btn px-btn-dark">Start something good <Arrow/></a><a href="#work" className="px-link">See what we make <span>↓</span></a></div><div className="px-hero-foot"><span>California · India · United Kingdom · Italy</span><span>SCROLL TO DISCOVER ↓</span></div></div><div className="px-orbit px-orbit-one"/><div className="px-orbit px-orbit-two"/><div className="px-hero-card"><span>PRODUCT ENGINEERING</span><strong>Ideas → outcomes</strong><i>Built with purpose.</i></div></section>

    <section className="px-intro px-wrap"><div className="px-intro-label">WHAT MOVES US FORWARD</div><p>Technology should do more than <span>keep up.</span><br/>It should open doors, solve real problems,<br/>and make the future feel <em>within reach.</em></p><div className="px-proof-strip"><div><strong>20<span>+</span></strong><small>years of experience</small></div><div><strong>60<span>+</span></strong><small>client solutions</small></div><div><strong>25<span>+</span></strong><small>experienced engineers</small></div><div><strong>4</strong><small>global locations</small></div></div></section>

    <section id="capabilities" className="px-capabilities"><div className="px-wrap"><div className="px-section-top"><div><span className="px-index">01 / OUR CAPABILITIES</span><h2>Built for the hard parts.</h2></div><p>We bring the right people around the whole problem, not just the easiest piece of it.</p></div><div className="px-services"><div className="px-service-menu" role="tablist" aria-label="FicusSoft capabilities">{services.map((item,index) => <button key={item.number} role="tab" aria-selected={activeService === index} className={activeService === index ? 'px-service-row selected' : 'px-service-row'} onClick={() => setActiveService(index)}><span>{item.number}</span><strong>{item.name}</strong><Arrow/></button>)}</div><article className={`px-service-detail ${service.tone}`} role="tabpanel"><div className="px-service-art"><span>{service.number}</span><i>✳</i></div><h3>{service.name}</h3><p>{service.copy}</p><div className="px-chips">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="px-service-link">Explore this capability <Arrow/></a></article></div></div></section>

    <section id="intelligence" className="px-lab"><div className="px-wrap"><div className="px-lab-top"><div><span className="px-index">02 / INTELLIGENCE IN ACTION</span><h2>AI that earns<br/>its place.</h2></div><p>Useful intelligence begins where the real work happens: inside your product, your operations, and the decisions your team makes every day.</p></div><div className="px-lab-tabs" role="tablist" aria-label="AI solution demonstrations">{labModes.map((item,index) => <button key={item.name} role="tab" aria-selected={activeLab === index} className={activeLab === index ? 'active' : ''} onClick={() => setActiveLab(index)}><span>0{index + 1}</span>{item.name}</button>)}</div><div className="px-lab-window" style={{ '--lab-accent': mode.color } as React.CSSProperties}><div className="px-lab-window-head"><span><i/> {mode.label}</span><span>FICUS / APPLIED INTELLIGENCE</span></div><div className="px-lab-visual" aria-hidden="true"><div className="px-lab-grid"/><div className="px-lab-scan"/><div className="px-lab-target one"/><div className="px-lab-target two"/><div className="px-lab-cross">+</div></div><div className="px-lab-reading"><strong>{mode.metric}</strong><span>{mode.caption}</span></div><div className="px-lab-signals">{mode.chips.map(chip => <span key={chip}>{chip}</span>)}</div></div><div className="px-lab-description"><p>{mode.description}</p><a href="#contact">Let’s solve something together <Arrow/></a></div></div></section>

    <section id="work" className="px-work px-wrap"><div className="px-section-top"><div><span className="px-index">03 / SELECTED WORK</span><h2>Good work leaves a mark.</h2></div><a href="#contact" className="px-view-all">Discuss your challenge <Arrow/></a></div><article className="px-case"><div className="px-case-image" style={{ backgroundImage: `url(${story.image})` }}><div className="px-case-overlay"/><span>{story.label}</span>{!story.verified && <i>ILLUSTRATIVE CONCEPT</i>}</div><div className="px-case-content" style={{ background: story.color }}><span>FEATURED STORY / 0{activeStory + 1}</span><h3>{story.title}</h3><div className="px-case-result"><strong>{story.outcome}</strong><span>{story.outcomeLabel}</span></div><a href="#contact">Explore the story <Arrow/></a></div></article><div className="px-case-controls"><div>{stories.map((item,index) => <button key={item.title} aria-label={`View case study ${index + 1}`} aria-current={activeStory === index} className={activeStory === index ? 'active' : ''} onClick={() => setActiveStory(index)}/>)}</div><div><button aria-label="Previous case study" onClick={() => setActiveStory((activeStory + stories.length - 1) % stories.length)}>←</button><button aria-label="Next case study" onClick={() => setActiveStory((activeStory + 1) % stories.length)}>→</button></div></div></section>

    <section className="px-collaboration"><div className="px-collab-image" style={{ backgroundImage: `url(${IMG.people})` }}/><div className="px-collab-copy"><span className="px-index">THE FICUSSOFT DIFFERENCE</span><h2>Close to your team.<br/>Closer to the problem.</h2><p>Our engineers work alongside yours: listening carefully, making progress visible, and taking the outcome as personally as you do.</p><a href="#contact">Meet your future team <Arrow/></a></div></section>

    <section id="industries" className="px-industries px-wrap"><div className="px-section-top"><div><span className="px-index">04 / WHO WE HELP</span><h2>Every industry has<br/>a next chapter.</h2></div><p>The context changes. The responsibility to understand it doesn’t.</p></div><div className="px-industry-grid">{sectors.map(item => <a key={item.name} href="#contact" className="px-industry"><span>{item.icon}</span><h3>{item.name}</h3><p>{item.detail}</p><Arrow/></a>)}</div></section>

    <section className="px-stack"><div className="px-wrap"><div className="px-section-top"><div><span className="px-index">05 / TOOLS WITH PURPOSE</span><h2>Right tools.<br/>Real thinking.</h2></div><p>Technology choices should follow the problem, not the other way around.</p></div><div className="px-stack-tabs" role="tablist" aria-label="Technology categories">{Object.keys(stack).map(category => <button key={category} role="tab" aria-selected={stackCategory === category} className={stackCategory === category ? 'active' : ''} onClick={() => setStackCategory(category)}>{category}</button>)}</div><div className="px-stack-list" role="tabpanel">{stack[stackCategory].map((tool,index) => <div key={tool}><span>0{index + 1}</span><strong>{tool}</strong><Arrow/></div>)}</div><p className="px-stack-note">Illustrative technology categories. Confirm the active FicusSoft technology stack before publication.</p></div></section>

    <section id="thinking" className="px-thinking px-wrap"><div className="px-section-top"><div><span className="px-index">06 / IDEAS WORTH SHARING</span><h2>Curiosity, in progress.</h2></div><a href="#contact" className="px-view-all">Talk with an engineer <Arrow/></a></div><div className="px-note-grid">{notes.map(note => <article key={note.title} className="px-note"><div className="px-note-art" style={{ background: note.color }}><span>✳</span><i>FICUS / FIELDNOTES</i></div><span>{note.tag} · {note.time}</span><h3>{note.title}</h3><p>Editorial placeholder · full article coming soon</p></article>)}</div></section>

    <section id="contact" className="px-contact"><div className="px-wrap"><div><span className="px-index">A GOOD PLACE TO BEGIN</span><h2>What shall we<br/>make <i>matter?</i></h2><p>Tell us what you’re wrestling with. You’ll hear from people who build things, not people reading a script.</p><a href="mailto:swaroop@ficussoft.com?subject=Let%E2%80%99s%20build%20something%20that%20matters" className="px-btn px-btn-white">Start a conversation <Arrow/></a></div><aside><span>OR REACH US DIRECTLY</span><a href="mailto:swaroop@ficussoft.com">swaroop@ficussoft.com</a><a href="tel:+15105791838">+1 510 579 1838</a><div>Silicon Valley, California<br/>Working across four countries.</div></aside></div></section>

    <footer className="px-footer"><div className="px-wrap"><div className="px-footer-top"><FicusLogo inverted/><p>Ideas engineered<br/>into impact.</p><div><a href="#capabilities">Capabilities</a><a href="#work">Our work</a><a href="#industries">Industries</a><a href="#thinking">Thinking</a></div></div><div className="px-footer-base"><span>© {new Date().getFullYear()} FicusSoft. Made with care.</span><span>CALIFORNIA · INDIA · UK · ITALY</span><a href="#home">BACK TO TOP ↑</a></div></div></footer>
  </div>;
}
