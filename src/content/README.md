# Content Folder Structure

This project uses Astro Content Collections to manage blog posts and documentation in Markdown/MDX format.

## 📁 Folder Structure

```
src/content/
├── config.ts           # Content collection schemas
├── blog/              # Blog posts (MDX files)
│   └── digital-business-cards.mdx
└── docs/              # Documentation (MDX files)
    └── getting-started.mdx
```

## 📝 Writing Blog Posts

Create a new MDX file in `src/content/blog/` with the following frontmatter:

```mdx
---
title: "Your SEO-Optimized Blog Title"
description: "Compelling 150-160 character description with keywords"
date: "Jan 15, 2026"
readTime: "8 min read"
author: "Cardrender Team"
category: "Product"  # or "Features", "Updates", "Guides"
keywords:
  - primary keyword
  - secondary keyword
  - long-tail keyword
published: true  # Set to false to hide from blog list
---

Your content here using **Markdown** or MDX...
```

### Blog Post Guidelines

- **Title**: 50-60 characters, include primary keyword
- **Description**: 150-160 characters, compelling and keyword-rich
- **Keywords**: 5-10 relevant SEO keywords
- **Category**: Product, Features, Updates, or Guides
- **Content**: 800-1500+ words for comprehensive coverage
- Use headings (##, ###) to structure content
- Include lists, blockquotes, and emphasis for readability
- Add internal links to docs and other pages

### Example Blog Post

```mdx
---
title: "How to Calculate ROI from Digital Business Cards"
description: "Learn how to measure networking effectiveness with analytics. Track views, clicks, and conversions to prove ROI from your digital business card investment."
date: "Jan 15, 2026"
readTime: "8 min read"
author: "Cardrender Team"
category: "Guides"
keywords:
  - networking ROI
  - business card analytics
  - digital card metrics
  - sales productivity
  - contact tracking
published: true
---

Digital business cards aren't just convenient—they're measurable. Here's how to calculate ROI...

## Understanding Key Metrics

Track these essential metrics to measure success:

- **View rate**: How many people opened your card
- **Click-through rate**: Percentage who clicked your links
- **Save rate**: Contacts who added you to their address book

## Calculating ROI

Use this formula to quantify networking value...

```

## 📚 Writing Documentation

Create a new MDX file in `src/content/docs/` with this frontmatter:

```mdx
---
title: "Feature Name - Action-Oriented Description"
description: "One-sentence value proposition explaining what users will learn."
category: "Setup"  # or "Integration", "Advanced", etc.
lastUpdated: "2026-01-15"
proficiencyLevel: "Beginner"  # or "Intermediate", "Advanced"
keywords:
  - feature keyword
  - action keyword
  - technical term
relatedDocs:
  - title: "Related Doc 1"
    url: "/docs/related-1"
  - title: "Related Doc 2"
    url: "/docs/related-2"
---

Your documentation content here...
```

### Documentation Guidelines

- **Title**: Clear, descriptive, action-oriented
- **Description**: Brief explanation of what users will learn
- **Category**: Setup, Integration, Advanced, Reference
- **Last Updated**: Keep current (YYYY-MM-DD format)
- **Proficiency Level**: Beginner, Intermediate, or Advanced
- **Related Docs**: 2-4 links to related documentation
- Include Prerequisites section when relevant
- Use numbered lists for step-by-step instructions
- Add Common Questions section at the end

### Example Doc Page

```mdx
---
title: "CRM Integration Setup - Connect Salesforce and HubSpot"
description: "Step-by-step guide to integrate Cardrender with your CRM for automated lead tracking and contact sync."
category: "Integration"
lastUpdated: "2026-01-15"
proficiencyLevel: "Intermediate"
keywords:
  - CRM integration
  - Salesforce integration
  - HubSpot integration
  - lead tracking
  - contact sync
relatedDocs:
  - title: "API Documentation"
    url: "/docs/api"
  - title: "Analytics"
    url: "/docs/analytics"
  - title: "Security"
    url: "/docs/security"
---

Connect Cardrender with your CRM to automatically track card views, sync contacts, and measure networking ROI.

## Prerequisites

- Admin access to your Cardrender workspace
- CRM administrator permissions
- API credentials from your CRM

## Step 1: Generate API Keys

Navigate to your Cardrender workspace settings...

```

## 🚀 URL Structure

Content collections automatically generate routes:

- **Blog Posts**: `/blog/[slug]` → `/blog/digital-business-cards`
- **Docs Pages**: `/docs/[slug]` → `/docs/getting-started`

The slug is derived from the filename (without the `.mdx` extension).

## 🎨 Using MDX Features

MDX allows you to use React/Astro components inside Markdown:

```mdx
---
title: "My Post"
description: "Example post"
date: "Jan 15, 2026"
readTime: "5 min"
---

Regular **Markdown** content works here.

You can also import and use components:

import { Info } from "@/components/ui/callout";

<Info>
  This is a custom component within your MDX content!
</Info>

Back to regular Markdown...
```

## ✅ Content Checklist

### Before Publishing a Blog Post:
- [ ] Title is 50-60 characters with primary keyword
- [ ] Description is 150-160 characters
- [ ] 5-10 relevant keywords added
- [ ] Category is set correctly
- [ ] Author and date are current
- [ ] Content is 800+ words
- [ ] Headings use proper hierarchy (##, ###)
- [ ] Internal links to related content
- [ ] Clear call-to-action at the end
- [ ] `published: true` is set

### Before Publishing Documentation:
- [ ] Title is clear and descriptive
- [ ] Description explains the value
- [ ] Category is appropriate
- [ ] Last updated date is current
- [ ] Proficiency level is accurate
- [ ] 2-4 related docs are linked
- [ ] Prerequisites are listed (if needed)
- [ ] Steps are numbered and clear
- [ ] Common questions are answered
- [ ] Code examples are formatted

## 🔄 Migration from Astro Components

Old structure (deprecated):
```
src/pages/blog/
  └── digital-business-cards.astro  ❌ Old way
```

New structure:
```
src/content/blog/
  └── digital-business-cards.mdx    ✅ New way
src/pages/blog/
  └── [slug].astro                  Dynamic route
```

The old `.astro` files in `src/pages/blog/` and `src/pages/docs/` can be deleted once content is migrated to `src/content/`.

## 📊 Benefits of Content Collections

1. **Type Safety**: Zod schema validation ensures consistent frontmatter
2. **Easy Editing**: Write in pure Markdown/MDX without component boilerplate
3. **Better DX**: Content editors don't need to know Astro syntax
4. **SEO Friendly**: Frontmatter is automatically structured for search engines
5. **Flexible**: Can add custom components via MDX when needed
6. **Organized**: Clear separation between content and code

## 🛠️ Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Resources

- [Astro Content Collections Docs](https://docs.astro.build/en/guides/content-collections/)
- [MDX Syntax Guide](https://mdxjs.com/)
- [Zod Schema Documentation](https://zod.dev/)
- Project SEO Guide: `/SEO-LLM-BEST-PRACTICES.md`

---

**Start writing content today!** Just create a new `.mdx` file in `src/content/blog/` or `src/content/docs/` and follow the templates above.
