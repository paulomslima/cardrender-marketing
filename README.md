# Cardrender Marketing Site

Modern marketing website for Cardrender built with Astro, Tailwind CSS, and MDX content collections.

## ✨ Features

- 🎨 **Shadcn Design System** - Premium UI components with navy/teal brand colors
- 📝 **MDX Content Collections** - Write blog posts and docs in Markdown
- 🔍 **SEO Optimized** - Comprehensive meta tags, Open Graph, structured data
- ⚡ **Fast Performance** - Astro SSR with Cloudflare Pages deployment
- 📱 **Fully Responsive** - Mobile-first design with Tailwind CSS
- 🎯 **Analytics Ready** - Built-in tracking for card views, clicks, conversions

## 📂 Project Structure

```text
/
├── public/
│   ├── llms.txt              # LLM discovery metadata
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/           # Reusable Astro components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/             # 📝 Content Collections (write here!)
│   │   ├── blog/            # Blog posts in MDX
│   │   │   ├── _template.mdx
│   │   │   ├── digital-business-cards.mdx
│   │   │   └── calculate-roi-digital-business-cards.mdx
│   │   ├── docs/            # Documentation in MDX
│   │   │   ├── _template.mdx
│   │   │   └── getting-started.mdx
│   │   ├── config.ts        # Content collection schemas
│   │   └── README.md        # Content writing guide
│   ├── layouts/             # Page layouts
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── DocsLayout.astro
│   ├── lib/                 # Utilities and config
│   │   ├── config.ts
│   │   ├── plans.ts
│   │   └── utils.ts
│   ├── pages/              # Routes
│   │   ├── index.astro     # Homepage
│   │   ├── pricing.astro
│   │   ├── features.astro
│   │   ├── blog/
│   │   │   ├── index.astro       # Blog index
│   │   │   └── [slug].astro      # Dynamic blog posts
│   │   └── docs/
│   │       ├── index.astro       # Docs index
│   │       └── [slug].astro      # Dynamic docs pages
│   └── styles/
│       └── global.css       # Global styles + Shadcn tokens
├── astro.config.mjs
├── tailwind.config.mjs
├── wrangler.toml           # Cloudflare Pages config
├── CONTENT-QUICKSTART.md   # Quick reference for writing
└── SEO-LLM-BEST-PRACTICES.md  # SEO documentation
```

## 🚀 Quick Start

### Install Dependencies
```sh
npm install
```

### Start Development Server
```sh
npm run dev
```
Visit: `http://localhost:4321`

### Build for Production
```sh
npm run build
```

### Preview Production Build
```sh
npm run preview
```

## ✍️ Writing Content

### Create a Blog Post

1. Copy the template:
   ```sh
   cp src/content/blog/_template.mdx src/content/blog/your-post.mdx
   ```

2. Edit frontmatter and write content in Markdown

3. Your post will be available at `/blog/your-post`

### Create Documentation

1. Copy the template:
   ```sh
   cp src/content/docs/_template.mdx src/content/docs/your-doc.mdx
   ```

2. Edit frontmatter and write content

3. Your doc will be available at `/docs/your-doc`

**Full Guide:** See [src/content/README.md](./src/content/README.md) or [CONTENT-QUICKSTART.md](./CONTENT-QUICKSTART.md)

## 🎨 Design System

- **Primary Color:** Navy `hsl(219 48% 32%)` - #28407d
- **Secondary Color:** Teal `hsl(163 99% 40%)` - #01ca7c
- **Font:** Red Hat Display
- **Components:** Shadcn-inspired with 10px border radius
- **Icons:** Lucide (lucide-astro)

## 📊 SEO & Analytics

- **Structured Data:** Schema.org Article/TechArticle markup
- **Open Graph:** Facebook, LinkedIn optimization
- **Twitter Cards:** Rich preview support
- **Keywords:** Comprehensive SEO keyword strategy
- **LLM Friendly:** Optimized for AI discovery via /llms.txt

See [SEO-LLM-BEST-PRACTICES.md](./SEO-LLM-BEST-PRACTICES.md) for full documentation.

## 🔧 Tech Stack

- **Framework:** [Astro](https://astro.build) v5.16.6
- **Styling:** [Tailwind CSS](https://tailwindcss.com) v3.4
- **Content:** [MDX](https://mdxjs.com) via Astro Content Collections
- **Icons:** [Lucide](https://lucide.dev)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com)
- **CI/CD:** GitHub Actions

## 🚢 Deployment

Automatic deployment via GitHub Actions to Cloudflare Pages on push to `main` branch.

Manual deploy:
```sh
npm run build
wrangler pages deploy
```

## 📖 Documentation

- [Content Writing Guide](./src/content/README.md) - How to write blog posts and docs
- [Content Quickstart](./CONTENT-QUICKSTART.md) - Quick reference
- [SEO Best Practices](./SEO-LLM-BEST-PRACTICES.md) - SEO implementation details
- [Content Status](./CONTENT-STATUS.md) - Migration tracking

## 🧞 Commands Reference

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run deploy` | Build and deploy to Cloudflare Pages |

## 📝 Content Checklist

Before publishing:
- [ ] Title is 50-60 characters with keywords
- [ ] Description is 150-160 characters
- [ ] Keywords array has 5-10 items
- [ ] Date/lastUpdated is current
- [ ] Content is 800+ words (blog) or complete (docs)
- [ ] Internal links to related content
- [ ] `published: true` (blog only)

## 🤝 Contributing

1. Create new content in `src/content/blog/` or `src/content/docs/`
2. Use the `_template.mdx` files as starting points
3. Preview locally with `npm run dev`
4. Commit and push to deploy

## 📄 License

Proprietary - Cardrender © 2025
