import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Expertise from './components/sections/Expertise';
import Work from './components/sections/Work';
import About from './components/sections/About';
import Technologies from './components/sections/Technologies';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [showTop, setShowTop] = React.useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar />

      <main>
        <Hero />
        <div className="container">
          <hr className="hairline" />
        </div>
        <Services />
        <Expertise />
        <Work />
        <About />
        <Technologies />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {showTop && (
        <motion.button
          className="to-top"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp />
        </motion.button>
      )}
    </>
  );
};

export default App;
