import { useState } from 'react';
import SectionHeading from './ui/SectionHeading.jsx';
import Icon from './ui/Icon.jsx';
import { faq } from '../config/product.js';
import './Faq.css';

function FaqItem({ item, index, open, onToggle }) {
  const headingId = `faq-q-${index}`;
  const panelId = `faq-a-${index}`;

  return (
    <div className={`faq__item${open ? ' is-open' : ''}`}>
      <h3 className="faq__q-wrap">
        <button
          className="faq__q"
          id={headingId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{item.q}</span>
          <span className="faq__icon" aria-hidden="true">
            <Icon name="plus" size={20} strokeWidth={2.2} />
          </span>
        </button>
      </h3>
      {/* Open/close is animated purely in CSS via grid-template-rows
          (0fr → 1fr) — no JS height measurement, so the answer can
          never collapse from a stale/zero scrollHeight read. */}
      <div className="faq__a" id={panelId} role="region" aria-labelledby={headingId}>
        <div className="faq__a-clip">
          <p className="faq__a-inner">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section section--elev faq" id="faq">
      <div className="container faq__container">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        <div className="faq__list reveal">
          {faq.items.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
