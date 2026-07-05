import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { technologies } from '../../data/content';

/** Self-hosted monochrome logos, recoloured via CSS mask for a consistent wall. */
const logoSrc = (id: string) => `url(${import.meta.env.BASE_URL}tech/${id}.svg)`;

const Technologies: React.FC = () => {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(technologies.map((t) => t.category)))],
    []
  );
  const [selected, setSelected] = useState('All');

  const filtered =
    selected === 'All' ? technologies : technologies.filter((t) => t.category === selected);

  const marqueeItems = technologies.slice(0, 16);

  return (
    <section id="technologies" className="section">
      <div className="container">
        <SectionTitle
          kicker="Our stack"
          title={<>Modern tools, chosen on purpose</>}
          description="We pick the right technology for the job across web, mobile, blockchain, AI, cloud and data."
        />
      </div>

      <div className="marquee" style={{ margin: '2.5rem 0' }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((tech, i) => (
            <span className="marquee-item" key={`${tech.id}-${i}`}>
              <span
                className="logo-mask marquee-logo"
                style={{ ['--src' as string]: logoSrc(tech.id) }}
              />
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="tech-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tech-chip ${selected === cat ? 'active' : ''}`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="tech-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((tech) => (
              <motion.div
                key={tech.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="tech-tile"
              >
                <span
                  className="logo-mask"
                  role="img"
                  aria-label={tech.name}
                  style={{ ['--src' as string]: logoSrc(tech.id) }}
                />
                <span className="tech-name">{tech.name}</span>
                <span className="tech-cat">{tech.category}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
