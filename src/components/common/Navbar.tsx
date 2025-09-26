import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="nav-inner">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Indus2 Logo"
              style={{
                height: '48px',
                width: 'auto',
                objectFit: 'contain',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            />
          </motion.div>

          <div className="nav-links">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onSetActive={() => setActiveSection(item.id)}
                      className={`nav-link ${activeSection === item.id ? 'nav-link--active' : ''}`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="nav-cta">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="contact" smooth={true} duration={500}>
                <button type="button">
                  Get Started
                  <Sparkles size={14} />
                </button>
              </Link>
            </motion.div>
          </div>

          <button
            type="button"
            className={`nav-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu"
          >
            <div className="mobile-menu-content">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <Link to="contact" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>
                  <button
                    type="button"
                    style={{
                      width: '100%',
                      marginTop: '1rem',
                      background: 'rgb(223, 74, 37)',
                      color: 'white',
                      border: 'none',
                      padding: '1rem 2rem',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 12px rgba(223, 74, 37, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    Get Started
                    <Sparkles size={16} />
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;