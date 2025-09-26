import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, Clock, Globe
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { companyInfo } from '../../data/content';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: companyInfo.email,
      link: `mailto:${companyInfo.email}`
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: companyInfo.phone,
      link: `tel:${companyInfo.phone}`
    }
  ];

  return (
    <section id="contact" style={{ padding: '5rem 0', background: '#0f172a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Build Something Amazing Together"
          description="Ready to transform your ideas into reality? Get in touch with our team to discuss your project."
          align="center"
          tone="dark"
        />

        {/* Contact Information Cards */}
        <div className="contact-grid" style={{ maxWidth: '900px', margin: '4rem auto 0' }}>
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-card" style={{ background: '#111f2d', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 18px 45px rgba(0,0,0,0.35)' }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem', 
                color: '#fef3c7',
                textAlign: 'center'
              }}>
                Contact Information
              </h3>
              
              <div className="contact-items">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="contact-item"
                    style={{ background: 'rgba(15, 23, 42, 0.65)', borderColor: 'rgba(255, 255, 255, 0.06)' }}
                  >
                    <div className="contact-item-icon">
                      <info.icon size={20} style={{ color: '#f97316' }} />
                    </div>
                    <div>
                      <h4 style={{ 
                        fontWeight: '600', 
                        color: '#f1f5f9', 
                        marginBottom: '0.25rem',
                        fontSize: '1rem'
                      }}>
                        {info.title}
                      </h4>
                      <p style={{ color: '#cbd5f5', fontSize: '0.875rem' }}>
                        {info.content}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Office Hours Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-card" style={{ background: '#111f2d', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 18px 45px rgba(0,0,0,0.35)' }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem', 
                color: '#fef3c7',
                textAlign: 'center'
              }}>
                Office Hours
              </h3>
              
              <div className="contact-hours">
                <div className="contact-hours-row">
                  <span style={{ color: '#f8fafc', fontWeight: '500' }}>Monday - Friday</span>
                  <span style={{ color: '#cbd5f5' }}>9:00 AM - 6:00 PM</span>
                </div>
                <div className="contact-hours-row">
                  <span style={{ color: '#f8fafc', fontWeight: '500' }}>Saturday</span>
                  <span style={{ color: '#cbd5f5' }}>10:00 AM - 4:00 PM</span>
                </div>
                <div className="contact-hours-row">
                  <span style={{ color: '#f8fafc', fontWeight: '500' }}>Sunday</span>
                  <span style={{ color: '#cbd5f5' }}>Closed</span>
                </div>
              </div>

              {/* Global Service Highlight */}
              <div style={{ 
                background: 'linear-gradient(135deg, #df4a25 0%, #f97316 100%)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#0f172a',
                textAlign: 'center'
              }}>
                <Globe size={32} style={{ color: '#0f172a' }} />
                <span style={{ fontSize: '1rem', fontWeight: '700' }}>
                  We work with clients globally
                </span>
                <span style={{ fontSize: '0.875rem', opacity: 0.85 }}>
                  Available across all time zones
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;