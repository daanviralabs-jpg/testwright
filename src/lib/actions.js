/**
 * actions.js — resolveAction()
 * ------------------------------------------------------------------
 * Maps an action KEYWORD ("chrome" | "github" | "donate" | "demo")
 * or a raw anchor/URL ("#features", "https://…") into the props a
 * link needs: { href, target, rel, external }.
 *
 * Returns null when the underlying URL is unset in product config, so
 * the UI can auto-hide the button/link instead of rendering a dead one.
 */
import { product } from '../config/product.js';

const EXTERNAL = { target: '_blank', rel: 'noopener noreferrer', external: true };

export function resolveAction(action) {
  if (!action) return null;

  // Raw anchors and explicit URLs pass straight through.
  if (action.startsWith('#')) {
    return { href: action, external: false };
  }
  if (action.startsWith('http') || action.startsWith('mailto:')) {
    return { href: action, ...EXTERNAL };
  }

  const links = product.links || {};

  switch (action) {
    case 'chrome':
      return links.chrome ? { href: links.chrome, ...EXTERNAL } : null;
    case 'github':
      return links.github ? { href: links.github, ...EXTERNAL } : null;
    case 'donate':
      return links.donate ? { href: links.donate, ...EXTERNAL } : null;
    case 'demo':
      // demo is an in-page anchor (no new tab)
      return links.demo ? { href: links.demo, external: false } : null;
    default:
      return null;
  }
}
