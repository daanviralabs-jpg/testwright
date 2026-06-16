import Counter from './ui/Counter.jsx';
import { stats } from '../config/product.js';
import './Stats.css';

export default function Stats() {
  return (
    <section className="stats" aria-label="Key facts">
      <div className="bg-grid" aria-hidden="true" />
      <div className="container stats__grid reveal">
        {stats.items.map((s) => (
          <div className="stats__item" key={s.label}>
            <div className="stats__value">
              <Counter value={s.value} suffix={s.suffix} prefix={s.prefix || ''} />
            </div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
