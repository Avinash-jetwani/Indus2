import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, TrendingUp, Users, Clock, CheckCircle,
  ArrowRight, Award, Briefcase
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';
import { caseStudies } from '../../data/content';
import { Link } from 'react-scroll';

const Portfolio: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const additionalProjects = [
    {
      id: 'logistics',
      title: 'Smart Logistics Platform',
      category: 'Supply Chain',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
      description: 'AI-powered logistics optimization'
    },
    {
      id: 'education',
      title: 'EdTech Learning Portal',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600',
      description: 'Interactive online learning platform'
    },
    {
      id: 'realestate',
      title: 'Real Estate Management',
      category: 'PropTech',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600',
      description: 'Complete property management solution'
    },
    {
      id: 'social',
      title: 'Social Media Analytics',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600',
      description: 'Advanced social media insights platform'
    },
    {
      id: 'gaming',
      title: 'Mobile Gaming Platform',
      category: 'Entertainment',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600',
      description: 'Multiplayer gaming ecosystem'
    },
    {
      id: 'hr',
      title: 'HR Management System',
      category: 'Enterprise',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600',
      description: 'Complete HR automation suite'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-white" style={{ display: 'none' }}>
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Work"
          title="Featured Case Studies"
          description="Explore how we've helped businesses transform their digital presence and achieve remarkable results."
          align="center"
        />

        {/* Main Case Studies */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(study.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group cursor-pointer"
              onClick={() => setSelectedCase(study.id)}
            >
              <Card padding="none" className="overflow-hidden h-full">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredCard === study.id ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{study.industry}</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Industry Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-500 mb-4 text-sm">{study.client}</p>
                  <p className="text-gray-600 mb-6">{study.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                        +{study.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Results Preview */}
                  <div className="space-y-2 pb-4 border-b border-gray-200">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={ArrowRight}
                    className="mt-4 group-hover:text-primary-600"
                  >
                    View Case Study
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">More Success Stories</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                    <span className="text-white font-semibold text-sm">{project.title}</span>
                    <span className="text-white/80 text-xs mt-1">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-primary rounded-2xl p-12 text-white text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Briefcase className="w-10 h-10 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">80</div>
              <div className="text-white/80">Projects Delivered</div>
            </div>
            <div>
              <Users className="w-10 h-10 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div>
              <TrendingUp className="w-10 h-10 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
            <div>
              <Award className="w-10 h-10 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-white/80">Awards Won</div>
            </div>
          </div>

          <Link to="contact" smooth={true} duration={500}>
            <Button 
              variant="outline" 
              size="lg" 
              icon={ArrowRight}
              className="mt-8 bg-white text-primary-600 border-white hover:bg-gray-100"
            >
              Start Your Success Story
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const study = caseStudies.find(s => s.id === selectedCase);
                if (!study) return null;
                
                return (
                  <div>
                    <div className="relative h-80">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover rounded-t-2xl"
                      />
                      <button
                        onClick={() => setSelectedCase(null)}
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full p-2 hover:bg-white transition-colors"
                      >
                        <span className="text-2xl">&times;</span>
                      </button>
                    </div>
                    <div className="p-8">
                      <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-gray-500">{study.client}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500">{study.industry}</span>
                      </div>
                      <p className="text-gray-600 mb-8">{study.description}</p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                        <div className="space-y-3">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link to="contact" smooth={true} duration={500}>
                        <Button
                          size="lg"
                          icon={ArrowRight}
                          className="mt-8 w-full"
                          onClick={() => setSelectedCase(null)}
                        >
                          Start a Similar Project
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
