import SectionHeading from './ui/SectionHeading.jsx';
import Button from './ui/Button.jsx';
import Icon from './ui/Icon.jsx';
import { resolveAction } from '../lib/actions.js';
import { pricing } from '../config/product.js';
import './Pricing.css';

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          subtitle={pricing.subtitle}
        />

        <div className="pricing__grid">
          {pricing.tiers.map((tier, i) => {
            // A donation card auto-hides if no donate URL is configured.
            if (tier.donate && resolveAction(tier.cta.action) === null) return null;

            return (
              <article
                className={`pricing__card${tier.featured ? ' pricing__card--featured' : ''}${
                  tier.donate ? ' pricing__card--donate' : ''
                } reveal`}
                key={tier.name}
                style={{ '--reveal-delay': `${i * 0.1}s` }}
              >
                {tier.badge && (
                  <span className="pricing__badge">
                    {tier.donate && <Icon name="heart" size={12} strokeWidth={2.4} />}
                    {tier.badge}
                  </span>
                )}

                <h3 className="pricing__name">
                  {tier.icon && (
                    <span className="pricing__name-icon" aria-hidden="true">
                      <Icon name={tier.icon} size={18} strokeWidth={2} />
                    </span>
                  )}
                  {tier.name}
                </h3>

                <div className="pricing__price">
                  <span
                    className={`pricing__amount${tier.donate ? ' pricing__amount--donate' : ''}`}
                  >
                    {tier.price}
                  </span>
                  {tier.cadence && <span className="pricing__cadence">/ {tier.cadence}</span>}
                </div>
                {tier.priceNote && <span className="pricing__price-note">{tier.priceNote}</span>}

                <p className="pricing__desc">{tier.description}</p>

                <ul className="pricing__features">
                  {tier.features.map((f) => (
                    <li key={f}>
                      <span
                        className={`pricing__check${
                          tier.donate ? ' pricing__check--donate' : ''
                        }`}
                        aria-hidden="true"
                      >
                        <Icon name={tier.donate ? 'heart' : 'check-square'} size={12} strokeWidth={2.6} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  action={tier.cta.action}
                  variant={tier.featured ? 'primary' : 'secondary'}
                  className="pricing__cta"
                  icon={tier.donate ? 'heart' : undefined}
                  arrow={false}
                >
                  {tier.cta.label}
                </Button>
              </article>
            );
          })}
        </div>

        {pricing.footnote && <p className="pricing__footnote reveal">{pricing.footnote}</p>}
      </div>
    </section>
  );
}
