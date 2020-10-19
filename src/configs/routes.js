const routes = require('next-routes');

const router = routes();

router
  .add('landing', '/', 'index')
  .add('detail', '/:pokemonSlug', '_detail')

module.exports = router;
