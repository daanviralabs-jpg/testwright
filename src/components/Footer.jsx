import Icon from './ui/Icon.jsx';
import { resolveAction } from '../lib/actions.js';
import { product, footer } from '../config/product.js';
import './Footer.css';

/**
 * Prefix root-relative static paths (e.g. "/privacy-policy.html") with
 * Vite's BASE_URL so they resolve under the GitHub Pages subpath.
 * Leaves anchors, mailto:, and absolute URLs untouched.
 */
function withBase(href) {
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  return import.meta.env.BASE_URL.replace(/\/$/, '') + href;
}

/** Resolve a footer link object → renderable href props, or null to drop it. */
function resolveFooterLink(link) {
  if (link.href) return { href: withBase(link.href) };
  if (link.action) {
    const r = resolveAction(link.action);
    return r ? { href: r.href, external: r.external } : null;
  }
  return null;
}

export default function Footer() {
  const github = resolveAction('github');

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand column */}
        <div className="footer__brand">
          <a className="footer__logo-row" href="#top" aria-label={`${product.shortName} home`}>
            <span className="footer__logo" aria-hidden="true">
              <Icon name="check-square" size={20} strokeWidth={2.3} />
            </span>
            <span className="footer__name">{product.shortName}</span>
            <span className="footer__pro">{product.badge}</span>
          </a>
          <p className="footer__blurb">{footer.blurb}</p>
          {github && (
            <a
              className="footer__social"
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
            >
              <Icon name="github" size={20} />
            </a>
          )}
        </div>

        {/* Link columns */}
        <div className="footer__cols">
          {footer.columns.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4 className="footer__col-title">{col.title}</h4>
              <ul>
                {col.links.map((link) => {
                  const resolved = resolveFooterLink(link);
                  if (!resolved) return null;
                  const external = resolved.external;
                  return (
                    <li key={link.label}>
                      <a
                        href={resolved.href}
                        {...(external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <span>{product.copyright}</span>
        <span className="footer__made">{footer.madeFor}</span>
      </div>
    </footer>
  );
}
