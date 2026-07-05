import React from 'react';
import Reveal from './Reveal';

interface SectionTitleProps {
  kicker?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  kicker,
  title,
  description,
  align = 'center',
}) => (
  <Reveal className={`section-head ${align === 'center' ? 'section-head--center' : ''}`.trim()}>
    {kicker && <span className={`kicker ${align === 'center' ? 'kicker--center' : ''}`.trim()}>{kicker}</span>}
    <h2 className="headline">{title}</h2>
    {description && <p className="lead">{description}</p>}
  </Reveal>
);

export default SectionTitle;
