import { useEffect, useMemo, useState } from 'react';

// UI/UX image sets — replace paths with your screenshots later
const uiUxSetA = [
  new URL('../resources/dashboad/Screenshot (30).png', import.meta.url).href,
  new URL('../resources/dashboad/Screenshot (28).png', import.meta.url).href,
  new URL('../resources/dashboad/Screenshot (31).png', import.meta.url).href,
  new URL('../resources/dashboad/Screenshot (29).png', import.meta.url).href,
  new URL('../resources/dashboad/Screenshot (32).png', import.meta.url).href,
  new URL('../resources/dashboad/Screenshot (11).png', import.meta.url).href,
  new URL('../resources/Screenshot (11).png', import.meta.url).href,
];

const uiUxSetB = [
  new URL('../resources/Miheret_cosmotics/Screenshot (21).png', import.meta.url).href,
  new URL('../resources/Miheret_cosmotics/Screenshot (22).png', import.meta.url).href,
  new URL('../resources/Miheret_cosmotics/Screenshot (23).png', import.meta.url).href,
  new URL('../resources/Miheret_cosmotics/Screenshot (24).png', import.meta.url).href,
  new URL('../resources/Miheret_cosmotics/Screenshot (25).png', import.meta.url).href,
  new URL('../resources/Miheret_cosmotics/Screenshot (26).png', import.meta.url).href,
];

const uiUxSetC = [
  new URL('../resources/Screenshot (14).png', import.meta.url).href,
  new URL('../resources/Screenshot (15).png', import.meta.url).href,
  new URL('../resources/Screenshot (16).png', import.meta.url).href,
  new URL('../resources/Screenshot (17).png', import.meta.url).href,
  new URL('../resources/Screenshot (19).png', import.meta.url).href,
];

const uiUxSetD = [
  new URL('../resources/Screenshot (14).png', import.meta.url).href,
  new URL('../resources/Screenshot (15).png', import.meta.url).href,
  new URL('../resources/Screenshot (16).png', import.meta.url).href,
  new URL('../resources/Screenshot (17).png', import.meta.url).href,
  new URL('../resources/Screenshot (19).png', import.meta.url).href,
];
// Branding multi-photo sets — replace with your real branding photos
const brandingSetMerkeb = [
  new URL('../resources/merkeb-branding.jpg', import.meta.url).href,
  // new URL('../resources/merkeb-2.jpg', import.meta.url).href,
  // new URL('../resources/merkeb-3.jpg', import.meta.url).href,
];

const brandingSetPapillon = [
  new URL('../resources/papillon-full-branding.jpg', import.meta.url).href,
  // new URL('../resources/papillon-2.jpg', import.meta.url).href,
];

const brandingSetRock = [
  new URL('../resources/rock-full-branding.jpg', import.meta.url).href,
  // new URL('../resources/rock-2.jpg', import.meta.url).href,
];

const brandingSetMenelik = [
  new URL('../resources/menelik-ii-heritage.jfif', import.meta.url).href,
  // new URL('../resources/menelik-2.jpg', import.meta.url).href,
];

// NEW branding project — 5 photo slots (replace paths with yours)
const brandingSetNew = [
  new URL('../resources/sense/photo_2026-07-28_15-55-49.jpg', import.meta.url).href,      
  new URL('../resources/sense/photo_2026-07-28_15-55-52.jpg', import.meta.url).href,
  new URL('../resources/sense/photo_2026-07-28_15-55-55.jpg', import.meta.url).href,
  new URL('../resources/sense/photo_2026-07-28_15-55-58.jpg', import.meta.url).href,
  new URL('../resources/sense/photo_2026-07-28_15-55-01.jpg', import.meta.url).href,
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
  // UI/UX
  {
    id: 'uiux-1',
    category: 'uiux',
    year: '2026',
    title: 'Analytics — Dashboard design',
    image: uiUxSetA[0],
    link: 'https://analytics-dashboard-ui-one.vercel.app/',
  },
  {
    id: 'uiux-2',
    category: 'uiux',
    year: '2026',
    title: 'Mihret Cosmetics — cosmetics e-commerce website',
    image: uiUxSetB[0],
    link: 'https://mintesinotatnafu81.wixsite.com/mihret-cosmetics',
  },
  {
    id: 'uiux-3',
    category: 'uiux',
    year: '2025',
    title: 'Mela App — Reset and Refresh app',
    image: uiUxSetC[0],
    link: 'https://www.figma.com/',
  },
  // Branding
    // NEW branding card — replace title / year / images
  {
    id: 'branding-new',
    category: 'branding',
    year: '2026',
    title: 'SESEN Global — Full identity system',
    image: brandingSetNew[0],
  },
  {
    id: 'merkeb',
    category: 'branding',
    year: '2026',
    title: 'Merkeb Multimedia — Full branding system',
    image: brandingSetMerkeb[0],
  },
  {
    id: 'papillon',
    category: 'branding',
    year: '2026',
    title: 'Papillon Dress — Full brand identity',
    image: brandingSetPapillon[0],
  },
  {
    id: 'rock',
    category: 'branding',
    year: '2025',
    title: 'Rock Coffee — Brand identity system',
    image: brandingSetRock[0],
  },

  // Poster
  { id: 'lion', category: 'poster', year: '2026', title: 'Lion of Judah — Cultural poster campaign', image: media.lionOfJudah },
  { id: 'afro', category: 'poster', year: '2026', title: 'Afro Magazine — Front page poster', image: media.afroMagazine },
  { id: 'registration', category: 'poster', year: '2025', title: 'Registration — Social media poster', image: media.registration },
  { id: 'begena', category: 'poster', year: '2025', title: 'Begena Gubae — Event poster', image: media.begena },
  { id: 'represent', category: 'poster', year: '2025', title: 'Represent Blackness — Campaign poster', image: media.representBlackness },
  { id: 'photo01', category: 'poster', year: '2026', title: 'Visual Mark — Brand study 01', image: media.photo01 },
  { id: 'photo05', category: 'poster', year: '2026', title: 'Visual Mark — Brand study 02', image: media.photo05 },
  { id: 'photo08', category: 'poster', year: '2026', title: 'Visual Mark — Brand study 03', image: media.photo08 },
  { id: 'photo11', category: 'poster', year: '2026', title: 'Visual Mark — Brand study 04', image: media.photo11 },
  { id: 'photo15', category: 'poster', year: '2026', title: 'Visual Mark — Brand study 05', image: media.photo15 },
  { id: 'photo18', category: 'poster', year: '2026', title: 'Visual Mark — Brand study 06', image: media.photo18 },
 
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'uiux', label: 'UI/UX' },
  { id: 'poster', label: 'Poster' },
  { id: 'branding', label: 'Branding' },
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
      return window.localStorage.getItem('portfolio-theme') || 'black';
    }
    return 'black';
  });

  // Multi-image map for UI/UX + Branding (arrows appear when length > 1)
  const imagesMap = {
    'uiux-1': uiUxSetA,
    'uiux-2': uiUxSetB,
    'uiux-3': uiUxSetC,
    merkeb: brandingSetMerkeb,
    papillon: brandingSetPapillon,
    rock: brandingSetRock,
    menelik: brandingSetMenelik,
    'branding-new': brandingSetNew,
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedItemId(null);
      if (!selectedItemId) return;
      const imgs = imagesMap[selectedItemId] || [];
      if (imgs.length <= 1) return;
      if (event.key === 'ArrowLeft' && selectedImageIndex > 0) {
        setSelectedImageIndex((i) => i - 1);
      }
      if (event.key === 'ArrowRight' && selectedImageIndex < imgs.length - 1) {
        setSelectedImageIndex((i) => i + 1);
      }
    };

    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('portfolio-theme', theme);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [theme, selectedItemId, selectedImageIndex]);

  const visibleItems = useMemo(
    () => workItems.filter((item) => filter === 'all' || item.category === filter),
    [filter],
  );

  const selectedItem = workItems.find((item) => item.id === selectedItemId) ?? null;

  const currentImages = selectedItem
    ? imagesMap[selectedItem.id] || [selectedItem.image]
    : [];

  const showPrev = () => {
    if (selectedImageIndex > 0) setSelectedImageIndex((i) => i - 1);
  };

  const showNext = () => {
    if (selectedImageIndex < currentImages.length - 1) {
      setSelectedImageIndex((i) => i + 1);
    }
  };

  const openFilter = (id) => {
    setFilter(id);
    setMenuOpen(false);
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
            <a href="#work" onClick={() => openFilter('uiux')}>UI/UX</a>
            <a href="#work" onClick={() => openFilter('poster')}>Poster</a>
            <a href="#work" onClick={() => openFilter('branding')}>Branding</a>
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
          <a className="nav-cta" href="#contact">Start a project</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow">Graphic &amp; UI Designer — Addis Ababa</p>
              <h1 className="hero-name">Mihret Erkihun</h1>
              <p className="hero-sub">
                I design <strong>posters</strong>, <strong>brand systems</strong>, and{' '}
                <strong>UI/UX experiences</strong> that feel bold, clear, and memorable.
              </p>
            </div>
            <div className="hero-photo-card" aria-label="Portrait">
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
              <p>
                A selection of UI/UX, poster and branding work from the portfolio, built with the
                actual designs shown below.
              </p>
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
                  className={`work-card ${item.category === 'uiux' ? 'work-card--uiux' : ''}`}
                  data-cat={item.category}
                  onClick={() => {
                    setSelectedItemId(item.id);
                    setSelectedImageIndex(0);
                  }}
                >
                  <div className="work-thumb">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    {item.category === 'uiux' && (
                      <div className="work-thumb-badge">UI/UX</div>
                    )}
                  </div>
                  <figcaption>
                    <div className="work-kicker">
                      <span>
                        {item.category === 'poster'
                          ? 'Poster'
                          : item.category === 'uiux'
                            ? 'UI/UX'
                            : 'Branding'}
                      </span>
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
              <p>
                Each one feeds the others — print thinking sharpens layout on screen; visual systems
                keep campaigns consistent.
              </p>
            </div>

            <div className="disciplines">
              <div className="discipline">
                <div className="swatch-row">
                  <span style={{ background: '#2B3AFF' }} />
                  <span style={{ background: '#16140F' }} />
                  <span style={{ background: '#EAE6DA' }} />
                </div>
                <h3>UI / UX</h3>
                <p>
                  Product interfaces, dashboards and app flows designed for clarity, hierarchy and a
                  polished digital feel.
                </p>
              </div>
              <div className="discipline">
                <div className="swatch-row">
                  <span style={{ background: '#FF4820' }} />
                  <span style={{ background: '#16140F' }} />
                  <span style={{ background: '#EAE6DA' }} />
                </div>
                <h3>Poster &amp; Print</h3>
                <p>
                  Large-format posters, event campaigns and social content designed to read
                  instantly and feel polished.
                </p>
              </div>
              <div className="discipline">
                <div className="swatch-row">
                  <span style={{ background: '#F4C10F' }} />
                  <span style={{ background: '#16140F' }} />
                  <span style={{ background: '#EAE6DA' }} />
                </div>
                <h3>Brand Identity</h3>
                <p>
                  Logo systems, colour direction, and visual guidelines that keep a brand
                  recognisable across touchpoints.
                </p>
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
                <strong>Mihret Erkihun</strong> is a graphic and brand designer based in Addis
                Ababa, working across UI/UX, posters, identities and campaign visuals with a strong
                focus on clarity and feeling.
              </p>
              <p>
                The approach is simple: reduce until only the essential marks remain, then place them
                with intent so every piece feels grounded and purposeful.
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
            <h2>Let&apos;s put your idea into register.</h2>
            <div className="cta-row">
              <a className="cta-email" href="mailto:mhireterkihunsep@gmail.com">
                mhireterkihunsep@gmail.com
              </a>
              <div className="social-list">
                <a href="https://instagram.com/phinhans4" target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href="https://t.me/Binthakim19" target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Mihret Erkihun</span>
          <span>UI/UX · Poster · Branding</span>
        </div>
      </footer>

      {selectedItem && (
        <div
          className="lightbox-backdrop"
          onClick={() => setSelectedItemId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div
            className={`lightbox ${selectedItem.category === 'uiux' ? 'lightbox--uiux' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedItemId(null)}
              aria-label="Close preview"
            >
              ×
            </button>

            <div className="lightbox-stage">
              {currentImages.length > 1 && selectedImageIndex > 0 && (
                <button className="lightbox-nav prev" onClick={showPrev} aria-label="Previous image">
                  ←
                </button>
              )}

              <div className="lightbox-image-wrap">
                <img
                  key={currentImages[selectedImageIndex]}
                  src={currentImages[selectedImageIndex]}
                  alt={`${selectedItem.title} — ${selectedImageIndex + 1}`}
                  className="lightbox-image"
                />
              </div>

              {currentImages.length > 1 && selectedImageIndex < currentImages.length - 1 && (
                <button className="lightbox-nav next" onClick={showNext} aria-label="Next image">
                  →
                </button>
              )}
            </div>

            {currentImages.length > 1 && (
              <div className="lightbox-dots" role="tablist" aria-label="Images">
                {currentImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`lightbox-dot ${i === selectedImageIndex ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(i)}
                    aria-label={`Go to image ${i + 1}`}
                    aria-selected={i === selectedImageIndex}
                  />
                ))}
              </div>
            )}

            <div className="lightbox-caption">
              <div className="lightbox-caption-top">
                <span>
                  {selectedItem.category === 'poster'
                    ? 'Poster'
                    : selectedItem.category === 'uiux'
                      ? 'UI/UX'
                      : 'Branding'}
                </span>
                {currentImages.length > 1 && (
                  <span className="lightbox-count">
                    {selectedImageIndex + 1} / {currentImages.length}
                  </span>
                )}
              </div>
              <h3>{selectedItem.title}</h3>

              {selectedItem.category === 'uiux' && selectedItem.link && (
                <a
                  className="lightbox-external"
                  href={selectedItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open project
                  <span className="lightbox-external-arrow" aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;