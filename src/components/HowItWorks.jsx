import SectionHeading from './ui/SectionHeading.jsx';
import Icon from './ui/Icon.jsx';
import { howItWorks } from '../config/product.js';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section className="section section--elev how" id="how-it-works">
      <div className="container">
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          subtitle={howItWorks.subtitle}
        />
        <ol className="how__steps">
          <div className="how__line" aria-hidden="true" />
          {howItWorks.steps.map((step, i) => (
            <li
              className="how__step reveal"
              key={step.title}
              style={{ '--reveal-delay': `${i * 0.12}s` }}
            >
              <span className="how__num">{i + 1}</span>
              <span className="how__icon" aria-hidden="true">
                <Icon name={step.icon} size={24} />
              </span>
              <h3 className="how__title">{step.title}</h3>
              <p className="how__desc">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
