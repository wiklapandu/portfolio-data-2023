module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      header: ['accept-language', 'Content-Type', 'Authorization', 'Accept', 'X-Timezone', 'X-Timezone-Name'],
      origin: ['http://localhost:3000', 'http://localhost:3004']
    }
  }
];
