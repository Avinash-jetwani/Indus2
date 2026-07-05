import React from 'react';
import { Mail, MapPin, Globe, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Reveal from '../common/Reveal';
import { companyInfo } from '../../data/content';

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          kicker="Get in touch"
          title={
            <>
              Let's build something <span className="ink-grad">worth shipping</span>
            </>
          }
          description="Tell us what you're working on. We'll get back within one business day."
        />

        <div className="contact-grid">
          <Reveal>
            <Card className="contact-card">
              <h3>Contact details</h3>

              <a className="contact-item" href={`mailto:${companyInfo.email}`}>
                <span className="contact-item-ic">
                  <Mail />
                </span>
                <span>
                  <span className="label">Email</span>
                  <br />
                  <span className="value">{companyInfo.email}</span>
                </span>
              </a>

              <div className="contact-item" style={{ cursor: 'default' }}>
                <span className="contact-item-ic">
                  <MapPin />
                </span>
                <span>
                  <span className="label">Locations</span>
                  <br />
                  <span className="value">{companyInfo.locations}</span>
                </span>
              </div>

              <a
                className="btn btn--primary btn--block"
                style={{ marginTop: '1.2rem' }}
                href={`mailto:${companyInfo.email}?subject=Project%20enquiry`}
              >
                Start your project
                <ArrowRight />
              </a>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="contact-card">
              <h3>Office hours</h3>
              <div style={{ marginBottom: '0.4rem' }}>
                {hours.map((row) => (
                  <div className="hours-row" key={row.day}>
                    <span className="day">{row.day}</span>
                    <span className="time">{row.time}</span>
                  </div>
                ))}
              </div>

              <div className="contact-highlight">
                <Globe />
                <div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>We work with clients globally</div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.86rem' }}>
                    Across time zones, from India &amp; the UAE.
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
