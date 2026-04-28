import { useMemo } from 'react';
import { getExperimentMetricsSnapshot, getVariantConfig } from '../utils/experiments';

const ExperimentInsights = () => {
  const showDebug =
    typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('ab') === '1';
  const variant = getVariantConfig().variant;
  const metrics = useMemo(() => getExperimentMetricsSnapshot(), []);

  if (!showDebug) return null;

  const totalCall = Object.entries(metrics)
    .filter(([key]) => key.includes('call_click'))
    .reduce((acc, [, val]) => acc + Number(val), 0);
  const totalEmail = Object.entries(metrics)
    .filter(([key]) => key.includes('email_click'))
    .reduce((acc, [, val]) => acc + Number(val), 0);

  return (
    <div className="ab-insights">
      <h4>A/B CTA Insights</h4>
      <p>Assigned variant: <strong>{variant}</strong></p>
      <p>Call clicks: <strong>{totalCall}</strong></p>
      <p>Email clicks: <strong>{totalEmail}</strong></p>
      <p className="ab-hint">Add <code>?ab=1</code> to URL to view this panel.</p>
    </div>
  );
};

export default ExperimentInsights;
