/**
 * Icon — inline stroke SVG set keyed by name, drawn in currentColor.
 * Pass `size` (px) and `strokeWidth`. Decorative by default
 * (aria-hidden); pass a `title` to make it labelled.
 */
/* All glyphs are 24×24, stroke-based (Lucide-style geometry) so they
 * render crisply at any size in currentColor. Provider marks are drawn
 * as recognizable monochrome silhouettes. */
const paths = {
  'check-square': (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 12.5l2.5 2.5L16 9" />
    </>
  ),
  brain: (
    <>
      <path d="M12 5a3 3 0 0 0-5.6-1.5A2.5 2.5 0 0 0 4 6a2.5 2.5 0 0 0-.5 4.5A2.5 2.5 0 0 0 4 15a2.5 2.5 0 0 0 3 2.5A2.5 2.5 0 0 0 12 19V5Z" />
      <path d="M12 5a3 3 0 0 1 5.6-1.5A2.5 2.5 0 0 1 20 6a2.5 2.5 0 0 1 .5 4.5A2.5 2.5 0 0 1 20 15a2.5 2.5 0 0 1-3 2.5A2.5 2.5 0 0 1 12 19" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  key: (
    <>
      <circle cx="7.5" cy="15.5" r="3.5" />
      <path d="M10 13L20 3" />
      <path d="M16.5 6.5L19.5 9.5" />
      <path d="M14 9L16.5 11.5" />
    </>
  ),
  sliders: (
    <>
      {/* three tracks with handle bars (no fill — background-independent) */}
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
      <line x1="9" y1="5" x2="9" y2="9" />
      <line x1="15" y1="10" x2="15" y2="14" />
      <line x1="8" y1="15" x2="8" y2="19" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v11" />
      <path d="M8 10l4 4 4-4" />
      <path d="M5 20h14" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
      <circle cx="12" cy="15.5" r="1.3" />
    </>
  ),
  puzzle: (
    <path d="M9.5 3.5a2 2 0 0 1 4 0 .8.8 0 0 0 1.1.7l.3-.1a1.8 1.8 0 0 1 2.4 2.4l-.1.3a.8.8 0 0 0 .7 1.1h.1a2 2 0 0 1 0 4 .8.8 0 0 0-.7 1.1l.1.3a1.8 1.8 0 0 1-2.4 2.4l-.3-.1a.8.8 0 0 0-1.1.7v.1a2 2 0 0 1-4 0v-.6a.9.9 0 0 0-1.4-.7 2 2 0 0 1-2.8-2.8.9.9 0 0 0-.7-1.4H4a2 2 0 0 1 0-4h.1a.9.9 0 0 0 .8-1.3 2 2 0 0 1 2.8-2.6.9.9 0 0 0 1.4-.7v-.6Z" />
  ),
  code: (
    <>
      <path d="M9 8l-4 4 4 4" />
      <path d="M15 8l4 4-4 4" />
    </>
  ),
  chevron: <path d="M6 9l6 6 6-6" />,
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  upload: (
    <>
      <path d="M12 16V5" />
      <path d="M8 9l4-4 4 4" />
      <path d="M5 20h14" />
    </>
  ),
  zap: (
    <path
      d="M13 2L4.5 13.5H11l-1 8.5L18.5 10.5H12l1-8.5Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  scan: (
    <>
      {/* viewfinder corners + scan line */}
      <path d="M4 8V6a2 2 0 0 1 2-2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M20 16v2a2 2 0 0 1-2 2h-2" />
      <path d="M8 20H6a2 2 0 0 1-2-2v-2" />
      <line x1="7" y1="12" x2="17" y2="12" />
    </>
  ),
  pen: (
    <>
      <path d="M16.5 4.5l3 3L8 19l-4 1 1-4 11.5-11.5Z" />
      <path d="M14.5 6.5l3 3" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  accessibility: (
    <>
      <circle cx="12" cy="4.5" r="1.6" />
      <path d="M5 8.5c2.2 1 4.5 1.5 7 1.5s4.8-.5 7-1.5" />
      <path d="M12 10v5" />
      <path d="M9 21l3-6 3 6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </>
  ),
  github: (
    <path
      d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  heart: (
    <path d="M12 20.3l-1.45-1.32C5.4 14.36 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.86-8.55 11.54L12 20.3Z" />
  ),
  // ── Provider marks (monochrome silhouettes in currentColor) ──
  gemini: (
    <path
      d="M12 2c.5 5.25 4.75 9.5 10 10-5.25.5-9.5 4.75-10 10-.5-5.25-4.75-9.5-10-10 5.25-.5 9.5-4.75 10-10Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  groq: (
    <>
      {/* outlined ring + tail (no background-dependent fill) */}
      <circle cx="12" cy="11" r="6.5" />
      <path d="M14.5 13.5l2.5 4" />
    </>
  ),
  nvidia: (
    <path
      d="M3 9.5c2.8-1.8 6-2 8.4-.6 1.9 1.1 2.6 3.3 1.4 5.1-.9 1.3-2.6 1.7-4 1V13c.9.4 1.9.2 2.4-.6.5-.9.1-2-1-2.6-1.8-1-4.6-.7-7.2.9V9.5ZM21 14.5c-2.8 1.8-6 2-8.4.6V13c.9.4 1.9.2 2.4-.6"
      fill="none"
    />
  ),
  openai: (
    <path
      d="M12 3.2 7 6v5l5 2.8L17 11V6l-5-2.8Zm0 0v5m5 0-5 2.8M7 11l5 2.8m0 0v5m0-5L7 11m10 0-5 2.8"
    />
  ),
  claude: (
    <path
      d="M5.5 18 10 6h2.3l4.5 12h-2.4l-1-2.7H8.9l-1 2.7H5.5Zm4.1-4.7h3.4L11.3 8.4 9.6 13.3Z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

export default function Icon({ name, size = 20, strokeWidth = 1.8, title, className = '' }) {
  const content = paths[name];
  if (!content) return null;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {content}
    </svg>
  );
}
