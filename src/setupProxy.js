const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/auth/google', {
      target: process.env.REACT_APP_APOLLO_API_URI,
    })
  );
  app.use(
    createProxyMiddleware('/auth/linkedin', {
      target: process.env.REACT_APP_APOLLO_API_URI,
    })
  );
  app.use(
    createProxyMiddleware('/api/*', {
      target: process.env.REACT_APP_APOLLO_API_URI,
    })
  );
};
