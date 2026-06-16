import Icon from './ui/Icon.jsx';
import CodeBlock from './ui/CodeBlock.jsx';
import { scanDemo } from '../config/product.js';
import './ScanSpotlight.css';

/**
 * ScanSpotlight — split section for the Scan / Test Data panel.
 * Copy on the LEFT, a mock of the extension's Scan panel on the RIGHT
 * (scan CTA, auto-fill controls, and a filled-fields result). Divs only.
 */
export default function ScanSpotlight() {
  const d = scanDemo;

  return (
    <section className="section scan" id="scan">
      <div className="container scan__grid">
        {/* Copy */}
        <div className="scan__text reveal reveal--left">
          <span className="eyebrow">
            <Icon name="scan" size={14} strokeWidth={2} />
            {d.eyebrow}
          </span>
          <h2 className="scan__title">{d.title}</h2>
          <p className="scan__body">{d.body}</p>

          <div className="scan__features">
            {d.features.map((f) => (
              <div className="scan__feature" key={f.name}>
                <div className="scan__feature-head">
                  <span className="scan__feature-icon" aria-hidden="true">
                    <Icon name={f.icon} size={18} strokeWidth={2} />
                  </span>
                  <h3 className="scan__feature-name">{f.name}</h3>
                  {f.badge && <span className="scan__feature-badge">{f.badge}</span>}
                </div>
                <p className="scan__feature-summary">{f.summary}</p>
                <ul className="scan__feature-points">
                  {f.points.map((p) => (
                    <li key={p}>
                      <span className="scan__check" aria-hidden="true">
                        <Icon name="check-square" size={12} strokeWidth={2.4} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="scan__feature-note">{f.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mock Scan panel */}
        <div className="scan__panel reveal reveal--right" aria-hidden="true">
          <div className="scan__panel-head">
            <span className="scan__panel-logo">
              <Icon name="check-square" size={16} strokeWidth={2.2} />
            </span>
            <span className="scan__panel-title">Testwright</span>
            <span className="scan__panel-pro">PRO</span>
          </div>

          <div className="scan__panel-body">
            {/* Scan hero card */}
            <div className="scan__hero">
              <span className="scan__hero-icon">
                <Icon name="scan" size={30} strokeWidth={1.7} />
              </span>
              <p className="scan__hero-title">{d.heading}</p>
              <p className="scan__hero-sub">{d.subtitle}</p>
              <button className="scan__scan-btn" type="button">
                <Icon name="search" size={15} strokeWidth={2} />
                {d.scanLabel}
              </button>
            </div>

            {/* Test data divider */}
            <div className="scan__divider">
              <span>{d.testDataDivider}</span>
            </div>

            <span className="scan__field-label">{d.autoFillLabel}</span>
            <span className="scan__scope">{d.scopePill}</span>

            <button className="scan__fill-btn" type="button">
              <Icon name="pen" size={15} strokeWidth={2} />
              {d.fillLabel}
            </button>

            {/* Result */}
            <div className="scan__result">
              <p className="scan__result-summary">
                <span className="scan__result-tick">✓</span>
                {d.result.summary}
              </p>
              <div className="scan__result-breakdown">
                <CodeBlock>{d.result.breakdown}</CodeBlock>
              </div>
            </div>

            <p className="scan__hint">{d.hint}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
