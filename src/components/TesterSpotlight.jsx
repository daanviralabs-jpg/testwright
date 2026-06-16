import Icon from './ui/Icon.jsx';
import CodeBlock from './ui/CodeBlock.jsx';
import { testerDemo } from '../config/product.js';
import './TesterSpotlight.css';

/**
 * TesterSpotlight — split section for the Validation Tester panel.
 * Mock of the extension's Tester panel on the LEFT (the three actions,
 * a deep-probe result, and per-field result cards), copy on the RIGHT.
 * Built from divs.
 */
export default function TesterSpotlight() {
  const d = testerDemo;

  return (
    <section className="section section--elev tester" id="tester">
      <div className="container tester__grid">
        {/* Mock Tester panel */}
        <div className="tester__panel reveal reveal--left" aria-hidden="true">
          <div className="tester__panel-head">
            <span className="tester__panel-logo">
              <Icon name="check-square" size={16} strokeWidth={2.2} />
            </span>
            <span className="tester__panel-title">Testwright</span>
            <span className="tester__panel-pro">PRO</span>
          </div>

          <div className="tester__panel-body">
            <p className="tester__intro">{d.intro}</p>

            {/* Action buttons */}
            {d.actions.map((a) => (
              <button
                className={`tester__action tester__action--${a.variant}`}
                type="button"
                key={a.label}
              >
                <Icon name={a.icon} size={15} strokeWidth={2} />
                {a.label}
              </button>
            ))}

            {/* Deep probe result */}
            <div className="tester__result">
              <p className="tester__result-title">{d.result.title}</p>
              <p className="tester__result-detail">{d.result.detail}</p>
            </div>

            <div className="tester__probed-row">
              <span className="tester__probed">{d.probed}</span>
            </div>
            <div className="tester__toolbar">
              <span className="tester__tool">{d.copyLabel}</span>
              <span className="tester__tool">{d.clearLabel}</span>
            </div>

            {/* Per-field result cards */}
            {d.cards.map((c, i) => (
              <div className="tester__card" key={i}>
                <div className="tester__card-head">
                  <span className="tester__card-field">{c.field}:</span>
                  <span className="tester__card-badge">{c.badge}</span>
                </div>
                <div className="tester__card-meta">
                  <CodeBlock>{c.meta}</CodeBlock>
                </div>
                <div className="tester__card-check">
                  <span className="tester__card-tick">✓</span>
                  <span className="tester__card-label">{c.check}</span>
                  <CodeBlock>{c.value}</CodeBlock>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copy */}
        <div className="tester__text reveal reveal--right">
          <span className="eyebrow">
            <Icon name="check-square" size={14} strokeWidth={2} />
            {d.eyebrow}
          </span>
          <h2 className="tester__title">{d.title}</h2>
          <p className="tester__body">{d.body}</p>

          <div className="tester__features">
            {d.actions.map((a) => (
              <div className="tester__feature" key={a.label}>
                <span className="tester__feature-icon" aria-hidden="true">
                  <Icon name={a.icon} size={16} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="tester__feature-name">{a.label}</h3>
                  <p className="tester__feature-summary">{a.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
