import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Sparkles, Code, Cloud, Shield, Smartphone, Database, Cpu, Server, Workflow } from 'lucide-react';
import { statistics } from '../../data/content';

const Hero: React.FC = () => {
  const floatingIcons = [
    { Icon: Code, delay: 0, x: '5%', y: '22%' },
    { Icon: Cloud, delay: 0.5, x: '82%', y: '18%' },
    { Icon: Shield, delay: 1, x: '88%', y: '70%' },
    { Icon: Smartphone, delay: 1.5, x: '10%', y: '72%' },
    { Icon: Database, delay: 2, x: '70%', y: '48%' },
    { Icon: Cpu, delay: 2.5, x: '22%', y: '48%' },
    { Icon: Server, delay: 3, x: '58%', y: '26%' },
    { Icon: Workflow, delay: 3.5, x: '38%', y: '68%' },
  ];

  const statLabelMap: Record<string, string> = {
    'Projects Completed': 'Projects',
    'Happy Clients': 'Clients',
    'Team Members': 'Team',
    'Years of Experience': 'Years'
  };

  const displayStats = statistics.slice(0, 4).map((stat) => ({
    ...stat,
    label: statLabelMap[stat.label] || stat.label
  }));

  return (
    <section id="home" className="hero">
      {/* Animated Background Effects */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {/* Gradient Orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '420px',
            height: '420px',
            background: 'radial-gradient(circle, rgba(223, 74, 37, 0.45) 0%, rgba(223, 74, 37, 0.15) 42%, transparent 75%)',
            borderRadius: '50%',
            filter: 'blur(45px)'
          }}
        />
        
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '60%',
            right: '10%',
            width: '360px',
            height: '360px',
            background: 'radial-gradient(circle, rgba(17, 24, 39, 0.65) 0%, rgba(17, 24, 39, 0.25) 45%, transparent 75%)',
            borderRadius: '50%',
            filter: 'blur(40px)'
          }}
        />

        {/* Floating Tech Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
                opacity: [0.35, 0.65, 0.35],
              scale: [0.8, 1, 0.8],
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 6 + index,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              left: item.x,
              top: item.y,
              zIndex: 1
            }}
          >
            <div             style={{
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '0.75rem',
              borderRadius: '0.75rem',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <item.Icon size={20} style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
            </div>
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.5
        }} />
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(15px)',
              borderRadius: '9999px',
              padding: '0.5rem 1.2rem',
              marginBottom: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles style={{ width: '18px', height: '18px', color: '#fbbf24' }} />
            </motion.div>
            <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Welcome to the Future of IT Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)',
              fontWeight: '800',
              color: 'white',
              marginBottom: '1.25rem',
              lineHeight: '1.15',
              letterSpacing: '-0.01em'
            }}
            className="heading-shadow"
          >
            Transforming Ideas into Digital Excellence
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: 'clamp(0.95rem, 2.6vw, 1.15rem)',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '2.5rem',
              maxWidth: '44rem',
              margin: '0 auto 2.5rem auto',
              lineHeight: '1.55'
            }}
          >
            Partner with Indus2 to leverage cutting-edge technology solutions that drive innovation, 
            enhance efficiency, and accelerate your business growth in the digital era.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hero-cta"
          >
            <Link to="contact" smooth={true} duration={500}>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '0.75rem',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 6px 18px rgba(37, 99, 235, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  minWidth: '220px',
                  justifyContent: 'center'
                }}
              >
                Start Your Project
                <ArrowRight style={{ width: '20px', height: '20px' }} />
              </motion.button>
            </Link>
          </motion.div>

          {/* Simple Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-stats"
          >
            {displayStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="hero-stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="hero-stat-value">{stat.value}</div>
                <div className="hero-stat-label">{stat.label.replace('Completed', '').replace('Happy ', '')}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        <Link to="services" smooth={true} duration={500}>
          <div style={{
            width: '28px',
            height: '44px',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '22px',
            padding: '6px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
          }}>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                width: '6px',
                height: '12px',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '3px'
              }} 
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;