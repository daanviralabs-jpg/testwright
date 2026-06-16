import SectionHeading from './ui/SectionHeading.jsx';
import FeatureCard from './ui/FeatureCard.jsx';
import { features } from '../config/product.js';
import './Features.css';

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <SectionHeading
          eyebrow={features.eyebrow}
          title={features.title}
          subtitle={features.subtitle}
        />
        <div className="features__grid">
          {features.items.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={(i % 4) * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
