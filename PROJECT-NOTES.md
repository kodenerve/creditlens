# CreditLens — Banking Intelligence

Browser-local credit report and bank statement analysis, EMI calculation and repayment schedules. Serve `dist/` over HTTP; no build step or backend keys are required. The Site is owner-private.

## Credit reports

Upload multiple PDF, TXT, PNG, JPEG or WebP reports. All PDF pages are processed sequentially without a fixed page-count limit. PDF passwords are used locally. PDF.js extracts positioned text; English Tesseract OCR runs locally for image-only pages or when forced. Document records and source files are held in session memory, cleared on reload or with Clear.

Includes borrower details with masked PAN/contact identifiers, multiple labelled scores, account details, account balances and overdue amounts, payment histories/DPD, inquiries, account-level flags, source-page links and CSV exports. High credit is not substituted for a missing credit limit. Standard asset classification is distinguished from zero DPD. Unknown and incomplete layouts produce review warnings.

Validated against the four user-supplied examples: a 96-page CIBIL consumer report (38 accounts), 52-page Experian report (72 accounts), 13-page TransUnion CIR (30 accounts, two scores), and 7-page Equifax report (4 accounts). These private source documents and extracted customer data are not included in this repository. OCR was verified separately with an illustrative scanned report image. New bureau layouts and poor scans require manual verification; universal extraction accuracy is not claimed.

## Banking and planning

Bank statement import supports PDF, scanned PDF, image, CSV, TSV and TXT. The format-based parser handles common date/header variations, empty debit/credit columns, amount-plus-CR/DR layouts, multiline narrations and ascending/descending running balances. CSV column mapping and manual transaction review provide fallbacks for unfamiliar layouts. Unresolved or conflicting rows are excluded from totals. PDF and OCR extraction remain layout- and quality-dependent; universal bank compatibility is not claimed. Run `node tests/bank.test.mjs` for format regression tests. Salary and bounce flags are narration keyword matches, not confirmed events. EMI uses monthly reducing balance, handles zero interest and month-end due dates, and exports the repayment schedule. Fees, taxes and insurance are excluded.

## Third-party components

PDF.js is licensed under Apache 2.0. Tesseract.js, Tesseract.js Core and the English trained data are Apache 2.0 components. Notices and licences are bundled with the static assets. Google Fonts supplies optional typography; system fonts are a fallback.

## Payment channels and average balances

Bank statement analysis includes distinct NEFT, IMPS, ACH, NACH, ECS and RTGS sections, each with its own counts, classified debit/credit totals, transaction list and CSV export. Matching uses narration tokens; ambiguous/missing labels fall under Other. NACH is not double-counted as ACH. Unresolved rows are excluded from monetary totals.

Average daily closing balance weights the final classified balance of each calendar day, carrying it forward over days without transactions. The default period is the first through last extracted transaction; users can set the actual statement period. Missing/unreviewed closing balances and unrecognized dates prevent a complete daily average. The simple mean of transaction-row balances is shown separately. Monthly results label the selected month portion, and daily balances can be exported. Calculations depend on complete source extraction and preserve negative/overdraft balances. Run `node tests/bank-analytics.test.mjs` for analytics tests.

## Live EMI and appearance

The EMI calculator has synchronized numeric inputs and sliders, example loan presets, an optional fixed extra monthly repayment, live principal/interest visuals, an inspectable balance curve and a live amortization schedule. Standard EMI uses monthly reducing balance; extra payments shorten the term and cap the final payment. Quotes exclude lender fees and rounding. Run `node tests/loan.test.mjs` for arithmetic and validation checks.

Appearance offers Prism, Burgundy Aurora, Ocean Bloom, Sunset Citrus and Forest Jewel palettes across all workspace sections, with light, dark and device-matched modes. Only appearance preferences are saved in localStorage; report contents remain in session memory.


## Brand assets

`dist/assets/creditlens-logo.png` is the transparent CreditLens brand mark: a burgundy lens-shaped C surrounding a teal growth chart with an amber arrow. It is used in the sidebar, footer and favicon. Generated with the built-in image tool; prompt direction: premium minimal flat fintech logo, circular lens C, rising three-bar chart, burgundy/teal/amber, no wording, transparent background.
