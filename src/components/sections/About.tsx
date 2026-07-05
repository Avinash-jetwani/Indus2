import React from 'react';
import { Target, Users, Rocket, Award, Zap, ShieldCheck, Globe2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Reveal from '../common/Reveal';
import Counter from '../common/Counter';
import { statistics, companyInfo } from '../../data/content';

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  { icon: Target, title: 'Mission-driven', description: 'We optimise for real business impact, not vanity deliverables.' },
  { icon: Users, title: 'Client-centric', description: 'We embed with your team and treat your product like our own.' },
  { icon: Rocket, title: 'Innovation first', description: 'We work at the edge — Web3, agentic AI and modern platforms.' },
  { icon: Award, title: 'Excellence', description: 'Audit-ready quality and craft in everything we ship.' },
];

interface Why {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
}

const whyChooseUs: Why[] = [
  { icon: Zap, title: 'Rapid delivery', description: 'Agile squads that ship in weeks, not quarters, without cutting corners.', stat: 'Faster time to market' },
  { icon: ShieldCheck, title: 'Security by default', description: 'Threat modelling, audits and best practices baked into the process.', stat: 'Audit-ready builds' },
  { icon: Globe2, title: 'Global collaboration', description: 'Teams across India and the UAE keep your work moving around the clock.', stat: '24/7 availability' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          kicker="Who we are"
          title={<>A studio built to ship</>}
          description={companyInfo.description}
        />

        <div className="grid grid-4" style={{ marginTop: '3rem' }}>
          {values.map((value, i) => (
            <Reveal key={value.title} delay={(i % 4) * 0.07}>
              <Card className="value-card">
                <span className="value-icon">
                  <value.icon />
                </span>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div
          className="grid"
          style={{ marginTop: '1.4rem', gridTemplateColumns: '1fr', gap: '1.4rem' }}
        >
          <Reveal>
            <Card className="about-panel">
              <div className="grid grid-3" style={{ gap: '1.8rem' }}>
                {whyChooseUs.map((item) => (
                  <div className="why-item" key={item.title}>
                    <span className="why-ic">
                      <item.icon />
                    </span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <div className="why-stat">{item.stat}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="hero-stats" style={{ maxWidth: '100%', marginTop: '2.6rem' }}>
            {statistics.map((stat) => (
              <div key={stat.id} style={{ textAlign: 'center' }}>
                <div className="stat-value">
                  <Counter value={parseInt(stat.value, 10)} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
