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
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        padding: '0.75rem 0',
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.85)' 
          : 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(25px)',
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.1)' 
          : '0 8px 32px rgba(0, 0, 0, 0.05)',
        borderBottom: isScrolled 
          ? '1px solid rgba(0, 0, 0, 0.05)' 
          : '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img 
                src="/logo.png" 
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

            {/* Navigation Links */}
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
                  style={{
                    display: 'block',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    color: activeSection === item.id 
                      ? (isScrolled ? 'rgb(223, 74, 37)' : 'rgb(255, 186, 164)')
                      : (isScrolled ? '#6b7280' : 'rgba(255, 255, 255, 0.9)'),
                    fontWeight: activeSection === item.id ? '600' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    background: 'transparent',
                    fontSize: '0.95rem'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = isScrolled ? 'rgb(223, 74, 37)' : 'white';
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      (e.currentTarget as HTMLElement).style.color = isScrolled ? '#6b7280' : 'rgba(255, 255, 255, 0.9)';
                    } else {
                      (e.currentTarget as HTMLElement).style.color = isScrolled ? 'rgb(223, 74, 37)' : 'rgb(255, 186, 164)';
                    }
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link to="contact" smooth={true} duration={500}>
                <button                 style={{
                  background: 'rgb(223, 74, 37)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.75rem',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(223, 74, 37, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 20px rgba(223, 74, 37, 0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(223, 74, 37, 0.3)';
                }}
                >
                  Get Started
                  <Sparkles size={14} />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '88px',
              left: 0,
              right: 0,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
              zIndex: 40,
              border: '1px solid rgba(0, 0, 0, 0.05)'
            }}
          >
            <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem 1rem' }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: 'block',
                      padding: '1rem 1.5rem',
                      color: '#374151',
                      textDecoration: 'none',
                      borderRadius: '0.75rem',
                      marginBottom: '0.5rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(37, 99, 235, 0.1)';
                      (e.currentTarget as HTMLElement).style.color = '#2563eb';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = '#374151';
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button
                    style={{
                      width: '100%',
                      marginTop: '1rem',
                      background: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '1rem 2rem',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
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