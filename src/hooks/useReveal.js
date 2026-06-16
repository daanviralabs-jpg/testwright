import { useEffect } from 'react';

/**
 * useReveal — one IntersectionObserver for the whole page.
 * ------------------------------------------------------------------
 * Any element with the `.reveal` class starts hidden/offset (see
 * global.css). When it scrolls into view we add `.is-visible`, then
 * stop observing it. Per-item stagger comes from an inline
 * `--reveal-delay` CSS variable on the element.
 *
 * Fallbacks:
 *  - No IntersectionObserver support → reveal everything immediately.
 *  - prefers-reduced-motion is handled in CSS (everything visible).
 */
export function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    if (elements.length === 0) return;

    // Fallback: no IO support → just show everything.
    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );

    elements.forEach((el) => observer.observe(el));

    // Safety net: an element that, for any reason, never trips the
    // observer (e.g. it sits just below the fold and the page is never
    // scrolled, or it's interactive while still hidden) must not stay
    // invisible forever. After a grace period, reveal anything left.
    const failsafe = window.setTimeout(() => {
      elements.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    }, 2500);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);
}
