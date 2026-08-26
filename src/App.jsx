import { useEffect, useMemo, useState } from 'react';

const asset = (path) => new URL(`../resources/${path}`, import.meta.url).href;

const media = {
  portrait: asset('ChatGPT Image Aug 26, 2026, 01_34_59 AM.png'),
  zenach: asset('Zenach.png'),
  brana: asset('BRANA arts.png'),
  daw: asset('DAW PLC.png'),
  sesen: asset('sense/photo_2026-07-28_15-55-58.jpg'),
  merkeb: asset('merkeb-branding.jpg'),
  muya: asset('MuyaPodcast.png'),
  papillon: asset('papillon-full-branding.jpg'),
  rock: asset('rock-full-branding.jpg'),
  gonder: asset('gonder.jpg'),
  bunna: asset('bunna.jpg'),
  ethiopian: asset('ethiopian.jpg'),
  abdu: asset('abdu.jpg'),
  summer: asset('summer.jpg'),
  lion: asset('lion-of-judah.jfif'),
  habesha: asset('habesha.jpg'),
  proud: asset('Proud.jpg'),
  water: asset('water.jpg'),
  mursi: asset('mursi.jpg'),
  hamer: asset('hamer.jpg'),
  afro: asset('afro-magazine-cover.jfif'),
  registration: asset('registration-social-poster.jfif'),
  nostalgic: asset('Nostalgia.jfif'),
  begena: asset('begena-gubae.jfif'),
  music: asset('music.jfif'),
  represent: asset('represent-blackness.jfif'),
};

const sesenImages = [
  'sense/photo_2026-07-28_15-55-49.jpg',
  'sense/photo_2026-07-28_15-55-52.jpg',
  'sense/photo_2026-07-28_15-55-55.jpg',
  'sense/photo_2026-07-28_15-55-58.jpg',
  'sense/photo_2026-07-28_15-56-01.jpg',
].map(asset);

const uiSets = {
  analytics: ['Screenshot (11).png', 'dashboad/Screenshot (30).png', 'dashboad/Screenshot (28).png', 'dashboad/Screenshot (31).png', 'dashboad/Screenshot (29).png', 'dashboad/Screenshot (32).png', 'dashboad/Screenshot (11).png'].map(asset),
  mihret: ['Miheret_cosmotics/Screenshot (21).png', 'Miheret_cosmotics/Screenshot (22).png', 'Miheret_cosmotics/Screenshot (23).png', 'Miheret_cosmotics/Screenshot (24).png', 'Miheret_cosmotics/Screenshot (25).png', 'Miheret_cosmotics/Screenshot (26).png'].map(asset),
  todo: ['todo/Screenshot (51).png', 'todo/Screenshot (52).png', 'todo/Screenshot (53).png', 'todo/Screenshot (54).png'].map(asset),
  telemarket: ['TeleMarket/Screenshot (40).png', 'TeleMarket/Screenshot (35).png', 'TeleMarket/Screenshot (36).png', 'TeleMarket/Screenshot (37).png', 'TeleMarket/Screenshot (38).png', 'TeleMarket/Screenshot (39).png', 'TeleMarket/Screenshot (41).png', 'TeleMarket/Screenshot (42).png'].map(asset),
  portfolio: ['portfolio/Screenshot (44).png', 'portfolio/Screenshot (45).png', 'portfolio/Screenshot (46).png', 'portfolio/Screenshot (47).png'].map(asset),
  gift: ['Gift/Screenshot (48).png', 'Gift/Screenshot (49).png', 'Gift/Screenshot (50).png'].map(asset),
};

const projects = [
  { id: 'mihret', type: 'UI/UX', year: '2026', title: 'Mihret Cosmetics', description: 'A considered e-commerce experience for a cosmetics brand.', image: uiSets.mihret[0], images: uiSets.mihret, link: 'https://mintesinotatnafu81.wixsite.com/mihret-cosmetics', featured: true },
    { id: 'proud', type: 'Poster', year: '2026', title: 'Proud Ethiopian', description: 'Cultural poster campaign.', image: media.proud, images: [media.proud] },
   {id: 'gonder', type: 'Poster', year: '2026', title: 'The Gonderian', description: 'Cultural poster campaign.', image: media.gonder, images: [media.gonder] },
  { id: 'lion', type: 'Poster', year: '2026', title: 'Lion of Judah', description: 'Cultural poster campaign.', image: media.lion, images: [media.lion] },
  { id: 'bunna', type: 'Poster', year: '2025', title: 'The Coffee', description: 'Event poster.', image: media.bunna, images: [media.bunna] },
  { id: 'summer', type: 'Poster', year: '2025', title: 'Ethiopian Summer', description: 'Event poster.', image: media.summer, images: [media.summer] },
  { id: 'ethiopian', type: 'Poster', year: '2025', title: 'Ethiopian Coffee', description: 'Event poster.', image: media.ethiopian, images: [media.ethiopian] },
  { id: 'abdu', type: 'Poster', year: '2025', title: 'Abdukiar', description: 'Event poster.', image: media.abdu, images: [media.abdu] },
  { id: 'habesha', type: 'Poster', year: '2025', title: 'The Habesha', description: 'Campaign poster.', image: media.habesha, images: [media.habesha] },
  { id: 'afro', type: 'Poster', year: '2026', title: 'Afro Magazine', description: 'Front page poster.', image: media.afro, images: [media.afro] },
  { id: 'registration', type: 'Poster', year: '2025', title: 'Registration', description: 'Social media poster.', image: media.registration, images: [media.registration] },
  { id: 'begena', type: 'Poster', year: '2025', title: 'Begena Gubae', description: 'Event poster.', image: media.begena, images: [media.begena] },
  { id: 'nostalgic', type: 'Poster', year: '2025', title: 'Nostalgic', description: 'Campaign poster.', image: media.nostalgic, images: [media.nostalgic] },
  { id: 'music', type: 'Poster', year: '2025', title: 'Music', description: 'Campaign poster.', image: media.music, images: [media.music] },
  { id: 'water', type: 'Poster', year: '2025', title: 'Water', description: 'Campaign poster.', image: media.water, images: [media.water] },
  { id: 'hamer', type: 'Poster', year: '2025', title: 'Hamer', description: 'Campaign poster.', image: media.hamer, images: [media.hamer] },
  { id: 'mursi', type: 'Poster', year: '2025', title: 'Mursi', description: 'Campaign poster.', image: media.mursi, images: [media.mursi] },

  { id: 'represent', type: 'Poster', year: '2025', title: 'Represent Blackness', description: 'Campaign poster.', image: media.represent, images: [media.represent] },
  { id: 'zenach', type: 'Branding', year: '2026', title: 'Zenach', description: 'Full identity system.', image: media.zenach, images: [media.zenach] },
  { id: 'brana', type: 'Branding', year: '2026', title: 'BRANA arts', description: 'Full identity system.', image: media.brana, images: [media.brana] },
  { id: 'daw', type: 'Branding', year: '2026', title: 'DAW PLC', description: 'Full identity system.', image: media.daw, images: [media.daw] },
  { id: 'merkeb', type: 'Branding', year: '2026', title: 'Merkeb Multimedia', description: 'Full branding system.', image: media.merkeb, images: [media.merkeb] },
  { id: 'muya', type: 'Branding', year: '2026', title: 'Muya Podcast', description: 'Full branding system.', image: media.muya, images: [media.muya] },
  { id: 'papillon', type: 'Branding', year: '2026', title: 'Papillon Dress', description: 'Full brand identity.', image: media.papillon, images: [media.papillon] },
  { id: 'rock', type: 'Branding', year: '2025', title: 'Rock Coffee', description: 'Brand identity system.', image: media.rock, images: [media.rock] },
  { id: 'todo', type: 'UI/UX', year: '2025', title: 'TODO App', description: 'A reset-and-refresh productivity experience.', image: uiSets.todo[0], images: uiSets.todo, link: 'https://www.figma.com/' },
  { id: 'telemarket', type: 'UI/UX', year: '2025', title: 'TeleMarket', description: 'E-commerce and marketing app.', image: uiSets.telemarket[0], images: uiSets.telemarket, link: 'https://www.figma.com/' },
  { id: 'portfolio', type: 'UI/UX', year: '2025', title: 'Portfolio Website', description: 'Portfolio website design and development.', image: uiSets.portfolio[0], images: uiSets.portfolio, link: 'https://mihret-portfolio-puce.vercel.app/' },
  { id: 'gift', type: 'UI/UX', year: '2025', title: 'Gift Website', description: 'A warm digital gifting experience.', image: uiSets.gift[0], images: uiSets.gift, link: 'https://mihret-portfolio-puce.vercel.app/' },
  { id: 'analytics', type: 'UI/UX', year: '2026', title: 'Analytics Dashboard', description: 'A focused data interface with clarity at its core.', image: uiSets.analytics[0], images: uiSets.analytics, link: 'https://analytics-dashboard-ui-one.vercel.app/' },
  { id: 'sesen', type: 'Branding', year: '2026', title: 'SESEN Global', description: 'A complete identity system for a global creative venture.', image: sesenImages[0], images: sesenImages, link: 'http://sesenglobalhklimited.com/' },
];

const filters = ['All', 'UI/UX', 'Branding', 'Poster'];

function App() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [slideshowPaused, setSlideshowPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setActiveProject(null);
      if (!activeProject) return;
      if (event.key === 'ArrowRight') setImageIndex((i) => Math.min(i + 1, activeProject.images.length - 1));
      if (event.key === 'ArrowLeft') setImageIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject || slideshowPaused || activeProject.images.length < 2) return undefined;
    const slideshow = window.setInterval(() => {
      setImageIndex((index) => (index + 1) % activeProject.images.length);
    }, 1000);
    return () => window.clearInterval(slideshow);
  }, [activeProject, slideshowPaused]);

  const visibleProjects = useMemo(() => projects.filter((project) => filter === 'All' || project.type === filter), [filter]);
  const openProject = (project) => { setActiveProject(project); setImageIndex(0); setSlideshowPaused(false); };

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Mihret Erkihun home"><span className="logo-mark">M</span><span>Mihret Erkihun</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation"><i /><i /></button>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <div className="theme-controls"><button className={theme === 'light' ? 'active' : ''} onClick={() => setTheme('light')}>Light</button><button className={theme === 'dark' ? 'active' : ''} onClick={() => setTheme('dark')}>Dark</button></div>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-meta"><span>01 / 04</span><span>Independent designer<br />Addis Ababa, Ethiopia</span></div>
          <div className="hero-content"><p className="eyebrow">Graphic design · UI/UX · Brand identity</p><h1>Ideas made<br /><em>visible.</em></h1><p className="hero-intro">I’m Mihret Erkihun, a graphic and brand designer creating clear, expressive visual systems for brands, products and culture.</p><a className="text-link" href="#work">Explore selected work <span>↘</span></a></div>
          <div className="hero-portrait"><div className="portrait-frame"><img src={media.portrait} alt="Mihret Erkihun" /></div><span className="portrait-note">Designer / 2026</span></div>
          <div className="hero-stamp">ME<br /><span>Graphic<br />designer</span></div>
        </section>

        <section className="ticker" aria-label="Capabilities"><div>UI / UX <b>✳</b> Brand systems <b>✳</b> Posters & print <b>✳</b> Digital experiences <b>✳</b> UI / UX <b>✳</b> Brand systems <b>✳</b></div></section>

        <section id="work" className="work-section wrap"><div className="section-intro"><div><p className="eyebrow">02 / Selected work</p><h2>Work with<br /><em>intention.</em></h2></div><p className="section-copy">A collection of visual identities, digital products and campaigns. Each project starts with a question and ends with something people can feel.</p></div><div className="filter-bar">{filters.map((name) => <button key={name} className={filter === name ? 'selected' : ''} onClick={() => setFilter(name)}>{name}<span>{name === 'All' ? projects.length : projects.filter((p) => p.type === name).length}</span></button>)}</div><div className="project-grid">{visibleProjects.map((project, index) => <article className={`project-card ${project.id === 'portfolio' ? 'project-card--portfolio' : ''} ${project.id === 'todo' ? 'project-card--todo' : ''} ${project.id === 'gift' ? 'project-card--gift' : ''} ${project.id === 'telemarket' ? 'project-card--telemarket' : ''} ${project.type === 'UI/UX' ? 'project-card--uiux' : ''} ${project.featured ? 'featured' : ''} card-${index % 5}`} key={project.id} onClick={() => openProject(project)}><div className="project-image"><img src={project.image} alt={project.title} loading="lazy" /><span className="project-view">View case <b>↗</b></span></div><div className="project-info"><div><span>{project.type}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p></div></article>)}</div></section>

        <section className="principles"><div className="wrap principles-layout"><div><p className="eyebrow">03 / The practice</p><h2>Make it<br /><em>meaningful.</em></h2></div><div className="principle-list"><div><span>01</span><h3>Find the signal</h3><p>Strategy before surface. I look for the essential idea and give it enough space to be understood.</p></div><div><span>02</span><h3>Build the system</h3><p>Strong identities are flexible. Every mark, typeface and interaction works together as one language.</p></div><div><span>03</span><h3>Make it resonate</h3><p>Design should be useful, but never forgettable. The details are where clarity becomes feeling.</p></div></div></div></section>

        <section id="about" className="about-section wrap"><div><p className="eyebrow">04 / About</p><h2>A designer with<br /><em>a point of view.</em></h2></div><div className="about-copy"><p>I’m Mihret Erkihun, a graphic and brand designer working across UI/UX, identities, posters and campaign visuals. My approach is simple: reduce until only the essential marks remain, then place them with intent.</p><div className="tool-list"><span>Figma</span><span>Illustrator</span><span>Photoshop</span><span>InDesign</span></div></div></section>

        <section id="contact" className="contact-section"><div className="wrap"><p className="eyebrow">Start a conversation</p><h2>Have an idea<br /><em>worth making?</em></h2><a className="contact-email" href="mailto:mhireterkihunsep@gmail.com">mhireterkihunsep@gmail.com <span>↗</span></a><div className="socials"><a href="https://instagram.com/phinhans4" target="_blank" rel="noreferrer">Instagram</a><a href="https://t.me/Binthakim19" target="_blank" rel="noreferrer">Telegram</a></div></div></section>
      </main>

      <footer className="site-footer wrap"><span>© {new Date().getFullYear()} Mihret Erkihun</span><span>Designed with clarity and feeling</span><span>Scroll to explore ↑</span></footer>

      {activeProject && <div className="modal-backdrop" onClick={() => setActiveProject(null)}><div className="project-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close">×</button><div className="modal-image" onClick={() => setSlideshowPaused(true)}><img src={activeProject.images[imageIndex]} alt={`${activeProject.title} preview ${imageIndex + 1}`} />{activeProject.images.length > 1 && <><button className="modal-arrow left" onClick={() => { setSlideshowPaused(true); setImageIndex((i) => Math.max(i - 1, 0)); }} aria-label="Previous image">←</button><button className="modal-arrow right" onClick={() => { setSlideshowPaused(true); setImageIndex((i) => Math.min(i + 1, activeProject.images.length - 1)); }} aria-label="Next image">→</button></>}</div><div className="modal-details"><span>{activeProject.type} · {activeProject.year}</span><h3>{activeProject.title}</h3><p>{activeProject.description}</p>{activeProject.link && <a href={activeProject.link} target="_blank" rel="noreferrer">Open project ↗</a>}</div></div></div>}
    </div>
  );
}

export default App;


