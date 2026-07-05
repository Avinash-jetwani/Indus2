import React from 'react';
import {
  Smartphone, Globe, Cloud, Settings, Shield, Blocks, Bot,
  CheckCircle2, ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import { services } from '../../data/content';
import { scrollToSection } from '../../lib/scroll';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Blocks,
  Bot,
  Cloud,
  Settings,
  Shield,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle
          kicker="What we do"
          title={<>End-to-end product engineering</>}
          description="One team across the full stack — from the first line of code to launch, scale and beyond."
        />

        <div className="services-bento">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            const spanClass = service.span ?? 'span-2';
            const featureClass = service.feature ? 'feature' : '';
            const signalClass = service.color === 'signal' ? 'service-card--signal' : '';

            return (
              <Reveal
                key={service.id}
                className={`services-bento-cell card service-card ${spanClass} ${featureClass} ${signalClass}`.trim()}
                as="div"
                delay={i * 0.06}
              >
                <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="service-icon">
                  <Icon />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="services-cta">
            <p className="lead" style={{ margin: 0 }}>
              Not sure where to start? Let's scope it together.
            </p>
            <button className="btn btn--primary" onClick={() => scrollToSection('contact')}>
              Book a free consultation
              <ArrowRight />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
