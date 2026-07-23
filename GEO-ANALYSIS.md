# GEO / AI Search Readiness Report — EarthOne Accounting
**Date:** 11 June 2026  
**Site:** https://earthoneaccounting.com  
**Auditor:** Claude Code (SEO-GEO skill)

---

## GEO Readiness Score: 68/100

| Category | Score | Weight | Notes |
|---|---|---|---|
| Citability (passage quality) | 72/100 | 25% | Good facts, pricing specifics; needs more 134–167-word standalone blocks |
| Structural Readability | 74/100 | 20% | Clean headings; FAQ schema on 5 pages ✓ |
| Multi-Modal Content | 45/100 | 15% | Images present; no video, no original charts/infographics |
| Authority & Brand Signals | 55/100 | 20% | Person schema now added; no Wikipedia/Wikidata entry |
| Technical Accessibility | 82/100 | 20% | SSR HTML ✓; AI crawlers now allowed ✓; llms.txt ✓ |

---

## Platform Breakdown

| Platform | Estimated Visibility | Key Gap |
|---|---|---|
| Google AI Overviews | Medium | Needs top-5 rankings first; content structure is good |
| ChatGPT Web Search | Low–Medium | No Wikipedia entity; no Reddit presence |
| Perplexity | Low | No Reddit/forum mentions; no 3rd-party citations |
| Bing Copilot | Medium | Bing indexation unknown; IndexNow not implemented |

---

## Changes Made in This Session

### 1. AI Crawler Access — FIXED ✅
**File:** `robots.txt`

Added explicit `Allow` directives for:
- `GPTBot` (ChatGPT web search)
- `OAI-SearchBot` (OpenAI search)
- `ChatGPT-User` (ChatGPT browsing)
- `ClaudeBot` (Claude web features)
- `PerplexityBot` (Perplexity AI)
- `anthropic-ai` (Anthropic)

Blocked training scrapers: `CCBot`, `Bytespider`.

Previously robots.txt had no AI crawler rules, leaving visibility to defaults.

---

### 2. Organization sameAs — FIXED ✅
**File:** `index.html` (homepage schema)

Added LinkedIn URL to `sameAs`:
```json
"sameAs": ["https://www.linkedin.com/company/earthone-global"]
```
This links the Organization entity to a known external platform, improving entity resolution in AI knowledge graphs.

---

### 3. Person Schema — FIXED ✅
**Files:** `index.html`, `about/index.html`

Added `Person` schema for **Ketul Patel** (Founder) with:
- `@id`: `https://earthoneaccounting.com/#ketul-patel`
- `jobTitle`, `worksFor`, `sameAs` (LinkedIn)
- `knowsAbout` array (about page only) listing expertise areas
- `description` with credentials

This is the single highest-impact entity signal for AI citation — named experts with credentials are cited 3× more often than anonymous/organisation-only authorship.

---

### 4. Blog Article Author Fix — FIXED ✅
**Files:** All 4 blog posts

- 3 posts: changed inline `Person` objects to `@id` references pointing to the canonical entity
- 1 post (AI article): fixed `author` type from `Organization` to correct `Person @id`

All articles now form a proper entity graph: Article → Person → Organization.

---

## Remaining Issues (Priority Order)

### HIGH PRIORITY

**H1 — No Wikipedia / Wikidata Entity**  
Brand mentions correlate 3× more with AI citations than backlinks. Neither EarthOne Accounting nor Ketul Patel has a Wikipedia or Wikidata entry.  
**Action:** Create a minimal Wikidata item for EarthOne Accounting LLP. Requires verifiability (Companies House registration, press mentions).

**H2 — No Third-Party Citations**  
ChatGPT cites Wikipedia (47.9%) and Reddit (11.3%). Perplexity cites Reddit heavily (46.7%). EarthOne has no presence in either.  
**Action:** Encourage authentic participation in r/UKAccounting, r/smallbusiness UK threads. One genuine helpful reply per week builds citation surface over months.

**H3 — Pricing page missing `@id` link to Organization**  
The `FAQPage` on `/pricing/` references the organization but doesn't use the canonical `@id`. Minor but tightens the graph.

---

### MEDIUM PRIORITY

**M1 — No `og:site_name` on AI blog post**  
`/blog/future-of-ai-in-accounting-uk-firms/` is missing `og:site_name` and `twitter:title`. Add both to match the other three posts.

**M2 — Passage-Level Citability**  
Optimal AI citation block: **134–167 words**, self-contained, direct answer in first sentence.  
The homepage "Why EarthOne" section has 5 numbered items — each is ~50 words. Expand each to 140–160 words for standalone citability.

Example rewrite for item 01:
> *"EarthOne Accounting LLP employs qualified Indian Chartered Accountants — holders of the ICAI qualification — on every client file. Indian CA is the equivalent of UK ACA or ACCA and is widely regarded as one of the most rigorous accounting qualifications in the world. EarthOne does not assign trainees, part-qualified staff, or bookkeepers to work that requires a CA. Every file that leaves the team has been prepared and reviewed by someone holding a full CA qualification. This matters because UK firms outsourcing to offshore providers often discover — after the fact — that work was handled by junior staff with no formal qualification. EarthOne's policy is that this does not happen."*

**M3 — No Video Content**  
Content with video sees 156% higher AI selection rates. A short (2–3 min) explainer on "How offshore accounting outsourcing works for UK firms" embedded on the homepage and `/services/` would materially improve multi-modal score.

**M4 — IndexNow not implemented**  
Bing Copilot draws from the Bing index. Submit pages via IndexNow API on publish/update to ensure fast Bing crawl. Free to implement.

---

### LOW PRIORITY

**L1 — `llms.txt` blog post links point to posts that exist** ✓ — but the file doesn't mention the for-firms page by name. Add it.

**L2 — `sitemap.html` (HTML sitemap)**  
Exists but may not be linked in the footer in a crawlable way. Confirm it is accessible and linked.

**L3 — Author LinkedIn URL**  
The Person schema uses `https://www.linkedin.com/in/ketulpatel` — verify this is the correct LinkedIn slug for Ketul Patel and update if different.

---

## Schema Inventory (Post-Session)

| Page | Schema Types |
|---|---|
| `/` | Organization, WebSite, WebPage, **Person** (new) |
| `/about/` | **@graph: AboutPage + Person** (new) |
| `/services/` | WebPage, Service, OfferCatalog |
| `/pricing/` | WebPage, FAQPage |
| `/for-firms/` | (check — may need FAQPage) |
| `/blog/*` | Article (with Person @id), FAQPage |

---

## Quick-Win Checklist

- [x] AI crawlers allowed in robots.txt
- [x] Organization `sameAs` → LinkedIn
- [x] Person schema for founder (homepage + about)
- [x] Blog articles reference canonical Person entity
- [x] `llms.txt` present and structured
- [x] `sitemap.xml` includes all pages
- [x] IndexNow submission for Bing (implemented 2026-07-21, see below)
- [ ] Wikipedia / Wikidata entity for brand
- [ ] Reddit presence (r/UKAccounting)
- [ ] 134–167 word citability blocks on homepage
- [ ] Video content (homepage / services)
- [ ] Verify Ketul Patel LinkedIn URL in schema

---

## Session 2 — 21 July 2026 (full-site SEO/GEO pass)

**Critical, unrelated to GEO:** discovered production had diverged from this git repo — a live blog post existed on the site but not in this checkout, and would have been deleted on the next deploy if pushed over. Reconciled before making any other change. Also discovered mid-session: two more posts were published directly to `main` by the site owner from a separate session while this work was in progress (`mtd-income-tax-quarterly-workload-uk-accounting-firms`, `howden-2026-pi-claims-risk-uk-accounting-firms`) — merged both cleanly and applied the same fixes below to them.

**Found and NOT fixable from this repo:** Cloudflare's edge-level bot management is blocking `GPTBot`, `ClaudeBot`, `Google-Extended`, and `Applebot-Extended` regardless of what `robots.txt` says (confirmed via live fetch — origin robots.txt correctly allows them, but a `# BEGIN Cloudflare Managed content` block at the edge overrides it). This silently undoes the AI-crawler-allowlist work from Session 1. Needs a change in Cloudflare dashboard → Security/Bots (AI Crawl Control), which this session has no access to.

Fixed this session:
- Sitemap/llms.txt were stale (missing 6+ of 17 posts at different points during the session as new posts kept landing) — kept in sync throughout, ends at all 17
- `/privacy/` indexing contradiction (Disallow'd + sitemapped + no canonical) resolved: now crawlable, canonical, WebPage-schema-tagged
- `BreadcrumbList` added to all 17 blog posts; invalid `SearchAction` removed from homepage; `Organization` `about`/`publisher` linking standardized across pricing/for-firms/services/contact; `CollectionPage`+`ItemList` added to blog index (had zero schema)
- `/blog/read/?slug=` (JS-only duplicate of every static post, fully crawlable with no canonical) — noindex'd
- Broken `og:image` (pointed to a file that doesn't exist) fixed sitewide — stopgap to an existing logo; a proper 1200×630 social image is still owed (no image-gen tool was authorized this session)
- Image payload: ~11MB → ~1.7MB (PNG→JPEG on 5 hero/content photos; fixed a CMYK-colorspace JPEG that was silently bloated and a risk for incorrect rendering; resized two oversized logo files)
- `apple-touch-icon`, `loading="lazy"`, `fetchpriority="high"` added where missing
- Related Articles module added to 12 of 17 posts (5 already had one) — closes the internal-linking gap the content audit flagged as the top content issue
- IndexNow implemented: key file + submission script, first bulk submission returned HTTP 202

Still open (needs the site owner, not code):
- Cloudflare AI-bot block (above)
- Wikidata entity, Reddit presence — unchanged from Session 1
- Real case studies/client outcomes — content audit's biggest E-E-A-T gap; nothing to add without real client detail, can't be fabricated
- Outbound citation links to the named reports (TaxCalc, CIPD, Silverfin, ACCA, ICAEW etc.) — needs verified real URLs, not done this session
- Proper OG image — needs an image-gen tool authorized, or manual upload
- Google Search Console / Bing Webmaster Tools — needs account access
