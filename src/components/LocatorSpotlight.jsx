import Icon from './ui/Icon.jsx';
import CodeBlock from './ui/CodeBlock.jsx';
import { locatorDemo } from '../config/product.js';
import './LocatorSpotlight.css';

export default function LocatorSpotlight() {
  return (
    <section className="section section--elev locator" id="locators">
      <div className="container locator__grid">
        {/* Text */}
        <div className="locator__text reveal reveal--left">
          <span className="eyebrow">
            <Icon name="target" size={14} strokeWidth={2} />
            {locatorDemo.eyebrow}
          </span>
          <h2 className="locator__title">{locatorDemo.title}</h2>
          <p className="locator__body">{locatorDemo.body}</p>
          <ul className="locator__bullets">
            {locatorDemo.bullets.map((b) => (
              <li key={b}>
                <span className="locator__check" aria-hidden="true">
                  <Icon name="check-square" size={13} strokeWidth={2.4} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Mock "Playwright Selectors" panel */}
        <div className="locator__panel reveal reveal--right" aria-hidden="true">
          <div className="locator__panel-head">
            <span className="locator__panel-logo">
              <Icon name="check-square" size={16} strokeWidth={2.2} />
            </span>
            <span className="locator__panel-title">Testwright</span>
            <span className="locator__panel-pro">PRO</span>
          </div>

          <div className="locator__panel-body">
            <div className="locator__heading-row">
              <span className="locator__heading-icon">
                <Icon name="target" size={18} strokeWidth={1.9} />
              </span>
              <span className="locator__heading">{locatorDemo.heading}</span>
            </div>

            {/* Pick element CTA */}
            <button className="locator__pick" type="button">
              <Icon name="target" size={16} strokeWidth={2} />
              {locatorDemo.pickLabel}
            </button>

            {/* Verify a locator */}
            <span className="locator__field-label">{locatorDemo.verify.label}</span>
            <div className="locator__verify">
              <span className="locator__verify-input">
                <CodeBlock>{locatorDemo.verify.value}</CodeBlock>
                <span className="locator__verify-caret" />
              </span>
              <button className="locator__verify-clear" type="button" aria-hidden="true">
                <Icon name="close" size={14} strokeWidth={2} />
              </button>
              <button className="locator__verify-test" type="button">
                {locatorDemo.verify.testLabel}
              </button>
            </div>
            <div className="locator__result">
              <Icon name="check-square" size={13} strokeWidth={2.4} />
              {locatorDemo.verify.result}
            </div>

            {/* Extract from page */}
            <div className="locator__divider">
              <span>{locatorDemo.extractDivider}</span>
            </div>

            <span className="locator__field-label">{locatorDemo.strategies.label}</span>
            <div className="locator__strategies">
              {locatorDemo.strategies.items.map((s) => (
                <span
                  className={`locator__strat${
                    locatorDemo.strategies.active.includes(s) ? ' locator__strat--on' : ''
                  }`}
                  key={s}
                >
                  {s}
                </span>
              ))}
            </div>

            <button className="locator__extract" type="button">
              <Icon name="upload" size={15} strokeWidth={2} />
              {locatorDemo.extractLabel}
            </button>
            <span className="locator__extract-count">{locatorDemo.extractCount}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
