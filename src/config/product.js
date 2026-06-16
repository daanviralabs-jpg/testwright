/**
 * product.js — SINGLE SOURCE OF TRUTH
 * ------------------------------------------------------------------
 * Every piece of copy, every link, and the whole colour palette lives here.
 * A non-technical editor can rebrand the entire site from this one file.
 *
 * Links use ACTION KEYWORDS ("chrome" | "github" | "donate" | "#anchor").
 * src/lib/actions.js resolves those keywords into real hrefs. Leave a URL
 * empty ('') to auto-hide the related button/link in the UI.
 */

/* ──────────────────────────────────────────────────────────────
 * COLOURS — pushed onto :root as CSS variables by App.jsx on mount.
 * Keep the token NAMES the same when rebranding; just swap values:
 * one deep bg, one bright accent + a darker variant + a glow,
 * off-white headings, muted body.
 * ────────────────────────────────────────────────────────────── */
export const colors = {
  bg: '#081425', // deep slate page background
  'bg-elev': '#0e1d33', // elevated background (footer, alt sections)
  surface: '#102541', // card / surface background
  line: '#1c3553', // hairline borders
  accent: '#3b82f6', // action blue
  'accent-deep': '#2f73e6', // darker accent for gradients
  'accent-glow': 'rgba(59,130,246,0.3)', // soft glow
  heading: '#f8fafc', // off-white headings
  body: '#8da3bf', // muted slate body text
  muted: '#5f74a0', // even more muted (labels, captions)
  success: '#3fb950', // checkmarks, positive states
};

/* ── Core brand / product facts ───────────────────────────────── */
export const product = {
  name: 'Testwright Pro',
  shortName: 'Testwright',
  badge: 'PRO',
  category: 'Chrome side-panel extension for QA engineers & SDETs',
  tagline: 'From requirement to runnable test.',
  oneLiner:
    'Generate structured QA test cases and extract Playwright locators — right inside your browser, powered by your own AI key.',

  // Action keyword links — resolved by src/lib/actions.js.
  // Leave empty to hide the associated UI element.
  links: {
    chrome: 'https://chrome.google.com/webstore', // PLACEHOLDER — Chrome Web Store URL
    github: '', // empty → GitHub icon/link auto-hidden everywhere (set a repo URL to re-enable)
    donate: 'https://www.paypal.com/donate/?hosted_button_id=QJVN6NHUE5T88', // PayPal donate
    demo: '#how-it-works', // anchor to demo / how-it-works
  },

  ctas: {
    primary: 'Add to Chrome — Free',
    secondary: 'See it in action',
  },

  trustLine: '100% client-side · Your API key, your data · No sign-up.',
  copyright: `© ${new Date().getFullYear()} Testwright. All rights reserved.`,
};

/* ── Navbar links (center anchors) ────────────────────────────── */
export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

/* ── Hero ─────────────────────────────────────────────────────── */
export const hero = {
  eyebrow: 'Chrome Extension for QA Engineers',
  title: 'From requirement to runnable test.',
  subtitle:
    'Generate structured QA test cases and extract Playwright locators — right inside your browser, powered by your own AI key.',
  primaryCta: { label: 'Add to Chrome — Free', action: 'chrome' },
  secondaryCta: { label: 'See it in action', action: 'demo' },
  trustLine: '100% client-side · Your API key, your data · No sign-up.',
};

/* ── Supported AI providers (5) ───────────────────────────────── */
export const providers = {
  label: 'Works with',
  items: [
    { name: 'Gemini', icon: 'gemini' },
    { name: 'Groq', icon: 'groq' },
    { name: 'NVIDIA NIM', icon: 'nvidia' },
    { name: 'OpenAI', icon: 'openai' },
    { name: 'Claude', icon: 'claude' },
  ],
};

/* ── Features bento grid (8) ──────────────────────────────────── */
/* `span` controls grid footprint on the 3-column bento:
 * 'wide' (2 cols) or 'tall' (2 rows). Cards are ordered so they
 * tile cleanly with no gaps (see Features.css). */
export const features = {
  eyebrow: 'Features',
  title: 'Everything you need to ship tests faster',
  subtitle:
    'Built for QA engineers and SDETs who live in the browser. No backend, no busywork.',
  items: [
    {
      icon: 'brain',
      title: 'AI Test-Case Generation',
      description:
        'Turn any requirement into structured test cases with steps, preconditions, and per-step expected results.',
      span: 'wide',
    },
    {
      icon: 'target',
      title: 'Playwright Locator Extractor',
      description:
        'Scan any live page for copy-paste locators: getByRole, getByLabel, getByTestId, #id, CSS, XPath.',
      code: "page.getByRole('button', { name: 'Submit' })",
      span: 'tall',
    },
    {
      icon: 'key',
      title: 'Bring Your Own Key',
      description:
        'Use Gemini, Groq, NVIDIA, OpenAI, or Claude. One active provider, your key, your control.',
    },
    {
      icon: 'sliders',
      title: 'Fine-Grained Control',
      description:
        'Choose count, steps per case, test categories (Functional, Smoke, Regression, Edge…), and toggle DB/log verification.',
    },
    {
      icon: 'download',
      title: 'Export Anywhere',
      description:
        'Azure DevOps CSV, TestLink XML, Gherkin .feature, JSON, Structured Table, Playwright .spec.ts.',
      span: 'wide',
    },
    {
      icon: 'check-square',
      title: 'Validation Tester',
      description:
        'Dry-run validation on every field, deep-probe with invalid values, and audit accessibility — without submitting.',
    },
    {
      icon: 'lock',
      title: 'Private by Design',
      description:
        'Fully client-side. No backend, no tracking — nothing leaves your browser.',
    },
    {
      icon: 'puzzle',
      title: 'Editable Output Templates',
      description:
        'Customize the format of generated test cases and exports with reusable templates.',
    },
  ],
};

/* ── How it works (3 steps) ───────────────────────────────────── */
export const howItWorks = {
  eyebrow: 'How it works',
  title: 'Three steps from idea to test',
  subtitle: 'No setup ceremony. Install, add a key, and you are generating.',
  steps: [
    {
      icon: 'key',
      title: 'Add your AI key',
      description: 'Pick a provider in API Settings and paste your key — it never leaves the browser.',
    },
    {
      icon: 'file',
      title: 'Describe or scan',
      description: 'Type a requirement, upload a doc, or scan any live page for locators.',
    },
    {
      icon: 'download',
      title: 'Generate & export',
      description: 'Get structured test cases or Playwright locators, then export in one click.',
    },
  ],
};

/* ── Locator / Selectors spotlight ────────────────────────────── */
export const locatorDemo = {
  eyebrow: 'Playwright Selectors',
  title: 'Stop hunting for selectors.',
  body:
    'Pick any element on the page, verify a locator live, and extract copy-paste selectors in every strategy Playwright supports — ranked best-first. No DevTools spelunking, no brittle XPath guesswork.',
  bullets: [
    'Pick an element on the page to target it instantly',
    'Verify any locator live — see match count, highlighted on page',
    'Extract in 9 strategies, export to a typed .spec.ts file',
  ],

  // ── Mock "Playwright Selectors" panel content ──
  heading: 'Playwright Selectors',
  pickLabel: 'Pick Element on Page',
  verify: {
    label: 'Verify a Locator',
    value: "page.getByRole('link', { name: '",
    testLabel: 'Test',
    result: '3 matches — first highlighted orange',
    hint: 'Paste a Playwright locator and press Enter. First match is highlighted orange, others blue.',
  },
  extractDivider: 'Extract from Page',
  strategies: {
    label: 'Locator Strategies',
    active: ['getByRole', 'getByText', 'getByLabel', 'getByPlaceholder', 'getByTestId'],
    items: [
      'getByRole',
      'getByText',
      'getByLabel',
      'getByPlaceholder',
      'getByAltText',
      'getByTitle',
      'getByTestId',
      '#id',
      'CSS',
      'XPath',
    ],
  },
  extractLabel: 'Extract Locators',
  extractCount: '33 locators',

  // Export editor (kept for the strategy/result list)
  filename: 'login.spec.ts',
  exportLabel: 'Export .spec.ts',
  locators: [
    { tag: 'getByRole', code: "page.getByRole('button', { name: 'Submit' })" },
    { tag: 'getByLabel', code: "page.getByLabel('Email address')" },
    { tag: 'getByTestId', code: "page.getByTestId('login-form')" },
    { tag: '#id', code: "page.locator('#password')" },
    { tag: 'CSS', code: "page.locator('nav.primary > a.cta')" },
  ],
};

/* ── Builder spotlight ────────────────────────────────────────── */
export const builderDemo = {
  eyebrow: 'Test-Case Builder',
  title: 'Describe it once. Get a full test suite.',
  body:
    'Drop in a plain-text requirement and the Builder generates structured test cases — complete with preconditions, numbered steps, and per-step expected results. Dial in exactly what you need before you generate.',
  bullets: [
    'Choose case count, steps per case, and output language',
    'Pick categories: Functional, Smoke, Regression, Edge & more',
    'Toggle database and log verification per run',
  ],
  // Faux Builder panel content (mirrors the extension side-panel).
  placeholder: 'Describe the feature or requirement you want to test…',
  example:
    'Example: A login form with email and password fields. Email must be valid format. Password must be at least 8 characters.',
  controls: [
    { label: 'Count', value: '10 cases' },
    { label: 'Steps / Case', value: 'Auto' },
  ],
  language: { label: 'Output Language', value: 'English' },
  verification: { label: 'Include Verification', options: ['Verify Database', 'Verify Logs'] },
  categories: {
    label: 'Test Categories',
    active: 'Functional',
    items: [
      'Functional',
      'Smoke',
      'Integration',
      'Regression',
      'Abnormal',
      'Financial',
      'Edge Cases',
      'UI/UX',
      'Performance',
    ],
  },
  generateLabel: 'Generate test cases',
};

/* ── API Settings spotlight ───────────────────────────────────── */
export const apiSettingsDemo = {
  eyebrow: 'API Settings',
  title: 'Your key, your model, your machine.',
  body:
    'Connect a cloud provider or point Testwright at a local model — Ollama and other OpenAI-compatible runtimes work out of the box. Test the connection, watch the live activity log, and keep every request on your own machine.',
  bullets: [
    'Cloud providers or local models (Ollama & OpenAI-compatible)',
    'One-click Test Connection with a live activity log',
    'API keys stay in your browser — optional for local servers',
  ],
  // Faux API Settings panel content (mirrors the extension side-panel).
  tabs: [
    { label: 'Cloud Provider', icon: 'key', active: false },
    { label: 'Local Model', icon: 'sliders', active: true },
  ],
  fields: [
    { label: 'Runtime', value: 'Ollama', select: true },
    { label: 'Server URL', value: 'http://localhost:11434/v1/chat/completions', muted: true },
    { label: 'Model Name', value: 'qwen3.5:0.8b' },
    { label: 'API Key', optional: 'optional', value: 'Usually not needed for local servers', muted: true },
  ],
  hint: 'Run ollama serve, then ollama pull llama3.1. Leave Server URL blank to use the default.',
  testLabel: 'Test Connection',
  logLabel: 'Activity Log',
  clearLabel: 'Clear',
  log: [
    {
      kind: 'Test',
      time: '23:54:31',
      took: '10.1s',
      meta: 'Ollama · qwen3.5:0.8b',
      detail: 'Model replied: "OK"',
      link: 'View raw response',
    },
    {
      kind: 'Generate',
      time: '23:53:19',
      took: '2.7s',
      meta: 'Groq · llama-3.3-70b-versatile',
      detail: '5 cases',
    },
  ],
};

/* ── Tester spotlight ─────────────────────────────────────────── */
export const testerDemo = {
  eyebrow: 'Validation Tester',
  title: 'Find the validations that don’t fire.',
  body:
    'Checks the validation rules on every form field of the current page — required, type, pattern, length and range — and dry-runs each field’s validity. No data is ever submitted.',

  // Three tester actions shown as buttons in the panel.
  actions: [
    {
      icon: 'check-square',
      label: 'Check Form Validation',
      variant: 'primary',
      summary:
        'Dry-runs required, type, pattern, length and range rules on every field. Nothing is submitted.',
    },
    {
      icon: 'pen',
      label: 'Deep Probe (submit test values)',
      variant: 'outline',
      summary:
        'Types invalid & boundary values into each field to see which validations actually fire, then restores your original values. Interacts with the live form — never clicks submit.',
    },
    {
      icon: 'accessibility',
      label: 'Accessibility Check',
      variant: 'secondary',
      summary:
        'Read-only audit: missing labels, placeholder-as-label, missing alt text, empty buttons/links, duplicate ids, broken ARIA references, focus-order issues and more.',
    },
  ],

  // Faux Tester panel content (mirrors the extension side-panel).
  intro:
    'Checks the validation rules on every form field of the current page — required, type, pattern, length and range — and dry-runs each field’s validity. No data is submitted.',
  result: {
    title: 'Deep probe: 3 fields · 5 tests',
    detail: '4 caught · 1 NOT caught (possible bug)',
  },
  probed: '3 fields probed',
  copyLabel: 'Copy report',
  clearLabel: 'Clear',
  cards: [
    {
      field: 'Email Input',
      meta: 'input · email · email',
      badge: 'ALL CAUGHT',
      check: 'invalid email',
      value: "'notanemail'",
    },
    {
      field: 'Email Input',
      meta: 'input · email · required',
      badge: 'ALL CAUGHT',
      check: 'empty value',
      value: "''",
    },
  ],
};

/* ── Scan spotlight ───────────────────────────────────────────── */
export const scanDemo = {
  eyebrow: 'Scan & Test Data',
  title: 'Turn any live page into tests — and fill it instantly.',
  body:
    'Two one-click tools that work on any http/https page, right from the side panel.',

  // The panel's two distinct features.
  features: [
    {
      icon: 'search',
      name: 'Scan Page Now',
      summary:
        'Reads the current page and turns it into a requirement for the Builder, then jumps you there to generate test cases.',
      points: [
        'Page title, meta description & headings (h1–h3, up to 40)',
        'Form labels, input placeholders, buttons & submit actions',
        'Bundled into a summary and dropped into the requirement box',
      ],
      note: 'Works on http/https pages; browser & extension pages are blocked.',
    },
    {
      icon: 'pen',
      name: 'Fill Dummy Data',
      badge: 'new',
      summary:
        'Populates every form control with realistic, type-aware test data — without ever clicking submit.',
      points: [
        'Type-aware: email, tel, url, number/range (min/max/step), dates, color, select, radio & checkbox',
        'Smart hints — a “phone” field gets a phone; first/last name stay one consistent person; respects maxlength',
        'Framework-safe (React/Vue/Angular) · pierces open shadow DOM & same-origin iframes',
      ],
      note: '“Only empty fields” pill skips pre-filled controls.',
    },
  ],

  // ── Faux Scan panel content (mirrors the extension side-panel) ──
  heading: 'Scan the current page',
  subtitle: 'Detects forms, inputs, headings and requirements automatically',
  scanLabel: 'Scan Page Now',
  testDataDivider: 'Test Data',
  autoFillLabel: 'Auto-fill Forms',
  scopePill: 'Only empty fields',
  fillLabel: 'Fill Dummy Data',
  result: {
    summary: 'Filled 14 fields · 3 skipped',
    breakdown:
      '4× text · 1× email · 1× tel · 1× url · 1× number · 1× date · 1× select · 1× checkbox · 1× radio · 1× textarea · 1× color',
  },
  hint: 'Fills every input, textarea, dropdown & contenteditable on the current page with realistic, type-aware data — emails look like emails.',
};

/* ── Stats band (count-up) ────────────────────────────────────── */
export const stats = {
  items: [
    { value: 5, suffix: '', label: 'AI providers' },
    { value: 6, suffix: '', label: 'export formats' },
    { value: 9, suffix: '', label: 'locator strategies' },
    { value: 100, suffix: '%', label: 'client-side' },
  ],
};

/* ── Pricing ──────────────────────────────────────────────────────
 * Testwright is 100% free — every feature, forever. There is no paid
 * tier and no paywall. The second card is a donation, not an upsell:
 * it funds independent development for those who want to chip in.
 * ──────────────────────────────────────────────────────────────── */
export const pricing = {
  eyebrow: 'Pricing',
  title: 'Free forever. Donations welcome.',
  subtitle:
    'Every feature is free and runs in your browser with your own AI key — no subscriptions, no seats, no paywall. If it saves you time, a donation keeps it independent.',
  tiers: [
    {
      name: 'Testwright',
      price: '$0',
      cadence: 'free forever',
      description: 'The complete toolkit — every feature included, for everyone.',
      cta: { label: 'Add to Chrome — Free', action: 'chrome' },
      featured: false,
      features: [
        'AI test-case generation',
        'Bring your own AI key (5 providers)',
        'Playwright locator extractor',
        'All 6 export formats',
        'Editable output templates',
        'DOCX / TXT / MD document capture',
        'Fully client-side & private',
      ],
    },
    {
      name: 'Support the project',
      // donation card — pay-what-you-want, not a price tier
      price: 'Pay what you want',
      cadence: null,
      priceNote: 'one-time · optional',
      donate: true,
      icon: 'heart',
      description: 'Testwright is built and maintained independently. Your support keeps it free, ad-free, and improving.',
      badge: 'Buy me a coffee',
      cta: { label: 'Donate via PayPal', action: 'donate' },
      featured: true,
      features: [
        'Fund ongoing development',
        'Keep it free & ad-free for everyone',
        'Help ship new features faster',
        'Every bit is genuinely appreciated 💙',
      ],
    },
  ],
  // Fallback line shown only if no donate link is configured.
  footnote: 'No account, no card, no catch — Testwright is free to use today.',
};

/* ── FAQ (5) ──────────────────────────────────────────────────── */
export const faq = {
  eyebrow: 'FAQ',
  title: 'Questions, answered',
  items: [
    {
      q: 'Is my data private?',
      a: 'Yes. Testwright is 100% client-side. There is no backend and no tracking — your requirements, generated tests, and API key never leave your browser. Calls go directly from your machine to your chosen AI provider using your own key.',
    },
    {
      q: 'Which AI providers are supported?',
      a: 'Five: Google Gemini, Groq, NVIDIA NIM, OpenAI, and Anthropic Claude. You pick one active provider at a time and paste your own API key.',
    },
    {
      q: 'Do I need an account?',
      a: 'No sign-up, no login, no email. Install the extension, add your AI key in API Settings, and you are ready to generate.',
    },
    {
      q: "What's the difference between Free and Pro?",
      a: 'Free covers AI test-case generation with basic exports. Pro adds the Playwright locator extractor, all six export formats, editable output templates, and DOCX capture.',
    },
    {
      q: 'Does it work with my Playwright project?',
      a: 'Yes. Export locators and test scaffolding straight to a typed .spec.ts file, or use the structured exports (Gherkin, Azure DevOps CSV, TestLink XML, JSON) to drop into your existing pipeline.',
    },
  ],
};

/* ── Final CTA band ───────────────────────────────────────────── */
export const ctaBand = {
  title: 'Ship tests faster. Install Testwright Pro.',
  cta: { label: 'Add to Chrome — Free', action: 'chrome' },
  microcopy: 'Free · No sign-up · Private',
};

/* ── Footer ───────────────────────────────────────────────────── */
export const footer = {
  blurb:
    'A Chrome side-panel extension that turns requirements into structured test cases and extracts Playwright locators — all client-side, powered by your own AI key.',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Add to Chrome', action: 'chrome' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Support the project', action: 'donate' },
        { label: 'Contact', href: 'mailto:vaseeprasanna@gmail.com' },
      ],
    },
    {
      title: 'Legal',
      links: [{ label: 'Privacy Policy', href: '/privacy-policy.html' }],
    },
  ],
  madeFor: 'Made for QA engineers',
};
