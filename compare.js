// compare.js
const before = require('./baseline.json');
const after  = require('./after.json');

const metrics = [
  'first-contentful-paint',
  'largest-contentful-paint',
  'total-blocking-time',
  'cumulative-layout-shift'
];

console.log('Metric,Baseline,After,Delta');
metrics.forEach(m => {
  const b = before.audits[m].numericValue;
  const a = after.audits[m].numericValue;
  console.log(`${m},${b},${a},${(a - b).toFixed(2)}`);
});

// performance score (0–100)
const bp = before.categories.performance.score * 100;
const ap = after.categories.performance.score * 100;
console.log(`performance.score,${bp.toFixed(0)},${ap.toFixed(0)},${(ap - bp).toFixed(1)}`);

// at the end of compare.js
const rows = metrics.map(m => {
  const b = before.audits[m].numericValue;
  const a = after.audits[m].numericValue;
  return { metric: m, delta: a - b };
});
// find the min delta (most negative) for timings, and max for scores:
const best = rows.reduce((prev, cur) =>
  Math.abs(cur.delta) > Math.abs(prev.delta) ? cur : prev
);
console.log(`\n🏆 Biggest change: ${best.metric} (Δ = ${best.delta.toFixed(2)})`);