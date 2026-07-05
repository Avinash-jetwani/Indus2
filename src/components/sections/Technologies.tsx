import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { technologies } from '../../data/content';

/** simpleicons slugs, rendered monochrome-light for a consistent logo wall. */
const slugMap: Record<string, string> = {
  react: 'react',
  nextjs: 'nextdotjs',
  typescript: 'typescript',
  vue: 'vuedotjs',
  tailwind: 'tailwindcss',
  nodejs: 'nodedotjs',
  python: 'python',
  golang: 'go',
  rust: 'rust',
  graphql: 'graphql',
  'react-native': 'react',
  flutter: 'flutter',
  swift: 'swift',
  kotlin: 'kotlin',
  solidity: 'solidity',
  ethereum: 'ethereum',
  solana: 'solana',
  thegraph: 'thegraph',
  openai: 'openai',
  langchain: 'langchain',
  pytorch: 'pytorch',
  tensorflow: 'tensorflow',
  gcp: 'googlecloud',
  docker: 'docker',
  kubernetes: 'kubernetes',
  terraform: 'terraform',
  postgresql: 'postgresql',
  mongodb: 'mongodb',
  redis: 'redis',
};

const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="%23ff5c34"/></svg>'
  );

const logoFor = (id: string) => {
  const slug = slugMap[id];
  return slug ? `https://cdn.simpleicons.org/${slug}/e7ecf3` : FALLBACK;
};

const Technologies: React.FC = () => {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(technologies.map((t) => t.category)))],
    []
  );
  const [selected, setSelected] = useState('All');

  const filtered =
    selected === 'All' ? technologies : technologies.filter((t) => t.category === selected);

  const marqueeItems = technologies.filter((t) => slugMap[t.id]).slice(0, 16);

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
              <img src={logoFor(tech.id)} alt="" loading="lazy" />
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
                <img
                  src={logoFor(tech.id)}
                  alt={tech.name}
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src !== FALLBACK) img.src = FALLBACK;
                  }}
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
