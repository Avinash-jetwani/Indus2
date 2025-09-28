import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Users, TrendingUp, Award,
  CheckCircle2, Zap, Shield, HeartHandshake
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import { companyInfo } from '../../data/content';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Focused on delivering exceptional value and driving real business impact for our clients.',
      accent: ['#fb923c', '#f97316']
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand and exceed your expectations.',
      accent: ['#fb7185', '#f97316']
    },
    {
      icon: TrendingUp,
      title: 'Innovation First',
      description: 'Continuously exploring and implementing cutting-edge technologies to keep you ahead of the curve.',
      accent: ['#94a3b8', '#475569']
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of quality in every project we undertake.',
      accent: ['#fb923c', '#ef4444']
    }
  ] as const;

  const whyChooseUs = [
    {
      icon: Zap,
      title: 'Rapid Development',
      description: 'Agile methodologies ensure quick delivery without compromising quality.',
      stats: '40% Faster Delivery'
    },
    {
      icon: Shield,
      title: 'Robust Security',
      description: 'Enterprise-grade security protocols protect your data and applications.',
      stats: '100% Secure'
    },
    {
      icon: HeartHandshake,
      title: 'Global Partnerships',
      description: 'Round-the-clock collaboration across India and UAE keeps your initiatives moving.',
      stats: '24/7 Availability'
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ background: '#0f172a' }}>
      <div className="container-custom" style={{ color: '#e2e8f0' }}>
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              subtitle="About Indus2"
              title="Your Partner in Digital Transformation"
              description={companyInfo.description}
              align="left"
              tone="dark"
            />
            
            <div className="space-y-4 mb-8">
              {[
                'Industry-leading expertise in modern technologies',
                'Proven track record of successful project delivery',
                'Dedicated team of certified professionals',
                'Flexible engagement models to suit your needs',
                'Commitment to innovation and continuous improvement'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
                >
                  <CheckCircle2 style={{ width: '20px', height: '20px', color: '#f97316', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: 'rgba(226, 232, 240, 0.88)', lineHeight: 1.65, fontSize: '0.95rem' }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="about-image-grid">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                alt="Team collaboration"
                className="rounded-xl shadow-xl hover-scale"
              />
              <motion.img
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600"
                alt="Office meeting"
                className="rounded-xl shadow-xl hover-scale"
              />
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600"
                alt="Working on project"
                className="rounded-xl shadow-xl hover-scale"
              />
              <motion.img
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600"
                alt="Team discussion"
                className="rounded-xl shadow-xl hover-scale"
              />
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-30" />
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-20" style={{ marginTop: '4rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(11, 18, 30, 0.92))',
            borderRadius: '1.25rem',
            padding: '3rem 1.25rem',
            marginBottom: '2rem'
          }}>
          <SectionTitle
            subtitle="Our Values"
            title="What Drives Us Forward"
            description="Our core values shape everything we do and how we deliver value to our clients."
            align="center"
            tone="dark"
          />

          <div
            className="values-grid"
            style={{
              maxWidth: '80rem',
              margin: '0 auto',
              justifyItems: 'center',
              gap: '2.25rem'
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="text-center h-full group"
                  style={{
                    background: 'rgba(248, 250, 252, 0.95)',
                    border: '1px solid rgba(148, 163, 184, 0.18)',
                    boxShadow: 'none',
                    color: '#0f172a',
                    padding: '2rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '1rem',
                    width: '100%',
                    maxWidth: '280px',
                    height: '100%'
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center"
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '0.85rem',
                      background: `linear-gradient(135deg, ${value.accent[0]}, ${value.accent[1]})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <value.icon style={{ width: '1.4rem', height: '1.4rem', color: '#fff' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#0f172a' }}>{value.title}</h3>
                    <p style={{ color: 'rgba(30, 41, 59, 0.72)', lineHeight: 1.6 }}>{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <SectionTitle
            subtitle="Why Choose Us"
            title="The Indus2 Advantage"
            description="Experience the difference of working with a team that truly understands your business needs."
            align="center"
            tone="dark"
          />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="text-center h-full transition-colors"
                  style={{
                    background: 'rgba(248, 250, 252, 0.96)',
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    boxShadow: '0 12px 24px rgba(8, 15, 26, 0.16)',
                    color: '#0f172a'
                  }}
                >
                  <div className="inline-flex p-4 rounded-full" style={{ background: 'rgba(249, 115, 22, 0.1)', marginBottom: '1.3rem' }}>
                    <item.icon className="w-10 h-10" style={{ color: '#fb923c' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#0f172a' }}>{item.title}</h3>
                  <p className="mb-4" style={{ color: 'rgba(30, 41, 59, 0.74)' }}>{item.description}</p>
                  <div className="text-3xl font-bold" style={{ background: 'linear-gradient(135deg,#f97316,#fb923c)', WebkitBackgroundClip: 'text', color: 'transparent' }}>{item.stats}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
