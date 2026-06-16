import Icon from './Icon.jsx';
import CodeBlock from './CodeBlock.jsx';
import './FeatureCard.css';

/**
 * FeatureCard — glassmorphism card for the bento grid.
 * `span` = undefined | 'wide' (2 cols) | 'tall' (2 rows).
 * Optional `code` renders a mono snippet inside the card.
 */
export default function FeatureCard({ icon, title, description, code, span, delay = 0 }) {
  const spanClass = span ? ` feature-card--${span}` : '';
  return (
    <article
      className={`feature-card reveal${spanClass}`}
      style={{ '--reveal-delay': `${delay}s` }}
    >
      <span className="feature-card__icon" aria-hidden="true">
        <Icon name={icon} size={22} strokeWidth={1.9} />
      </span>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{description}</p>
      {code && (
        <div className="feature-card__code">
          <CodeBlock
            tokens={[
              ['fn', 'page'],
              ['punct', '.'],
              ['fn', 'getByRole'],
              ['punct', '('],
              ['str', "'button'"],
              ['punct', ', { '],
              ['prop', 'name'],
              ['punct', ': '],
              ['str', "'Submit'"],
              ['punct', ' })'],
            ]}
          />
        </div>
      )}
    </article>
  );
}
