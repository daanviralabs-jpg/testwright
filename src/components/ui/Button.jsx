import Icon from './Icon.jsx';
import { resolveAction } from '../../lib/actions.js';
import './Button.css';

/**
 * Button — renders an <a> when an action/href resolves, else a <button>.
 * Variants: primary | secondary | ghost | outline.
 * Props:
 *   action   — keyword resolved via actions.js ("chrome"|"github"|"demo"|"#anchor")
 *   href     — raw href (overrides action)
 *   variant  — visual style
 *   icon     — leading icon name
 *   arrow    — show trailing arrow (defaults true for primary)
 *   onClick  — click handler when rendered as <button>
 *
 * If an action is configured but its URL is unset, resolveAction returns
 * null and we DON'T render the button (auto-hide dead links).
 */
export default function Button({
  children,
  action,
  href,
  variant = 'primary',
  icon,
  arrow,
  onClick,
  className = '',
  type = 'button',
  ...rest
}) {
  const showArrow = arrow ?? variant === 'primary';
  const cls = `btn btn--${variant} ${className}`.trim();

  const inner = (
    <>
      {icon && <Icon name={icon} size={18} className="btn__icon" />}
      <span className="btn__label">{children}</span>
      {showArrow && <Icon name="arrow" size={17} className="btn__arrow" />}
    </>
  );

  // Resolve link target. Explicit href wins; otherwise resolve the action.
  let link = null;
  if (href) {
    link = href.startsWith('http')
      ? { href, target: '_blank', rel: 'noopener noreferrer' }
      : { href };
  } else if (action) {
    const resolved = resolveAction(action);
    if (resolved === null && !onClick) return null; // unset URL → hide
    if (resolved) {
      link = { href: resolved.href };
      if (resolved.external) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    }
  }

  if (link) {
    return (
      <a className={cls} {...link} {...rest}>
        {inner}
      </a>
    );
  }

  return (
    <button className={cls} type={type} onClick={onClick} {...rest}>
      {inner}
    </button>
  );
}
