import Icon from './ui/Icon.jsx';
import { builderDemo } from '../config/product.js';
import './BuilderSpotlight.css';

/**
 * BuilderSpotlight — split section mirroring LocatorSpotlight, but for
 * the test-case Builder. Visual (a faithful mock of the extension's
 * Builder side-panel) sits on the LEFT; copy on the RIGHT, to alternate
 * rhythm against the locator section. The mock is built from divs.
 */
export default function BuilderSpotlight() {
  const d = builderDemo;

  return (
    <section className="section builder" id="builder">
      <div className="container builder__grid">
        {/* Mock Builder panel */}
        <div className="builder__panel reveal reveal--left" aria-hidden="true">
          <div className="builder__panel-head">
            <span className="builder__panel-logo">
              <Icon name="check-square" size={16} strokeWidth={2.2} />
            </span>
            <span className="builder__panel-title">Testwright</span>
            <span className="builder__panel-pro">PRO</span>
          </div>

          <div className="builder__panel-body">
            <span className="builder__field-label">Requirement / Feature Description</span>
            <div className="builder__textarea">
              <span className="builder__placeholder">{d.placeholder}</span>
              <span className="builder__caret" />
            </div>
            <p className="builder__example">{d.example}</p>

            <div className="builder__row">
              {d.controls.map((c) => (
                <div className="builder__control" key={c.label}>
                  <span className="builder__field-label">{c.label}</span>
                  <div className="builder__select">
                    {c.value}
                    <Icon name="chevron" size={15} strokeWidth={2} />
                  </div>
                </div>
              ))}
            </div>

            <span className="builder__field-label">{d.language.label}</span>
            <div className="builder__select builder__select--full">
              {d.language.value}
              <Icon name="chevron" size={15} strokeWidth={2} />
            </div>

            <span className="builder__field-label">{d.verification.label}</span>
            <div className="builder__chips">
              {d.verification.options.map((opt) => (
                <span className="builder__chip" key={opt}>
                  <Icon name={opt.includes('Log') ? 'file' : 'sliders'} size={13} strokeWidth={2} />
                  {opt}
                </span>
              ))}
            </div>

            <span className="builder__field-label">{d.categories.label}</span>
            <div className="builder__chips builder__chips--wrap">
              {d.categories.items.map((cat) => (
                <span
                  className={`builder__pill${
                    cat === d.categories.active ? ' builder__pill--active' : ''
                  }`}
                  key={cat}
                >
                  {cat}
                </span>
              ))}
            </div>

            <button className="builder__generate" type="button">
              <Icon name="brain" size={15} strokeWidth={2} />
              {d.generateLabel}
            </button>
          </div>
        </div>

        {/* Copy */}
        <div className="builder__text reveal reveal--right">
          <span className="eyebrow">
            <Icon name="brain" size={14} strokeWidth={2} />
            {d.eyebrow}
          </span>
          <h2 className="builder__title">{d.title}</h2>
          <p className="builder__body">{d.body}</p>
          <ul className="builder__bullets">
            {d.bullets.map((b) => (
              <li key={b}>
                <span className="builder__check" aria-hidden="true">
                  <Icon name="check-square" size={13} strokeWidth={2.4} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
