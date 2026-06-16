import { useEffect, useState } from 'react';
import Icon from './ui/Icon.jsx';
import Button from './ui/Button.jsx';
import { resolveAction } from '../lib/actions.js';
import { product, navLinks } from '../config/product.js';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Frosted glass after scrolling past the hero edge
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const github = resolveAction('github');

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Primary">
        {/* Brand */}
        <a className="navbar__brand" href="#top" aria-label={`${product.shortName} home`}>
          <span className="navbar__logo" aria-hidden="true">
            <Icon name="check-square" size={20} strokeWidth={2.3} />
          </span>
          <span className="navbar__name">{product.shortName}</span>
          <span className="navbar__badge">{product.badge}</span>
        </a>

        {/* Center links (desktop) */}
        <ul className="navbar__links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Right actions (desktop) */}
        <div className="navbar__actions">
          {github && (
            <a
              className="navbar__icon-btn"
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
            >
              <Icon name="github" size={20} />
            </a>
          )}
          <Button action="chrome" variant="primary" arrow={false} className="navbar__cta">
            {product.ctas.primary}
          </Button>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={`navbar__burger${open ? ' is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span /> <span /> <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`navbar__backdrop${open ? ' is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div id="mobile-menu" className={`navbar__mobile${open ? ' is-open' : ''}`}>
        <ul>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          action="chrome"
          variant="primary"
          className="navbar__mobile-cta"
          onClick={() => setOpen(false)}
        >
          {product.ctas.primary}
        </Button>
        {github && (
          <a
            className="navbar__mobile-github"
            href={github.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" size={18} /> GitHub
          </a>
        )}
      </div>
    </header>
  );
}
