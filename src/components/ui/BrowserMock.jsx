import Icon from './Icon.jsx';
import CodeBlock from './CodeBlock.jsx';
import './BrowserMock.css';

/**
 * BrowserMock — a fake browser frame (traffic lights + URL bar) wrapping
 * a docked Testwright side-panel UI built purely from divs. No real
 * screenshots required. Decorative — marked aria-hidden.
 */
export default function BrowserMock() {
  return (
    <div className="browser-mock" aria-hidden="true">
      {/* Browser chrome */}
      <div className="browser-mock__bar">
        <div className="browser-mock__dots">
          <span /> <span /> <span />
        </div>
        <div className="browser-mock__url">
          <Icon name="lock" size={12} strokeWidth={2} />
          app.example.com/checkout
        </div>
        <div className="browser-mock__chrome-actions">
          <span /> <span />
        </div>
      </div>

      {/* Body: page area + docked side panel */}
      <div className="browser-mock__body">
        {/* Faint page behind the panel */}
        <div className="browser-mock__page">
          <div className="browser-mock__page-line w70" />
          <div className="browser-mock__page-line w90" />
          <div className="browser-mock__page-line w50" />
          <div className="browser-mock__page-block" />
          <div className="browser-mock__page-line w80" />
          <div className="browser-mock__page-line w40" />
        </div>

        {/* Docked side panel */}
        <aside className="panel">
          <header className="panel__head">
            <span className="panel__logo">
              <Icon name="check-square" size={16} strokeWidth={2.2} />
            </span>
            <span className="panel__title">Testwright</span>
            <span className="panel__pro">PRO</span>
          </header>

          <div className="panel__tabs">
            <span className="panel__tab panel__tab--active">Test Cases</span>
            <span className="panel__tab">Locators</span>
          </div>

          {/* Generated test-case cards */}
          <div className="tc">
            <div className="tc__top">
              <span className="tc__id">TC-001</span>
              <span className="tc__tag">Functional</span>
            </div>
            <div className="tc__title">Valid checkout with saved card</div>
            <div className="tc__step">
              <span className="tc__num">1</span> Open cart and click Checkout
            </div>
            <div className="tc__step">
              <span className="tc__num">2</span> Select saved card · Pay
            </div>
            <div className="tc__expect">✓ Order confirmation shown</div>
          </div>

          <div className="tc">
            <div className="tc__top">
              <span className="tc__id">TC-002</span>
              <span className="tc__tag tc__tag--edge">Edge</span>
            </div>
            <div className="tc__title">Expired card is rejected</div>
            <div className="tc__bar" />
            <div className="tc__bar tc__bar--short" />
          </div>

          {/* Locator list */}
          <div className="panel__section-label">Playwright locators</div>
          <div className="loc">
            <span className="loc__strategy">getByRole</span>
            <CodeBlock
              tokens={[
                ['fn', 'getByRole'],
                ['punct', '('],
                ['str', "'button'"],
                ['punct', ')'],
              ]}
            />
          </div>
          <div className="loc">
            <span className="loc__strategy">getByLabel</span>
            <CodeBlock
              tokens={[
                ['fn', 'getByLabel'],
                ['punct', '('],
                ['str', "'Card number'"],
                ['punct', ')'],
              ]}
            />
          </div>
          <div className="loc">
            <span className="loc__strategy loc__strategy--id">#id</span>
            <CodeBlock
              tokens={[
                ['fn', 'locator'],
                ['punct', '('],
                ['str', "'#pay-now'"],
                ['punct', ')'],
              ]}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
