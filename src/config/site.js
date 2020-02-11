module.exports = {
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
    title: 'Recipe APP', // Navigation and Site Title
    titleAlt: 'Recipe APP', // Title for JSONLD
    description: 'Food Recipe APP',
    url: 'https://ilistoica.dev', // Domain of your site. No trailing slash!
    siteUrl: 'https://ilistoica.dev', // url + pathPrefix
    siteLanguage: 'en', // Language Tag on <html> element
    logo: 'static/logo/logo.png', // Used for SEO
    banner: 'static/logo/banner.png',
    // JSONLD / Manifest
    favicon: 'icons/icon-192x192.png', // Used for manifest favicon generation
    shortName: 'RecipeAPP', // shortname for manifest. MUST be shorter than 12 characters
    author: '@iliutastoica', // Author for schemaORGJSONLD
    themeColor: '#2772d0',
    backgroundColor: '#2772d0',
    twitter: '@iliutastoica', // Twitter Username
    APP_KEY: '40698503668e0bb3897581f4766d77f9',
  };
  //api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=chicken