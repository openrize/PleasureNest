const EXPERIMENT_KEY = 'pn_quote_cta_experiment_v1';
const METRICS_KEY = 'pn_quote_cta_metrics_v1';
const VARIANTS = ['A', 'B'];

function getStorage() {
  if (typeof window === 'undefined') return null;
  return window.localStorage;
}

export function getExperimentVariant() {
  const storage = getStorage();
  if (!storage) return 'A';

  const existing = storage.getItem(EXPERIMENT_KEY);
  if (existing && VARIANTS.includes(existing)) return existing;

  const selected = Math.random() < 0.5 ? 'A' : 'B';
  storage.setItem(EXPERIMENT_KEY, selected);
  return selected;
}

function readMetrics() {
  const storage = getStorage();
  if (!storage) return {};
  try {
    return JSON.parse(storage.getItem(METRICS_KEY) || '{}');
  } catch {
    return {};
  }
}

function writeMetrics(metrics) {
  const storage = getStorage();
  if (!storage) return;
  storage.setItem(METRICS_KEY, JSON.stringify(metrics));
}

export function trackExperimentClick(action, location) {
  const variant = getExperimentVariant();
  const metrics = readMetrics();
  const key = `${variant}:${location}:${action}`;
  metrics[key] = (metrics[key] || 0) + 1;
  writeMetrics(metrics);
}

export function getExperimentMetricsSnapshot() {
  return readMetrics();
}

export function getVariantConfig() {
  const variant = getExperimentVariant();

  if (variant === 'B') {
    return {
      variant,
      headline: 'Fast Quote in Under 10 Minutes',
      subline: 'Priority response for in-stock products.',
      callCta: 'Get Instant Quote',
      emailCta: 'Send Product List',
      order: ['email', 'call'],
    };
  }

  return {
    variant: 'A',
    headline: 'Talk to Sales for Best Price',
    subline: 'Private assistance and bulk pricing support.',
    callCta: 'Call for Price',
    emailCta: 'Email Quote',
    order: ['call', 'email'],
  };
}
