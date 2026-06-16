import Icon from './ui/Icon.jsx';
import CodeBlock from './ui/CodeBlock.jsx';
import { apiSettingsDemo } from '../config/product.js';
import './ApiSettingsSpotlight.css';

/**
 * ApiSettingsSpotlight — split section for the API Settings panel.
 * Copy on the LEFT, a mock of the extension's API Settings panel on the
 * RIGHT (Cloud Provider / Local Model toggle, runtime + fields, Test
 * Connection, activity log). Built from divs.
 */
export default function ApiSettingsSpotlight() {
  const d = apiSettingsDemo;

  return (
    <section className="section api" id="api-settings">
      <div className="container api__grid">
        {/* Copy */}
        <div className="api__text reveal reveal--left">
          <span className="eyebrow">
            <Icon name="key" size={14} strokeWidth={2} />
            {d.eyebrow}
          </span>
          <h2 className="api__title">{d.title}</h2>
          <p className="api__body">{d.body}</p>
          <ul className="api__bullets">
            {d.bullets.map((b) => (
              <li key={b}>
                <span className="api__check" aria-hidden="true">
                  <Icon name="check-square" size={13} strokeWidth={2.4} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Mock API Settings panel */}
        <div className="api__panel reveal reveal--right" aria-hidden="true">
          <div className="api__panel-head">
            <span className="api__panel-logo">
              <Icon name="check-square" size={16} strokeWidth={2.2} />
            </span>
            <span className="api__panel-title">Testwright</span>
            <span className="api__panel-pro">PRO</span>
          </div>

          <div className="api__panel-body">
            {/* Provider mode toggle */}
            <div className="api__tabs">
              {d.tabs.map((t) => (
                <span
                  className={`api__tab${t.active ? ' api__tab--active' : ''}`}
                  key={t.label}
                >
                  <Icon name={t.icon} size={14} strokeWidth={2} />
                  {t.label}
                </span>
              ))}
            </div>

            {/* Fields */}
            {d.fields.map((f) => (
              <div className="api__field" key={f.label}>
                <span className="api__field-label">
                  {f.label}
                  {f.optional && <span className="api__optional"> ({f.optional})</span>}
                </span>
                <div className={`api__input${f.select ? ' api__input--select' : ''}`}>
                  <span className={f.muted ? 'api__input-muted' : 'api__input-value'}>
                    {f.value}
                  </span>
                  {f.select && <Icon name="chevron" size={15} strokeWidth={2} />}
                </div>
              </div>
            ))}

            <p className="api__hint">
              Run <code>ollama serve</code>, then <code>ollama pull llama3.1</code>. Leave
              Server URL blank to use the default.
            </p>

            <button className="api__test" type="button">
              <Icon name="zap" size={15} strokeWidth={2} className="api__test-icon" />
              {d.testLabel}
            </button>

            {/* Activity log */}
            <div className="api__log-head">
              <span className="api__log-label">{d.logLabel}</span>
              <span className="api__log-clear">{d.clearLabel}</span>
            </div>
            <div className="api__log">
              {d.log.map((entry, i) => (
                <div className="api__log-entry" key={i}>
                  <div className="api__log-top">
                    <span className="api__log-kind">
                      <span className="api__log-tick">✓</span>
                      {entry.kind}
                    </span>
                    <span className="api__log-time">
                      {entry.time} · {entry.took}
                    </span>
                  </div>
                  <div className="api__log-meta">
                    <CodeBlock>{entry.meta}</CodeBlock>
                  </div>
                  <div className="api__log-detail">{entry.detail}</div>
                  {entry.link && <span className="api__log-link">▸ {entry.link}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
