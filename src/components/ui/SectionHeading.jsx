import Icon from './Icon.jsx';
import './SectionHeading.css';

/**
 * SectionHeading — eyebrow chip + title + optional subtitle.
 * `align` = "center" (default) | "left".
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-heading section-heading--${align} reveal`}>
      {eyebrow && (
        <span className="eyebrow section-heading__eyebrow">
          <Icon name="check-square" size={14} strokeWidth={2} />
          {eyebrow}
        </span>
      )}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
