import { providers } from '../config/product.js';
import './ProviderBar.css';

export default function ProviderBar() {
  return (
    <section className="provider-bar" aria-label="Supported AI providers">
      <div className="provider-bar__inner container reveal">
        <span className="provider-bar__label">{providers.label}</span>
        <ul className="provider-bar__list">
          {providers.items.map((p, i) => (
            <li className="provider-bar__item" key={p.name}>
              <span>{p.name}</span>
              {i < providers.items.length - 1 && (
                <span className="provider-bar__divider" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
