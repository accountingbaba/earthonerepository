---
title: How to Add a New Blog Post to EarthOne
date: 2026-06-12
author: EarthOne Team
tags: Guide, Content
category: outsourcing
description: A quick reference guide for adding new articles to the EarthOne website directly from GitHub — no admin panel, no developer needed.
readTime: 2 min read
---

## Adding a New Blog Post

Every new article on EarthOne is a single markdown file pushed to GitHub. No admin panel. No developer required.

**Step 1: Go to the content folder**

In the GitHub repository, navigate to `content/blogs/`.

**Step 2: Create a new file**

Click **Add file → Create new file**. Name it using the post slug, for example:

`uk-vat-guide-for-accounting-firms.md`

**Step 3: Add front matter**

Every post must start with this block at the top:

```
---
title: Your Post Title Here
date: 2026-06-15
author: Your Name
tags: VAT, UK Tax, Guides
category: outsourcing
description: One or two sentences describing the post.
readTime: 6 min read
image: https://images.unsplash.com/photo-xxxxx?auto=format&fit=crop&w=800&q=80
---
```

**Step 4: Write your content**

After the closing `---`, write your article using standard markdown:

- `## Heading` for sections
- `**bold**` for emphasis
- `- item` for bullet lists
- `> quote` for pull quotes

**Step 5: Commit**

Scroll down, add a commit message like `content: add VAT guide post`, and click **Commit new file**.

The article will appear on the blog within 30 seconds automatically.

---

## Available Categories

Use one of these values in the `category` field so the filter buttons work correctly:

- `outsourcing`
- `for-firms`
- `technology`
- `bookkeeping`
- `payroll`

## Deleting a Post

Go to the file in GitHub, click the trash icon, and commit. The post disappears from the site within 30 seconds.
