import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { technologies } from '../../data/content';

const Technologies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(technologies.map(tech => tech.category))];
  
  const filteredTechnologies = selectedCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  const techLogos: Record<string, string> = {
    'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'nextjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'golang': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    'dotnet': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    'rust': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
    'react-native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    'kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    // Use a reliable public SVG for AWS
    'aws': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    'azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'gcp': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    'terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
    'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'elasticsearch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg',
  };

  const categoryColors: Record<string, string> = {
    'Frontend': 'linear-gradient(135deg,#f97316,#fb923c)',
    'Backend': 'linear-gradient(135deg,#fb923c,#f97316)',
    'Mobile': 'linear-gradient(135deg,#f97316,#ea580c)',
    'Cloud': 'linear-gradient(135deg,#df4a25,#f97316)',
    'DevOps': 'linear-gradient(135deg,#f97316,#facc15)',
    'Database': 'linear-gradient(135deg,#ea580c,#df4a25)',
  };

  return (
    <section id="technologies" className="section-padding" style={{ background: '#101b27' }}>
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Tech Stack"
          title="Cutting-Edge Technologies"
          description="We leverage the latest and most powerful technologies to build scalable, robust, and innovative solutions."
          align="center"
          tone="dark"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
          style={{ flexWrap: 'wrap', gap: '0.75rem 1rem', margin: '2rem auto', maxWidth: '900px' }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                marginBottom: '0.5rem',
                color: selectedCategory === category ? '#0f172a' : 'rgba(226, 232, 240, 0.84)',
                background: selectedCategory === category ? '#f97316' : 'rgba(15, 23, 42, 0.55)',
                boxShadow: selectedCategory === category
                  ? '0 10px 24px rgba(249, 115, 22, 0.3)'
                  : '0 4px 14px rgba(6, 12, 20, 0.32)',
                border: selectedCategory === category ? '1px solid rgba(255,255,255,0.14)' : '1px solid rgba(255,255,255,0.08)'
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid (fully responsive, compact tiles) */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.02 }}
            >
                <div
                  style={{
                    padding: '1.2rem',
                    textAlign: 'center',
                    borderRadius: '0.85rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.55rem',
                    minHeight: '130px',
                    background: 'rgba(248, 250, 252, 0.96)',
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    boxShadow: '0 10px 22px rgba(8, 15, 26, 0.16)'
                  }}
                >
                <div style={{ width: '34px', height: '34px' }}>
                  <img
                    src={techLogos[tech.id] || 'https://via.placeholder.com/32'}
                    alt={tech.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = '1';
                        // Stable fallback: PNG wordmark hosted on Wikimedia
                        target.src = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/AWS_Simple_Icons_AWS_Cloud.svg';
                      }
                    }}
                  />
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>{tech.name}</div>
                <div
                  style={{
                    borderRadius: '9999px',
                    padding: '3px 10px',
                    fontSize: '0.7rem',
                    color: '#0f172a',
                    background: categoryColors[tech.category],
                    fontWeight: 600
                  }}
                >
                  {tech.category}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Removed stats block to keep section tight and focused */}

        {/* Integration Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ maxWidth: '780px', margin: '3rem auto 3rem', padding: '0 1rem' }}
        >
          <p style={{ lineHeight: 1.7, margin: 0, color: 'rgba(226, 232, 240, 0.78)', fontSize: '1.05rem' }}>
            We seamlessly integrate these technologies to create powerful,
            <span style={{ color: '#f97316', fontWeight: 600 }}> scalable solutions </span>
            tailored to your specific needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
