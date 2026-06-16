import Button from './ui/Button.jsx';
import { ctaBand } from '../config/product.js';
import './CtaBand.css';

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-band__panel reveal reveal--scale">
          <div className="cta-band__orb cta-band__orb--1 orb" aria-hidden="true" />
          <div className="cta-band__orb cta-band__orb--2 orb" aria-hidden="true" />
          <div className="bg-grid" aria-hidden="true" />

          <div className="cta-band__content">
            <h2 className="cta-band__title">{ctaBand.title}</h2>
            <Button action={ctaBand.cta.action} variant="secondary" className="cta-band__btn">
              {ctaBand.cta.label}
            </Button>
            <p className="cta-band__microcopy">{ctaBand.microcopy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
