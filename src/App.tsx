import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Sections
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Technologies from './components/sections/Technologies';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#060d15', color: '#e2e8f0' }}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-primary origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <About />
        <Technologies />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-primary text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-shadow z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg 
          className="w-6 h-6 group-hover:-translate-y-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default App;