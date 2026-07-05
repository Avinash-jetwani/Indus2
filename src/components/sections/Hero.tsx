import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import NetworkCanvas from '../common/NetworkCanvas';
import Counter from '../common/Counter';
import { statistics } from '../../data/content';
import { scrollToSection } from '../../lib/scroll';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <NetworkCanvas />

      <div className="container">
        <motion.div className="hero-inner" variants={container} initial="hidden" animate="visible">
          <motion.span className="chip" variants={item}>
            <span className="dot" />
            Web · Mobile · Web3 · Agentic AI
          </motion.span>

          <motion.h1 variants={item}>
            We engineer <span className="ink-grad">ambitious</span> software that ships.
          </motion.h1>

          <motion.p className="lead" variants={item}>
            Indus2 is a product engineering studio. From SaaS platforms and mobile apps to
            audited smart contracts and autonomous AI agents — we turn bold ideas into
            resilient, real-world products.
          </motion.p>

          <motion.div className="hero-actions" variants={item}>
            <button className="btn btn--primary btn--lg" onClick={() => scrollToSection('contact')}>
              Start your project
              <ArrowRight />
            </button>
            <button className="btn btn--ghost btn--lg" onClick={() => scrollToSection('work')}>
              <Sparkles />
              See our work
            </button>
          </motion.div>

          <motion.div className="hero-stats" variants={item}>
            {statistics.map((stat) => (
              <div key={stat.id}>
                <div className="stat-value">
                  <Counter value={parseInt(stat.value, 10)} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="rail" />
      </div>
    </section>
  );
};

export default Hero;
