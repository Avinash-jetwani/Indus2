import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { companyInfo } from '../../data/content';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 2rem 1rem' }}>
        {/* Company Info */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Indus2 Logo" 
              style={{ 
                height: '60px', 
                width: 'auto', 
                objectFit: 'contain',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
            />
          </div>
          
          <p style={{ 
            color: '#e2e8f0', 
            fontSize: '1.125rem', 
            lineHeight: '1.5', 
            maxWidth: '800px', 
            margin: '0 auto 1rem' 
          }}>
            {companyInfo.description}
          </p>
          
          {/* Contact Details */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
              <a 
                href={`mailto:${companyInfo.email}`}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: '#cbd5e1', 
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'white'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#cbd5e1'}
              >
                <Mail size={18} />
                <span>{companyInfo.email}</span>
              </a>
              
              <a 
                href={`tel:${companyInfo.phone}`}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: '#cbd5e1', 
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'white'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#cbd5e1'}
              >
                <Phone size={18} />
                <span>{companyInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ 
          textAlign: 'center', 
          paddingTop: '1rem', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          color: '#94a3b8',
          fontSize: '0.875rem'
        }}>
          © {currentYear} Indus2. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;