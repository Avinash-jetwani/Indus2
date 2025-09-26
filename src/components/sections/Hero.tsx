import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Sparkles, Code, Cloud, Shield, Smartphone, Database, Cpu } from 'lucide-react';
import { statistics } from '../../data/content';

const Hero: React.FC = () => {
  const floatingIcons = [
    { Icon: Code, delay: 0, x: '8%', y: '25%' },
    { Icon: Cloud, delay: 0.5, x: '85%', y: '20%' },
    { Icon: Shield, delay: 1, x: '90%', y: '70%' },
    { Icon: Smartphone, delay: 1.5, x: '12%', y: '75%' },
    { Icon: Database, delay: 2, x: '75%', y: '45%' },
    { Icon: Cpu, delay: 2.5, x: '20%', y: '45%' },
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
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)'
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
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)'
          }}
        />

        {/* Floating Tech Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.4, 0.7, 0.4], 
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
              padding: '0.75rem 1.5rem',
              marginBottom: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles style={{ width: '18px', height: '18px', color: '#fbbf24' }} />
            </motion.div>
            <span style={{ color: 'white', fontSize: '0.95rem', fontWeight: '600' }}>
              Welcome to the Future of IT Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: '800',
              color: 'white',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
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
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '3rem',
              maxWidth: '48rem',
              margin: '0 auto 3rem auto',
              lineHeight: '1.6'
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
                  boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)',
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