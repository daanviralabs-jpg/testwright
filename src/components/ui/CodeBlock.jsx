import './CodeBlock.css';

/**
 * CodeBlock — monospace snippet with faux token colouring.
 * Pass either:
 *   - `tokens`: array of [class, text] pairs for a single line, OR
 *   - `lines`:  array of token-arrays (multi-line), OR
 *   - `children`: raw string (no colouring).
 * Token classes: kw | str | fn | punct | comment | prop | num.
 * `caret` shows a blinking caret at the end.
 */
function renderTokens(tokens) {
  return tokens.map(([cls, text], i) => (
    <span key={i} className={`tok tok--${cls}`}>
      {text}
    </span>
  ));
}

export default function CodeBlock({ tokens, lines, children, caret = false, className = '' }) {
  return (
    <code className={`code-block ${className}`.trim()}>
      {lines
        ? lines.map((line, i) => (
            <span className="code-block__line" key={i}>
              {renderTokens(line)}
            </span>
          ))
        : tokens
        ? renderTokens(tokens)
        : children}
      {caret && <span className="code-block__caret" aria-hidden="true" />}
    </code>
  );
}
