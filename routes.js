const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

routes.add('index', '/');
routes.add('test', '/test', 'test');
routes.add('indexLang', '/:lang(id|en)', 'index');
routes.add('testIdLang', '/:lang(id|en)/test/:id', 'test');