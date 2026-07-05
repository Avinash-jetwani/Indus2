import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import { caseStudies } from '../../data/content';
import { ensureGsap } from '../../lib/gsap';
import { scrollToSection } from '../../lib/scroll';

const Work: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!section || !viewport || !track) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
      viewport.classList.add('is-pinned');

      const getDistance = () => Math.max(track.scrollWidth - viewport.clientWidth, 0);

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => '+=' + getDistance(),
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progress) progress.style.width = `${self.progress * 100}%`;
          },
        },
      });

      return () => {
        viewport.classList.remove('is-pinned');
        gsap.set(track, { clearProps: 'transform' });
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="work" className="section" ref={sectionRef}>
      <div className="container">
        <SectionTitle
          kicker="Selected work"
          title={<>Outcomes, not just output</>}
          description="A snapshot of what we've shipped across Web3, AI, fintech and commerce."
          align="left"
        />
      </div>

      <div className="work-viewport" ref={viewportRef} style={{ marginTop: '2.5rem' }}>
        <div className="work-track" ref={trackRef}>
          {caseStudies.map((study) => (
            <Card key={study.id} className="work-card">
              <span className="work-industry">{study.industry}</span>
              <h3>{study.title}</h3>
              <p className="work-client">{study.client}</p>
              <p className="desc">{study.description}</p>

              <div className="tag-row" style={{ marginTop: 0, marginBottom: '0.4rem' }}>
                {study.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              <ul className="work-results">
                {study.results.map((r) => (
                  <li key={r.label}>
                    <span className="metric">{r.metric}</span>
                    <span>{r.label}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="work-progress">
          <span ref={progressRef} />
        </div>
        <div style={{ marginTop: '2rem' }}>
          <button className="btn btn--ghost" onClick={() => scrollToSection('contact')}>
            Start your success story
            <ArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
