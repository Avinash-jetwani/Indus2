import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../../data/content';
import { scrollToSection } from '../../lib/scroll';

const footerNav = [
  { id: 'services', label: 'Services' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Indus2" />
            <p>{companyInfo.description}</p>
          </div>

          <div className="footer-col">
            <h5>Navigate</h5>
            {footerNav.map((item) => (
              <a key={item.id} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h5>Get in touch</h5>
            <a href={`mailto:${companyInfo.email}`}>
              <Mail size={14} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
              {companyInfo.email}
            </a>
            <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
              <Phone size={14} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
              {companyInfo.phone}
            </a>
            <a href={`tel:${companyInfo.phoneAlt.replace(/\s/g, '')}`}>
              <Phone size={14} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
              {companyInfo.phoneAlt}
            </a>
            <a style={{ cursor: 'default' }}>
              <MapPin size={14} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
              {companyInfo.locations}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Indus2. All rights reserved.</span>
          <span>Engineering ambitious software — Web · Mobile · Web3 · AI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
