import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import { testimonials } from '../../data/content';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!auto || reduced) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [auto, reduced]);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionTitle kicker="Testimonials" title={<>What clients say</>} />

        <div className="testi" style={{ marginTop: '2.5rem' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="testi-card">
                <Quote className="testi-quote" />
                <div className="testi-stars">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <p className="testi-text">"{current.content}"</p>
                <div className="testi-name">{current.name}</div>
                <div className="testi-role">{current.company}</div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="testi-dots">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                className={`testi-dot ${i === index ? 'active' : ''}`}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => {
                  setAuto(false);
                  setIndex(i);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
