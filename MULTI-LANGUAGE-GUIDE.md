# Multi-Language Content Guide

## 🌍 Supported Languages

The CardRender marketing site supports the following languages:

- **en** - English (default)
- **es** - Español (Spanish)
- **pt** - Português (Portuguese)
- **fr** - Français (French)
- **de** - Deutsch (German)

## 📂 Content Organization

### File Structure

```
src/content/
├── blog/
│   ├── my-post.mdx              # English version (default)
│   ├── my-post-es.mdx           # Spanish version
│   ├── my-post-pt.mdx           # Portuguese version
│   └── my-post-fr.mdx           # French version
└── docs/
    ├── getting-started.mdx       # English version
    ├── getting-started-es.mdx    # Spanish version
    └── ...
```

### URL Structure

- English (default): `/blog/my-post`, `/docs/getting-started`
- Spanish: `/es/blog/my-post`, `/es/docs/getting-started`
- Portuguese: `/pt/blog/my-post`, `/pt/docs/getting-started`
- French: `/fr/blog/my-post`, `/fr/docs/getting-started`
- German: `/de/blog/my-post`, `/de/docs/getting-started`

## ✍️ Writing Translated Content

### Blog Post Translation

1. **Copy the English version:**
   ```bash
   cp src/content/blog/my-post.mdx src/content/blog/my-post-es.mdx
   ```

2. **Update the frontmatter:**
   ```yaml
   ---
   title: "Tu Título Traducido"
   description: "Tu descripción traducida (150-160 caracteres)"
   date: "Dec 30, 2025"
   readTime: "6 min de lectura"
   author: "Equipo CardRender"
   category: "Producto"
   lang: "es"                           # Change to target language
   translationKey: "my-post"            # Keep same as English version
   keywords:
     - palabra clave 1
     - palabra clave 2
   published: true
   ---
   ```

3. **Translate the content** (keep Markdown structure the same)

4. **Preview:**
   ```bash
   npm run dev
   # Visit: http://localhost:4321/es/blog/my-post
   ```

### Documentation Translation

1. **Copy the English version:**
   ```bash
   cp src/content/docs/my-doc.mdx src/content/docs/my-doc-es.mdx
   ```

2. **Update the frontmatter:**
   ```yaml
   ---
   title: "Título del Documento"
   description: "Descripción del documento"
   category: "Configuración"
   lastUpdated: "2025-12-30"
   proficiencyLevel: "Beginner"
   lang: "es"                           # Change to target language
   translationKey: "my-doc"             # Keep same as English version
   keywords:
     - palabra clave 1
   relatedDocs:
     - title: "Doc Relacionado"
       url: "/es/docs/related-doc"     # Use localized URLs
   ---
   ```

3. **Translate the content**

## 🔗 Translation Keys

The `translationKey` field links translations together. Use the same key across all language versions:

**English:** `translationKey: "digital-business-cards"`  
**Spanish:** `translationKey: "digital-business-cards"`  
**Portuguese:** `translationKey: "digital-business-cards"`

This allows the system to:
- Generate language switcher links
- Show alternate language versions
- Maintain SEO hreflang tags

## 🎨 UI Translations

UI strings (navigation, buttons, labels) are defined in `src/lib/i18n.ts`:

```typescript
export const ui = {
  en: {
    'nav.home': 'Home',
    'blog.readMore': 'Read more',
    // ...
  },
  es: {
    'nav.home': 'Inicio',
    'blog.readMore': 'Leer más',
    // ...
  },
  // ...
}
```

To use in components:

```astro
---
import { getLangFromUrl, useTranslations } from '../lib/i18n';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<a href="/blog">{t('nav.blog')}</a>
```

## 📋 Translation Checklist

### Before Publishing a Translation:
- [ ] `lang` field is set to correct language code
- [ ] `translationKey` matches the English version
- [ ] Title and description are fully translated
- [ ] Keywords are in target language
- [ ] All content is translated (headings, paragraphs, lists)
- [ ] Internal links use localized URLs (`/es/...`, `/pt/...`)
- [ ] Related docs links point to translated versions (when available)
- [ ] Date formats are appropriate for locale
- [ ] Numbers and currencies are formatted correctly

## 🌐 SEO for Translations

Each translated page automatically gets:

1. **Correct `lang` attribute:** `<html lang="es">`
2. **hreflang tags:** Links to all language versions
3. **Localized structured data:** Schema.org with correct `inLanguage`
4. **Localized Open Graph:** Social media previews in target language
5. **Canonical URLs:** Proper canonical for each language version

## 📊 Current Translations

### Blog Posts
- ✅ `digital-business-cards` (en) → `digital-business-cards-es` (es)
- ⏳ `calculate-roi-digital-business-cards` (es, pt, fr, de - pending)

### Documentation
- ✅ `getting-started` (en)
- ⏳ `getting-started` (es, pt, fr, de - pending)

## 🚀 Adding a New Language

To add support for a new language (e.g., Italian):

1. **Update `src/lib/i18n.ts`:**
   ```typescript
   export const languages = {
     en: 'English',
     es: 'Español',
     it: 'Italiano',  // Add new language
     // ...
   };
   ```

2. **Add UI translations:**
   ```typescript
   export const ui = {
     // ...
     it: {
       'nav.home': 'Home',
       'blog.readMore': 'Leggi di più',
       // ...
     },
   };
   ```

3. **Update Astro config:**
   ```javascript
   // astro.config.mjs
   i18n: {
     locales: ["en", "es", "pt", "fr", "de", "it"],
   }
   ```

4. **Update content schemas:**
   ```typescript
   // src/content/config.ts
   lang: z.enum(['en', 'es', 'pt', 'fr', 'de', 'it'])
   ```

5. **Create route folders:**
   ```bash
   mkdir -p src/pages/it/blog
   mkdir -p src/pages/it/docs
   ```

6. **Copy dynamic route files** from `src/pages/es/` to `src/pages/it/`

## 💡 Best Practices

1. **Translate in order of priority:**
   - Start with high-traffic pages
   - Translate homepage and key landing pages first
   - Add blog posts based on popularity

2. **Maintain consistency:**
   - Use same terminology across all pages
   - Keep brand names untranslated (CardRender)
   - Maintain consistent tone and voice

3. **Localize, don't just translate:**
   - Adapt examples for local context
   - Use local date/number formats
   - Reference local companies or use cases when relevant

4. **Keep translations updated:**
   - When updating English content, update translations
   - Track `lastUpdated` date in docs
   - Monitor which translations are outdated

5. **Test thoroughly:**
   - Preview each language version
   - Check all internal links work
   - Verify SEO tags are correct
   - Test on mobile and desktop

## 🔧 Development Commands

```bash
# Preview all languages
npm run dev
# English: http://localhost:4321/blog/my-post
# Spanish: http://localhost:4321/es/blog/my-post
# Portuguese: http://localhost:4321/pt/blog/my-post

# Build with all languages
npm run build

# Check which pages are generated
npm run build 2>&1 | grep "prerendering"
```

## 📚 Resources

- [Astro i18n Guide](https://docs.astro.build/en/guides/internationalization/)
- [i18n Best Practices](https://www.w3.org/International/questions/qa-i18n)
- [SEO for Multi-Language Sites](https://developers.google.com/search/docs/specialty/international)

---

**Ready to translate?** Copy an English file, update the frontmatter with `lang` and `translationKey`, and translate the content!
