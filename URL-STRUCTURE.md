# Complete URL Structure 🌐

## All Available URLs

### 🇺🇸 English (Default - No Prefix)

#### Static Pages
```
/                           → Homepage
/pricing                    → Pricing (SSR - dynamic plans)
/features                   → Features page
```

#### Blog
```
/blog                       → Blog index
/blog/digital-business-cards              → Blog post
/blog/calculate-roi-digital-business-cards → Blog post
```

#### Documentation
```
/docs                       → Docs index
/docs/getting-started       → Documentation page
/docs/analytics            → Documentation page
/docs/api                  → Documentation page
/docs/branding-and-templates → Documentation page
/docs/security             → Documentation page
/docs/teams                → Documentation page
```

---

### 🇪🇸 Spanish (es prefix)

#### Static Pages
```
/es/                        → Spanish homepage ✅
/es/pricing                 → Spanish pricing (SSR) ✅
```

#### Blog (Ready for Content)
```
/es/blog/[slug]            → Spanish blog posts
/es/blog/digital-business-cards-es → Existing Spanish translation
```

#### Documentation (Ready for Content)
```
/es/docs/[slug]            → Spanish documentation
```

---

### 🇧🇷 Portuguese (pt prefix)

#### Static Pages
```
/pt/                        → Portuguese homepage ✅
/pt/pricing                 → Portuguese pricing (SSR) ✅
```

#### Blog (Ready for Content)
```
/pt/blog/[slug]            → Portuguese blog posts
```

#### Documentation (Ready for Content)
```
/pt/docs/[slug]            → Portuguese documentation
```

---

## Quick Reference

| URL | Language | Status | Type |
|-----|----------|--------|------|
| `/` | English | ✅ Live | Static |
| `/pricing` | English | ✅ Live | SSR |
| `/features` | English | ✅ Live | Static |
| `/blog/*` | English | ✅ Live | Static (prerendered) |
| `/docs/*` | English | ✅ Live | Static (prerendered) |
| **`/es/`** | **Spanish** | **✅ Live** | **Static** |
| **`/es/pricing`** | **Spanish** | **✅ Live** | **SSR** |
| **`/es/blog/*`** | **Spanish** | **🔄 Ready** | **Static (needs content)** |
| **`/es/docs/*`** | **Spanish** | **🔄 Ready** | **Static (needs content)** |
| **`/pt/`** | **Portuguese** | **✅ Live** | **Static** |
| **`/pt/pricing`** | **Portuguese** | **✅ Live** | **SSR** |
| **`/pt/blog/*`** | **Portuguese** | **🔄 Ready** | **Static (needs content)** |
| **`/pt/docs/*`** | **Portuguese** | **🔄 Ready** | **Static (needs content)** |

## Test in Browser

### Development
```bash
npm run dev
```

Then visit:
- English: http://localhost:4321/
- Spanish: http://localhost:4321/es/
- Portuguese: http://localhost:4321/pt/

### Production Build
```bash
npm run build
npm run preview
```

## Content Mapping

### Existing Content

**English Blog Posts:**
- `digital-business-cards.mdx` (lang: en)
- `calculate-roi-digital-business-cards.mdx` (lang: en)

**Spanish Blog Posts:**
- `digital-business-cards-es.mdx` (lang: es, translationKey: "digital-business-cards")

**English Docs:**
- `getting-started.mdx` (lang: en)

### What Routes Show

**`/blog/[slug].astro`** filters `lang === 'en'`:
- Shows: digital-business-cards, calculate-roi-digital-business-cards

**`/es/blog/[slug].astro`** filters `lang === 'es'`:
- Shows: digital-business-cards-es

**`/pt/blog/[slug].astro`** filters `lang === 'pt'`:
- Shows: (empty - needs content)

## Next Actions

1. **Test Spanish pages:**
   ```bash
   npm run dev
   open http://localhost:4321/es/
   open http://localhost:4321/es/pricing
   ```

2. **Test Portuguese pages:**
   ```bash
   npm run dev
   open http://localhost:4321/pt/
   open http://localhost:4321/pt/pricing
   ```

3. **Add Spanish content:**
   ```bash
   # Copy and translate
   cp src/content/blog/calculate-roi-digital-business-cards.mdx \
      src/content/blog/calculate-roi-digital-business-cards-es.mdx
   
   # Edit: set lang: "es" and translationKey: "calculate-roi-digital-business-cards"
   ```

4. **Add Portuguese content:**
   ```bash
   # Copy and translate
   cp src/content/blog/digital-business-cards.mdx \
      src/content/blog/digital-business-cards-pt.mdx
   
   # Edit: set lang: "pt" and translationKey: "digital-business-cards"
   ```

## Language Switcher

The `LanguageSwitcher` component automatically:
- Detects current page language
- Shows available translations for the current page
- Links to equivalent page in other languages
- Falls back to homepage if translation doesn't exist

**Example:** If on `/blog/digital-business-cards`:
- 🇬🇧 English: `/blog/digital-business-cards` (current)
- 🇪🇸 Spanish: `/es/blog/digital-business-cards-es` (if exists via translationKey)
- 🇧🇷 Portuguese: `/pt/` (fallback - no translation yet)

## SEO Benefits

Each language version has:
- ✅ Proper `lang` attribute on `<html>` tag
- ✅ Language-specific `<title>` and `<meta description>`
- ✅ Hreflang tags linking to all language versions
- ✅ Canonical URL for each language
- ✅ Language-specific JSON-LD structured data
- ✅ Language-specific Open Graph tags
- ✅ Language-specific Twitter Cards

This ensures:
- Google shows correct language to users
- No duplicate content penalties
- Better rankings in each language's search results
- Proper indexing of all language versions

---

**Status:** ✅ Complete structure replicated for /es and /pt
**Build:** ✅ Passing
**Ready:** ✅ Production-ready for content translation
