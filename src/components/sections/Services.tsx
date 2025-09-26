import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Globe, Cloud, Settings, Brain, Shield,
  ArrowRight, CheckCircle
} from 'lucide-react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { services } from '../../data/content';
import { Link } from 'react-scroll';

const Services: React.FC = () => {
  const iconMap: Record<string, any> = {
    Smartphone,
    Globe,
    Cloud,
    Settings,
    Brain,
    Shield
  };

  // Visual tokens (no Tailwind dependency)
  const gradientById: Record<string, { gradient: string; color: string }> = {
    'mobile-dev': { gradient: 'linear-gradient(135deg,#df4a25 0%,#f97316 100%)', color: '#df4a25' },
    'web-dev': { gradient: 'linear-gradient(135deg,#f97316 0%,#fb923c 100%)', color: '#f97316' },
    'cloud-services': { gradient: 'linear-gradient(135deg,#fb923c 0%,#f97316 100%)', color: '#fb923c' },
    'devops': { gradient: 'linear-gradient(135deg,#df4a25 0%,#dc2626 100%)', color: '#df4a25' },
    'ai-ml': { gradient: 'linear-gradient(135deg,#f97316 0%,#df4a25 100%)', color: '#f97316' },
    'cybersecurity': { gradient: 'linear-gradient(135deg,#dc2626 0%,#df4a25 100%)', color: '#df4a25' }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="section-padding" style={{ background: '#0b1521' }}>
      <div className="container-custom">
        <SectionTitle
          subtitle="What We Do"
          title="Comprehensive IT Solutions"
          description="We offer end-to-end technology services designed to transform your business and drive digital innovation."
          align="center"
          tone="dark"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ gap: '1.75rem' }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            const visual = gradientById[service.id] || { gradient: 'linear-gradient(135deg,#df4a25 0%,#f97316 100%)', color: '#df4a25' };
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <div
                  className="card"
                  style={{ 
                    padding: '2.2rem', 
                    height: '100%', 
                    border: '1px solid rgba(255,255,255,0.05)', 
                    borderRadius: '1rem',
                    background: 'linear-gradient(155deg, rgba(15, 23, 42, 0.85), rgba(12, 20, 34, 0.88))',
                    boxShadow: '0 18px 36px rgba(6, 12, 20, 0.5)'
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{ display: 'inline-flex', padding: '0.8rem', borderRadius: '0.8rem', background: visual.gradient, marginBottom: '1rem', boxShadow: '0 12px 26px rgba(223, 74, 37, 0.28)' }}
                  >
                    <Icon style={{ width: '28px', height: '28px', color: 'white' }} />
                  </div>

                  {/* Content */}
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '0.75rem', color: '#f8fafc' }}>{service.title}</h3>
                  <p style={{ color: 'rgba(226, 232, 240, 0.78)', marginBottom: '1.1rem' }}>{service.description}</p>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle style={{ width: '18px', height: '18px', color: '#f97316', marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ color: 'rgba(199, 210, 221, 0.9)', fontSize: '0.95rem' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to="contact" smooth={true} duration={500}>
                    <button
                      className="btn btn-outline"
                      style={{ borderColor: '#f97316', color: '#f97316', background: 'rgba(249, 115, 22, 0.08)' }}
                    >
                      Learn More
                      <ArrowRight style={{ width: '18px', height: '18px', marginLeft: '0.5rem' }} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center rounded-2xl p-12"
          style={{ background: 'linear-gradient(135deg,#df4a25 0%,#f97316 100%)', boxShadow: '0 25px 50px rgba(223, 74, 37, 0.35)' }}
        >
          <div style={{ maxWidth: '46rem', margin: '0 auto' }}>
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p style={{ color: 'rgba(248, 250, 252, 0.82)', marginBottom: '1.6rem' }}>
              Let's discuss how our services can help you achieve your digital transformation goals.
            </p>
            <Link to="contact" smooth={true} duration={500}>
              <button
                className="btn"
                style={{
                  background: '#101826',
                  color: '#f8fafc',
                  padding: '0.9rem 1.25rem',
                  borderRadius: '0.75rem',
                  fontWeight: 700,
                  boxShadow: '0 14px 30px rgba(5, 10, 18, 0.38)'
                }}
              >
                Get a Free Consultation
                <ArrowRight style={{ width: '18px', height: '18px', marginLeft: '0.5rem', color: '#f97316' }} />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
