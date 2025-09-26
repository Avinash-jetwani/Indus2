import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import { testimonials } from '../../data/content';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="section-padding overflow-hidden" style={{ background: '#0b1521' }}>
      <div className="container-custom">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          description=""
          align="center"
          tone="dark"
        />

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="relative p-8 md:p-12" style={{ background: 'rgba(12, 21, 33, 0.92)', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 20px 50px rgba(6, 12, 20, 0.55)' }}>
                {/* Quote Icon */}
                <Quote className="absolute top-8 left-8 w-12 h-12" style={{ color: 'rgba(249, 115, 22, 0.4)' }} />
                
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5"
                        style={{
                          color:
                            i < testimonials[currentIndex].rating
                              ? '#facc15'
                              : 'rgba(148, 163, 184, 0.35)',
                          fill:
                            i < testimonials[currentIndex].rating
                              ? '#facc15'
                              : 'transparent'
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-xl md:text-2xl italic leading-relaxed text-center mb-8" style={{ color: 'rgba(226, 232, 240, 0.88)' }}>
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author (no pictures) */}
                  <div className="flex flex-col items-center">
                    <h4 className="text-lg font-semibold" style={{ color: '#fef3c7' }}>
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm" style={{ color: 'rgba(203, 213, 225, 0.78)' }}>
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Removed navigation arrows */}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                style={{
                  width: index === currentIndex ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '9999px',
                  transition: 'all 0.3s ease',
                  background: index === currentIndex ? '#f97316' : 'rgba(148, 163, 184, 0.4)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Removed duplicate testimonials grid */}

        {/* Removed client logos */}

        {/* Removed trust indicators */}
      </div>
    </section>
  );
};

export default Testimonials;
