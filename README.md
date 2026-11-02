# CreditLens — Complete Source

Credit report analysis, bank statement extraction, payment channel summaries, average daily closing balances, a live EMI calculator, repayment schedules, five multicolor themes, and the CreditLens logo.

## Run locally or in GitHub Codespaces

1. Extract this ZIP and open the `CreditLens-Complete-Source` folder in VS Code or upload its contents to your GitHub repository.
2. Install Node.js 20 or newer.
3. Run `npm start` in the project folder. No dependency installation is required.
4. Open `http://localhost:3000`. In Codespaces, open forwarded port 3000.

Run `npm test` to check the bank parser, balance/channel analytics and loan calculations. Set `PORT` to use another port.

Alternative with Python: `python3 -m http.server 3000 --directory dist`.
Do not open `index.html` directly: ES modules, PDF workers and OCR need an HTTP server.

## Included

- `dist/index.html`, `style.css`, `app.js`: complete application and UI.
- `dist/credit.js`: report extraction and normalization.
- `dist/bank.js`, `bank-analytics.js`: statement parsing, review, channels and average balances.
- `dist/loan.js`: EMI and extra-payment calculations.
- `dist/pdf.mjs`, `pdf.worker.mjs`: bundled PDF processing.
- `dist/ocr/`: bundled English OCR engine, worker and trained data.
- `dist/assets/creditlens-logo.png`: transparent logo used in the sidebar, footer and favicon.
- `tests/`: automated format and arithmetic tests.
- `PROJECT-NOTES.md`: implementation details and limitations.

## Deployment and privacy

Deploy `dist` to a static web host. No API keys, database or backend services are required. Reports and extracted customer records are processed in browser session memory; only appearance preferences are stored locally. OCR assets are bundled. Google Fonts is optional, with system-font fallbacks.

This export does not include private-access controls supplied by the original hosting platform. Configure access controls at your chosen host before sharing confidential documents. The bundled server is for local development and Codespaces.

## Extraction limits

Validated credit-report layouts include the supplied CIBIL, TransUnion, Experian and Equifax samples. New layouts and poor scans need source review. Bank parsing is format-based, not certified for every bank. Uncertain transactions require review and are excluded from totals. Average balances depend on complete extraction and selected statement dates. EMI excludes fees, taxes, insurance and lender rounding.

Private uploaded reports, extracted customer data, Git history, hosting identifiers and credentials are excluded.
