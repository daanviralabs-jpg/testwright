import Button from './ui/Button.jsx';
import Icon from './ui/Icon.jsx';
import BrowserMock from './ui/BrowserMock.jsx';
import { hero } from '../config/product.js';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Decorative background */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--1 orb" aria-hidden="true" />
      <div className="hero__orb hero__orb--2 orb" aria-hidden="true" />

      <div className="hero__inner container">
        {/* Copy */}
        <div className="hero__copy">
          <span className="eyebrow reveal">
            <Icon name="check-square" size={14} strokeWidth={2} />
            {hero.eyebrow}
          </span>

          <h1 className="hero__title reveal" style={{ '--reveal-delay': '0.05s' }}>
            <span className="text-gradient">{hero.title}</span>
          </h1>

          <p className="hero__subtitle reveal" style={{ '--reveal-delay': '0.12s' }}>
            {hero.subtitle}
          </p>

          <div className="hero__ctas reveal" style={{ '--reveal-delay': '0.18s' }}>
            <Button action={hero.primaryCta.action} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button action={hero.secondaryCta.action} variant="ghost" arrow={false}>
              {hero.secondaryCta.label}
            </Button>
          </div>

          <p className="hero__trust reveal" style={{ '--reveal-delay': '0.24s' }}>
            {hero.trustLine}
          </p>
        </div>

        {/* Visual */}
        <div
          className="hero__visual reveal reveal--scale"
          style={{ '--reveal-delay': '0.2s' }}
        >
          <BrowserMock />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero__scroll-cue" aria-hidden="true">
        <Icon name="chevron" size={22} />
      </div>
    </section>
  );
}
