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
    <section id="contact" style={{ padding: '5rem 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Build Something Amazing Together"
          description="Ready to transform your ideas into reality? Get in touch with our team to discuss your project."
          align="center"
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
            <div className="contact-card">
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem', 
                color: '#111827',
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
                  >
                    <div className="contact-item-icon">
                      <info.icon size={20} style={{ color: '#2563eb' }} />
                    </div>
                    <div>
                      <h4 style={{ 
                        fontWeight: '600', 
                        color: '#111827', 
                        marginBottom: '0.25rem',
                        fontSize: '1rem'
                      }}>
                        {info.title}
                      </h4>
                      <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
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
            <div className="contact-card">
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem', 
                color: '#111827',
                textAlign: 'center'
              }}>
                Office Hours
              </h3>
              
              <div className="contact-hours">
                <div className="contact-hours-row">
                  <span style={{ color: '#374151', fontWeight: '500' }}>Monday - Friday</span>
                  <span style={{ color: '#6b7280' }}>9:00 AM - 6:00 PM</span>
                </div>
                <div className="contact-hours-row">
                  <span style={{ color: '#374151', fontWeight: '500' }}>Saturday</span>
                  <span style={{ color: '#6b7280' }}>10:00 AM - 4:00 PM</span>
                </div>
                <div className="contact-hours-row">
                  <span style={{ color: '#374151', fontWeight: '500' }}>Sunday</span>
                  <span style={{ color: '#6b7280' }}>Closed</span>
                </div>
              </div>

              {/* Global Service Highlight */}
              <div style={{ 
                background: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'white',
                textAlign: 'center'
              }}>
                <Globe size={32} style={{ color: 'white' }} />
                <span style={{ fontSize: '1rem', fontWeight: '600' }}>
                  We work with clients globally
                </span>
                <span style={{ fontSize: '0.875rem', opacity: 0.9 }}>
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