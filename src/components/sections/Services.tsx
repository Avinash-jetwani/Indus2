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
    'mobile-dev': { gradient: 'linear-gradient(135deg,rgba(255,51,23,0.95) 0%,rgba(34,34,34,0.85) 100%)', color: '#ff3317' },
    'web-dev': { gradient: 'linear-gradient(135deg,rgba(34,34,34,0.9) 0%,rgba(0,0,0,0.8) 100%)', color: '#0f0f0f' },
    'cloud-services': { gradient: 'linear-gradient(135deg,rgba(0,0,0,0.9) 0%,rgba(255,51,23,0.75) 100%)', color: '#ff3317' },
    'devops': { gradient: 'linear-gradient(135deg,rgba(34,34,34,0.95) 0%,rgba(0,0,0,0.75) 100%)', color: '#212121' },
    'ai-ml': { gradient: 'linear-gradient(135deg,rgba(255,51,23,0.85) 0%,rgba(255,115,91,0.75) 100%)', color: '#ff573b' },
    'cybersecurity': { gradient: 'linear-gradient(135deg,rgba(0,0,0,0.92) 0%,rgba(255,51,23,0.8) 100%)', color: '#1b1b1b' }
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
    <section id="services" className="section-padding bg-gray-50" style={{ background: '#f7f8fb' }}>
      <div className="container-custom">
        <SectionTitle
          subtitle="What We Do"
          title="Comprehensive IT Solutions"
          description="We offer end-to-end technology services designed to transform your business and drive digital innovation."
          align="center"
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
            const visual = gradientById[service.id] || { gradient: 'linear-gradient(135deg,#2563eb 0%,#9333ea 100%)', color: '#2563eb' };
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <div
                  className="card"
                  style={{ padding: '2rem', height: '100%', border: '1px solid #eef0f4', borderRadius: '1rem' }}
                >
                  {/* Icon */}
                  <div
                    style={{ display: 'inline-flex', padding: '0.75rem', borderRadius: '0.75rem', background: visual.gradient, marginBottom: '1rem' }}
                  >
                    <Icon style={{ width: '28px', height: '28px', color: 'white' }} />
                  </div>

                  {/* Content */}
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>{service.title}</h3>
                  <p style={{ color: '#4b5563', marginBottom: '1rem' }}>{service.description}</p>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle style={{ width: '18px', height: '18px', color: '#10b981', marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ color: '#4b5563', fontSize: '0.95rem' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to="contact" smooth={true} duration={500}>
                    <button
                      className="btn btn-outline"
                      style={{ borderColor: visual.color, color: visual.color }}
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
          style={{ background: 'linear-gradient(135deg,#2563eb 0%,#9333ea 100%)' }}
        >
          <div style={{ maxWidth: '46rem', margin: '0 auto' }}>
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.92)', marginBottom: '1.75rem' }}>
              Let's discuss how our services can help you achieve your digital transformation goals.
            </p>
            <Link to="contact" smooth={true} duration={500}>
              <button
                className="btn"
                style={{
                  background: 'white',
                  color: '#1f2937',
                  padding: '0.9rem 1.25rem',
                  borderRadius: '0.75rem',
                  fontWeight: 700,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                }}
              >
                Get a Free Consultation
                <ArrowRight style={{ width: '18px', height: '18px', marginLeft: '0.5rem', color: '#2563eb' }} />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
