import { useEffect, useMemo, useState } from 'react';

// UI/UX image sets (use real screenshot files from /resources)
const uiUxSetA = [
  new URL('../resources/Screenshot (11).png', import.meta.url).href,
];

const uiUxSetB = [
  new URL('../resources/Screenshot (12).png', import.meta.url).href,
  new URL('../resources/Screenshot (13).png', import.meta.url).href,
];

const uiUxSetC = [
  new URL('../resources/Screenshot (14).png', import.meta.url).href,
  new URL('../resources/Screenshot (15).png', import.meta.url).href,
  new URL('../resources/Screenshot (16).png', import.meta.url).href,
  new URL('../resources/Screenshot (17).png', import.meta.url).href,
  new URL('../resources/Screenshot (19).png', import.meta.url).href,
];
const media = {
  merkeb: new URL('../resources/merkeb-branding.jpg', import.meta.url).href,
  papillon: new URL('../resources/papillon-full-branding.jpg', import.meta.url).href,
  rock: new URL('../resources/rock-full-branding.jpg', import.meta.url).href,
  lionOfJudah: new URL('../resources/lion-of-judah.jfif', import.meta.url).href,
  afroMagazine: new URL('../resources/afro-magazine-cover.jfif', import.meta.url).href,
  registration: new URL('../resources/registration-social-poster.jfif', import.meta.url).href,
  begena: new URL('../resources/begena-gubae.jfif', import.meta.url).href,
  menelik: new URL('../resources/menelik-ii-heritage.jfif', import.meta.url).href,
  representBlackness: new URL('../resources/represent-blackness.jfif', import.meta.url).href,
  chatGptPortrait: new URL('../resources/ChatGPT Image Jul 25, 2026, 01_59_05 PM.png', import.meta.url).href,
  photo01: new URL('../resources/photo_2026-07-22_21-38-01.jpg', import.meta.url).href,
  photo05: new URL('../resources/photo_2026-07-22_21-38-05.jpg', import.meta.url).href,
  photo08: new URL('../resources/photo_2026-07-22_21-38-08.jpg', import.meta.url).href,
  photo11: new URL('../resources/photo_2026-07-22_21-38-11.jpg', import.meta.url).href,
  photo15: new URL('../resources/photo_2026-07-22_21-38-15.jpg', import.meta.url).href,
  photo18: new URL('../resources/photo_2026-07-22_21-38-18.jpg', import.meta.url).href,
};

const workItems = [
  { id: 'merkeb', category: 'branding', year: '2026', title: 'Merkeb Multimedia — Full branding system', image: media.merkeb },
  { id: 'papillon', category: 'branding', year: '2026', title: 'Papillon Dress — Full brand identity', image: media.papillon },
  { id: 'rock', category: 'branding', year: '2025', title: 'Rock Coffee — Brand identity system', image: media.rock },
  { id: 'lion', category: 'poster', year: '2026', title: 'Lion of Judah — Cultural poster campaign', image: media.lionOfJudah },
  { id: 'afro', category: 'poster', year: '2026', title: 'Afro Magazine — Front page poster', image: media.afroMagazine },
  { id: 'registration', category: 'poster', year: '2025', title: 'Registration — Social media poster', image: media.registration },
  { id: 'begena', category: 'poster', year: '2025', title: 'Begena Gubae — Event poster', image: media.begena },
  { id: 'menelik', category: 'branding', year: '2025', title: 'Menelik II — Heritage identity', image: media.menelik },
  { id: 'represent', category: 'poster', year: '2025', title: 'Represent Blackness — Campaign poster', image: media.representBlackness },
  { id: 'photo01', category: 'logo', year: '2026', title: 'Visual Mark — Brand study 01', image: media.photo01 },
  { id: 'photo05', category: 'logo', year: '2026', title: 'Visual Mark — Brand study 02', image: media.photo05 },
  { id: 'photo08', category: 'logo', year: '2026', title: 'Visual Mark — Brand study 03', image: media.photo08 },
  { id: 'photo11', category: 'logo', year: '2026', title: 'Visual Mark — Brand study 04', image: media.photo11 },
  { id: 'photo15', category: 'logo', year: '2026', title: 'Visual Mark — Brand study 05', image: media.photo15 },
  { id: 'photo18', category: 'logo', year: '2026', title: 'Visual Mark — Brand study 06', image: media.photo18 },
  { id: 'uiux-1', category: 'uiux', year: '2026', title: 'Analytics — Dashboard design', image: uiUxSetA[0] },
  { id: 'uiux-2', category: 'uiux', year: '2026', title: 'TeleMareket Commerce — E-commerce app design', image: uiUxSetB[0] },
  { id: 'uiux-3', category: 'uiux', year: '2025', title: 'Mela App — Reset and Referesh app', image: uiUxSetC[0] },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'poster', label: 'Poster' },
  { id: 'branding', label: 'Branding' },
  { id: 'logo', label: 'Logo' },
  { id: 'uiux', label: 'UI/UX' },
];

const ToolLogo = ({ name }) => {
  switch (name) {
    case 'Figma':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#1ABCFE" d="M12 2a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4Z" />
          <path fill="#0ACF83" d="M8 10a4 4 0 0 1 4-4h4a4 4 0 0 1 0 8h-4a4 4 0 0 1-4-4Z" />
          <path fill="#A259FF" d="M8 18a4 4 0 0 1 4-4h4a4 4 0 0 1 0 8h-4a4 4 0 0 1-4-4Z" />
        </svg>
      );
    case 'Photoshop':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#001E4C" />
          <path fill="#31A8FF" d="M7 7h6a3 3 0 0 1 0 6H7z" />
          <path fill="#FF5F00" d="M7 13h8a3 3 0 0 1 0 6H7z" />
        </svg>
      );
    case 'Illustrator':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#2F1B00" />
          <path fill="#FF7C00" d="M7 7h3l3 7 3-7h3l-4.5 11h-3L7 7Z" />
          <path fill="#5BE0A3" d="M12 15h3v4h-3z" />
        </svg>
      );
    case 'InDesign':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#1B0E4D" />
          <path fill="#FF3366" d="M7 7h4a3 3 0 0 1 0 6H7z" />
          <path fill="#4AA3FF" d="M7 13h8a3 3 0 0 1 0 6H7z" />
        </svg>
      );
    default:
      return null;
  }
};

function App() {
  const [filter, setFilter] = useState('all');
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('portfolio-theme') || 'white';
    }

    return 'white';
  });

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedItemId(null);
    };

    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('portfolio-theme', theme);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [theme]);

  const visibleItems = useMemo(
    () => workItems.filter((item) => filter === 'all' || item.category === filter),
    [filter],
  );

  const selectedItem = visibleItems.find((item) => item.id === selectedItemId) ?? null;

  // Map UI/UX work ids to their image arrays
  const imagesMap = {
    'uiux-1': uiUxSetA,
    'uiux-2': uiUxSetB,
    'uiux-3': uiUxSetC,
  };

  const showPrev = () => {
    if (selectedItem?.category === 'uiux') {
      const imgs = imagesMap[selectedItem.id] || [];
      if (selectedImageIndex > 0) setSelectedImageIndex((i) => i - 1);
    }
  };

  const showNext = () => {
    if (selectedItem?.category === 'uiux') {
      const imgs = imagesMap[selectedItem.id] || [];
      if (selectedImageIndex < imgs.length - 1) setSelectedImageIndex((i) => i + 1);
    }
  };

  return (
    <div className="page-shell">
      <div className="reg-marks" aria-hidden="true">
        <span className="tl" />
        <span className="tr" />
        <span className="bl" />
        <span className="br" />
      </div>

      <header className="site-nav">
        <div className="wrap nav-inner">
          <img className="nav-avatar" src={media.chatGptPortrait} alt="Mihret Erkihun avatar" />
          <a className="brand-mark" href="#top">
            <span className="dot" /> Mihret Erkihun
          </a>
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#work" onClick={() => setMenuOpen(false)}>Poster</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Branding</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Logo</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>UI/UX</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <div className="theme-switcher">
            <button
              type="button"
              className={`theme-btn ${theme === 'white' ? 'active' : ''}`}
              onClick={() => setTheme('white')}
              aria-pressed={theme === 'white'}
            >
              White
            </button>
            <button
              type="button"
              className={`theme-btn ${theme === 'black' ? 'active' : ''}`}
              onClick={() => setTheme('black')}
              aria-pressed={theme === 'black'}
            >
              Black
            </button>
          </div>
          <a className="nav-cta" href="#contact">
            Start a project
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow">Graphic &amp; UI Designer — Addis Ababa</p>
              <h1 className="hero-name">Mihret Erkihun</h1>
              <p className="hero-sub">
                I design <strong>posters</strong>, <strong>brand systems</strong>, and <strong>campaign visuals</strong> that feel bold, clear, and memorable.
              </p>
            </div>

            <div className="hero-photo-card" aria-label="Portrait placeholder">
              <img src={media.chatGptPortrait} alt="Mihret Erkihun portrait" />
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="section-tag">Selected work</span>
                <h2 className="section-title">Real projects</h2>
              </div>
              <p>A selection of poster, branding, logo and UI/UX work from the portfolio, built with the actual designs shown below.</p>
            </div>

            <div className="filters" role="tablist" aria-label="Filter work by discipline">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`filter-btn ${filter === item.id ? 'active' : ''}`}
                  onClick={() => setFilter(item.id)}
                  aria-pressed={filter === item.id}
                >
                  <span className="swatch" />
                  {item.label}
                </button>
              ))}
            </div>

            <div className="work-grid">
              {visibleItems.map((item) => (
                <figure
                  key={item.id}
                  className="work-card"
                  data-cat={item.category}
                  onClick={() => { setSelectedItemId(item.id); setSelectedImageIndex(0); }}
                >
                  <div className="work-thumb">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <figcaption>
                    <div className="work-kicker">
                      <span>{item.category === 'poster' ? 'Poster' : item.category === 'logo' ? 'Logo' : item.category === 'uiux' ? 'UI/UX' : 'Branding'}</span>
                      <span>{item.year}</span>
                    </div>
                    <div className="work-title">{item.title}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section-alt">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="section-tag">How I work</span>
                <h2 className="section-title">Three disciplines</h2>
              </div>
              <p>Each one feeds the others — print thinking sharpens layout on screen; visual systems keep campaigns consistent.</p>
            </div>

            <div className="disciplines">
              <div className="discipline">
                <div className="swatch-row">
                  <span style={{ background: '#FF4820' }} />
                  <span style={{ background: '#16140F' }} />
                  <span style={{ background: '#EAE6DA' }} />
                </div>
                <h3>Poster &amp; Print</h3>
                <p>Large-format posters, event campaigns and social content designed to read instantly and feel polished.</p>
              </div>
              <div className="discipline">
                <div className="swatch-row">
                  <span style={{ background: '#F4C10F' }} />
                  <span style={{ background: '#16140F' }} />
                  <span style={{ background: '#EAE6DA' }} />
                </div>
                <h3>Brand Identity</h3>
                <p>Logo systems, colour direction, and visual guidelines that keep a brand recognisable across touchpoints.</p>
              </div>
              <div className="discipline">
                <div className="swatch-row">
                  <span style={{ background: '#2B3AFF' }} />
                  <span style={{ background: '#16140F' }} />
                  <span style={{ background: '#EAE6DA' }} />
                </div>
                <h3>Campaign Visuals</h3>
                <p>Bold, flexible visuals for social, digital activations and print aimed at creating instant recognition.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap about-grid">
            <div className="about-copy">
              <span className="section-tag">About</span>
              <h2 className="section-title">Mihret Erkihun</h2>
              <p>
                <strong>Mihret Erkihun</strong> is a graphic and brand designer based in Addis Ababa, working across posters,
                identities and campaign visuals with a strong focus on clarity and feeling.
              </p>
              <p>
                The approach is simple: reduce until only the essential marks remain, then place them with intent so every
                piece feels grounded and purposeful.
              </p>
            </div>
            <div>
              <span className="section-tag">Toolkit</span>
              <div className="tool-swatches">
                <span className="tool-chip"><ToolLogo name="Figma" />Figma</span>
                <span className="tool-chip"><ToolLogo name="Illustrator" />Illustrator</span>
                <span className="tool-chip"><ToolLogo name="Photoshop" />Photoshop</span>
                <span className="tool-chip"><ToolLogo name="InDesign" />InDesign</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="wrap">
            <span className="section-tag">Get in touch</span>
            <h2>Let's put your idea into register.</h2>
            <div className="cta-row">
              <a className="cta-email" href="mailto:hello@mihreterkihun.com">hello@mihreterkihun.com</a>
              <div className="social-list">
                <a href="#" target="_blank" rel="noreferrer">Behance</a>
                <a href="#" target="_blank" rel="noreferrer">Instagram</a>
                <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Mihret Erkihun</span>
          <span>Poster · Branding · Logo · UI/UX</span>
        </div>
      </footer>

      {selectedItem && (
        <div className="lightbox-backdrop" onClick={() => setSelectedItemId(null)}>
          <div className="lightbox" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedItemId(null)} aria-label="Close preview">×</button>
            {selectedItem.category === 'uiux' && selectedImageIndex > 0 && (
              <button className="lightbox-nav prev" onClick={showPrev} aria-label="Previous image">←</button>
            )}
            <img
              src={selectedItem.category === 'uiux' ? (imagesMap[selectedItem.id] || [selectedItem.image])[selectedImageIndex] : selectedItem.image}
              alt={selectedItem.title}
            />
            {selectedItem.category === 'uiux' && ((imagesMap[selectedItem.id] || []).length - 1) > selectedImageIndex && (
              <button className="lightbox-nav next" onClick={showNext} aria-label="Next image">→</button>
            )}
            <div className="lightbox-caption">
              <span>{selectedItem.category === 'poster' ? 'Poster' : selectedItem.category === 'logo' ? 'Logo' : selectedItem.category === 'uiux' ? 'UI/UX' : 'Branding'}</span>
              <h3>{selectedItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
