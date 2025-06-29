**Performance Comparison Workflow**

Use this workflow to measure and compare performance metrics before and after optimizations. Include the following steps in your README.

---

## 1. Create the Baseline ("base case")

1. Start your Next.js server (if needed):

   ```bash
   npm run dev
   ```
2. Run Lighthouse CLI against your page and save JSON output:

   ```bash
   npx lighthouse http://localhost:3000/your-page \
     --chrome-flags="--headless" \
     --emulated-form-factor=mobile \
     --throttling-method=devtools \
     --output=json \
     --output-path=./reports/baseline.json
   ```
3. Commit or record `baseline.json` for future reference.

## 2. Apply Your Optimization

Make your code changes—e.g., switch to `next/dynamic`, replace `<img>` with `<Image>`, reserve layout space, purge CSS, etc.

> 🔧 **Tip:** Work in a feature branch so you can isolate your changes and measurement.

## 3. Generate the Post-Change Metrics

Run the exact same Lighthouse command to capture the “after” state:

```bash
npx lighthouse http://localhost:3000/your-page \
  --chrome-flags="--headless" \
  --emulated-form-factor=mobile \
  --throttling-method=devtools \
  --output=json \
  --output-path=./reports/after.json
```

## 4. Compare with `compare.js`

Add a tiny Node script (`compare.js`) in your repo root:

```js
// compare.js
const before = require('./reports/baseline.json');
const after  = require('./reports/after.json');

const metrics = [
  'first-contentful-paint',
  'largest-contentful-paint',
  'total-blocking-time',
  'cumulative-layout-shift'
];

console.log('Metric, Baseline, After, Δ');
metrics.forEach(m => {
  const b = before.audits[m].numericValue;
  const a = after.audits[m].numericValue;
  console.log(`${m}, ${b.toFixed(0)}, ${a.toFixed(0)}, ${(a - b).toFixed(0)}`);
});

// Perf score (0–100)
const bp = before.categories.performance.score * 100;
const ap = after.categories.performance.score * 100;
console.log(`performance.score, ${bp.toFixed(0)}, ${ap.toFixed(0)}, ${(ap - bp).toFixed(0)}`);
```

Then in your terminal:

```bash
node compare.js
```

You’ll see a table of **before**, **after**, and **delta** for each key metric.

---

### Tips & Best Practices

* **Consistency**: Always run with the same URL, device emulation, throttling, and CLI flags.
* **Version Control**: Snapshot both JSON files in Git so you can review historical improvements.
* **Automation**: Consider integrating this into CI (GitHub Actions) with Lighthouse CI or a custom script to prevent regressions.
