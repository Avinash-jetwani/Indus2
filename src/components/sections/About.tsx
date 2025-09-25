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
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand and exceed your expectations.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Innovation First',
      description: 'Continuously exploring and implementing cutting-edge technologies to keep you ahead of the curve.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of quality in every project we undertake.',
      color: 'from-orange-500 to-red-500'
    }
  ];

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
      title: '24/7 Support',
      description: 'Round-the-clock support ensures your systems are always running smoothly.',
      stats: '99.9% Uptime'
    }
  ];

  const achievements = [
    { number: '80', label: 'Projects Completed', suffix: '' },
    { number: '98', label: 'Client Satisfaction', suffix: '%' },
    { number: '15', label: 'Industry Awards', suffix: '' },
    { number: '5', label: 'Global Offices', suffix: '' }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
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
                  <CheckCircle2 style={{ width: '20px', height: '20px', color: '#10b981', marginTop: '2px', flexShrink: 0 }} />
                  <span className="text-gray-600" style={{ lineHeight: 1.6 }}>{item}</span>
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                alt="Team collaboration"
                className="rounded-xl shadow-xl hover-scale"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />
              <motion.img
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600"
                alt="Office meeting"
                className="rounded-xl shadow-xl hover-scale"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600"
                alt="Working on project"
                className="rounded-xl shadow-xl hover-scale"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />
              <motion.img
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600"
                alt="Team discussion"
                className="rounded-xl shadow-xl hover-scale"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-30" />
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-20" style={{ marginTop: '4rem' }}>
          <div style={{
            background: '#f7f8fb',
            borderRadius: '1.25rem',
            padding: '3rem 1rem',
            marginBottom: '2rem'
          }}>
          <SectionTitle
            subtitle="Our Values"
            title="What Drives Us Forward"
            description="Our core values shape everything we do and how we deliver value to our clients."
            align="center"
          />

          <div className="values-grid" style={{ maxWidth: '80rem', margin: '0 auto' }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full group" style={{ padding: '2rem' }}>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
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
                <Card className="text-center h-full hover:border-blue-500 border-2 border-transparent transition-colors">
                  <div className="inline-flex p-4 rounded-full bg-blue-100 mb-6">
                    <item.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{item.stats}</div>
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
