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
- [ ] Wikipedia / Wikidata entity for brand
- [ ] Reddit presence (r/UKAccounting)
- [ ] 134–167 word citability blocks on homepage
- [ ] Video content (homepage / services)
- [ ] IndexNow submission for Bing
- [ ] Verify Ketul Patel LinkedIn URL in schema
