// Internationalization configuration

export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.blog': 'Blog',
    'nav.docs': 'Docs',
    'blog.readMore': 'Read more',
    'blog.backToBlog': 'Back to blog',
    'blog.shareArticle': 'Share this article',
    'blog.author': 'By',
    'blog.category': 'Category',
    'docs.relatedDocs': 'Related Documentation',
    'docs.lastUpdated': 'Last updated',
    'docs.prerequisites': 'Prerequisites',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.tagline': 'Digital business cards and team identity management for modern companies.',
    'auth.signIn': 'Sign in',
    'auth.startFree': 'Start free',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.blog': 'Blog',
    'nav.docs': 'Documentación',
    'blog.readMore': 'Leer más',
    'blog.backToBlog': 'Volver al blog',
    'blog.shareArticle': 'Compartir este artículo',
    'blog.author': 'Por',
    'blog.category': 'Categoría',
    'docs.relatedDocs': 'Documentación Relacionada',
    'docs.lastUpdated': 'Última actualización',
    'docs.prerequisites': 'Requisitos previos',
    'footer.product': 'Producto',
    'footer.company': 'Empresa',
    'footer.resources': 'Recursos',
    'footer.legal': 'Legal',
    'footer.tagline': 'Tarjetas digitales y gestión de identidad de equipo para empresas modernas.',
    'auth.signIn': 'Iniciar sesión',
    'auth.startFree': 'Comenzar gratis',
  },
  pt: {
    'nav.home': 'Início',
    'nav.features': 'Recursos',
    'nav.pricing': 'Preços',
    'nav.blog': 'Blog',
    'nav.docs': 'Documentação',
    'blog.readMore': 'Leia mais',
    'blog.backToBlog': 'Voltar ao blog',
    'blog.shareArticle': 'Compartilhar este artigo',
    'blog.author': 'Por',
    'blog.category': 'Categoria',
    'docs.relatedDocs': 'Documentação Relacionada',
    'docs.lastUpdated': 'Última atualização',
    'docs.prerequisites': 'Pré-requisitos',
    'footer.product': 'Produto',
    'footer.company': 'Empresa',
    'footer.resources': 'Recursos',
    'footer.legal': 'Legal',
    'footer.tagline': 'Cartões digitais e gestão de identidade de equipe para empresas modernas.',
    'auth.signIn': 'Iniciar sessão',
    'auth.startFree': 'Comece de graça',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.features': 'Fonctionnalités',
    'nav.pricing': 'Tarifs',
    'nav.blog': 'Blog',
    'nav.docs': 'Documentation',
    'blog.readMore': 'Lire la suite',
    'blog.backToBlog': 'Retour au blog',
    'blog.shareArticle': 'Partager cet article',
    'blog.author': 'Par',
    'blog.category': 'Catégorie',
    'docs.relatedDocs': 'Documentation Associée',
    'docs.lastUpdated': 'Dernière mise à jour',
    'docs.prerequisites': 'Prérequis',
    'footer.product': 'Produit',
    'footer.company': 'Entreprise',
    'footer.resources': 'Ressources',
    'footer.legal': 'Légal',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.features': 'Funktionen',
    'nav.pricing': 'Preise',
    'nav.blog': 'Blog',
    'nav.docs': 'Dokumentation',
    'blog.readMore': 'Weiterlesen',
    'blog.backToBlog': 'Zurück zum Blog',
    'blog.shareArticle': 'Diesen Artikel teilen',
    'blog.author': 'Von',
    'blog.category': 'Kategorie',
    'docs.relatedDocs': 'Verwandte Dokumentation',
    'docs.lastUpdated': 'Zuletzt aktualisiert',
    'docs.prerequisites': 'Voraussetzungen',
    'footer.product': 'Produkt',
    'footer.company': 'Unternehmen',
    'footer.resources': 'Ressourcen',
    'footer.legal': 'Rechtliches',
  },
} as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function removeLocalePath(path: string): string {
  const segments = path.split('/').filter(Boolean);
  if (segments[0] && segments[0] in languages) {
    return '/' + segments.slice(1).join('/');
  }
  return path;
}

export function getAlternateLinks(currentPath: string, currentLang: Language) {
  const basePath = removeLocalePath(currentPath);
  return Object.keys(languages).map((lang) => ({
    lang: lang as Language,
    url: getLocalizedPath(basePath, lang as Language),
  }));
}
