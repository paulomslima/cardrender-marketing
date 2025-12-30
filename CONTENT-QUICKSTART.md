# Quick Start: Writing Content in MDX

## 📝 Create a New Blog Post

1. **Create the file:**
   ```bash
   touch src/content/blog/your-post-slug.mdx
   ```

2. **Copy the template:**
   ```bash
   cp src/content/blog/_template.mdx src/content/blog/your-post-slug.mdx
   ```

3. **Edit frontmatter:** Update title, description, date, keywords

4. **Write content:** Use Markdown syntax below frontmatter

5. **Preview:**
   ```bash
   npm run dev
   ```
   Visit: `http://localhost:4321/blog/your-post-slug`

6. **Publish:** Set `published: true` in frontmatter

## 📚 Create New Documentation

1. **Create the file:**
   ```bash
   touch src/content/docs/your-doc-slug.mdx
   ```

2. **Copy the template:**
   ```bash
   cp src/content/docs/_template.mdx src/content/docs/your-doc-slug.mdx
   ```

3. **Edit frontmatter:** Update title, description, category, relatedDocs

4. **Write content:** Use Markdown syntax with step-by-step instructions

5. **Preview:**
   ```bash
   npm run dev
   ```
   Visit: `http://localhost:4321/docs/your-doc-slug`

## 🎨 Markdown Syntax Quick Reference

### Headings
```md
## Main Section (h2)
### Subsection (h3)
```

### Emphasis
```md
**Bold text**
*Italic text*
```

### Lists
```md
- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2
```

### Links
```md
[Link text](/docs/getting-started)
```

### Blockquotes
```md
> "Quote text here"
> — Person Name, Company
```

### Code
```md
Inline `code` with backticks

\```javascript
// Code block with syntax highlighting
const example = "code";
\```
```

## ✅ Pre-Publish Checklist

### Blog Posts
- [ ] Title is 50-60 characters
- [ ] Description is 150-160 characters
- [ ] Date is current
- [ ] 5-10 keywords added
- [ ] Category is correct
- [ ] Content is 800+ words
- [ ] Internal links included
- [ ] `published: true` is set

### Documentation
- [ ] Title is clear
- [ ] Description is helpful
- [ ] Last updated date is current
- [ ] Related docs are linked (2-4)
- [ ] Prerequisites listed
- [ ] Steps are numbered
- [ ] Examples included

## 🚀 Build & Deploy

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Preview build
npm run preview

# Deploy (if you have CI/CD set up)
git add .
git commit -m "Add new blog post: [title]"
git push origin main
```

## 📂 File Structure

```
src/content/
├── blog/
│   ├── _template.mdx           (copy this for new posts)
│   ├── digital-business-cards.mdx
│   └── calculate-roi-digital-business-cards.mdx
└── docs/
    ├── _template.mdx           (copy this for new docs)
    └── getting-started.mdx
```

## 🔗 URLs Generated

- Blog: `/blog/[filename-without-mdx]`
- Docs: `/docs/[filename-without-mdx]`

Example:
- `src/content/blog/my-post.mdx` → `/blog/my-post`
- `src/content/docs/setup-guide.mdx` → `/docs/setup-guide`

## 💡 Tips

- Use the `_template.mdx` files as starting points
- Keep filenames lowercase with hyphens (kebab-case)
- Preview content before publishing
- Add plenty of keywords for SEO
- Include internal links to increase engagement
- Update `lastUpdated` date when editing docs

---

**Need help?** Check [src/content/README.md](./README.md) for full documentation.
