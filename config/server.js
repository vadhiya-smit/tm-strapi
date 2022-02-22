module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  autoReload : { 
    enabled: true 
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'afd57bdc4f7afb8d48fa8b9c68dd436c'),
    },
  },
});
