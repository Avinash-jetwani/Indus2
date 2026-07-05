import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../../lib/scroll';

const navItems = [
  { id: 'services', label: 'Services' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['home', ...navItems.map((n) => n.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container nav-inner">
          <button className="nav-logo" onClick={() => go('home')} aria-label="Indus2 home">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Indus2" />
          </button>

          <div className="nav-links">
            {navItems.map((item) => (
              <span
                key={item.id}
                className={`nav-link ${active === item.id ? 'nav-link--active' : ''}`}
                onClick={() => go(item.id)}
              >
                {item.label}
              </span>
            ))}
          </div>

          <div className="nav-cta">
            <button className="btn btn--primary btn--sm" onClick={() => go('contact')}>
              Start a project
              <ArrowUpRight />
            </button>
          </div>

          <button
            className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-content">
              {navItems.map((item) => (
                <span key={item.id} className="mobile-nav-link" onClick={() => go(item.id)}>
                  {item.label}
                </span>
              ))}
              <button
                className="btn btn--primary btn--block"
                style={{ marginTop: '0.8rem' }}
                onClick={() => go('contact')}
              >
                Start a project
                <ArrowUpRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
