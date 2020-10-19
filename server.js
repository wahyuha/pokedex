const express = require('express');
const next = require('next');
const routes = require('./src/configs/routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.disable('x-powered-by');
  server.use(express.static('public'));

  server.get('/favicon.ico', (req, res) => {
    res.sendFile(path.resolve('public/favicon.ico'));
  });

  server.all('*', (req, res) => {
    return handler(req, res, req.url);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`🚀 Pokemon is ready on http://localhost:${port} 🚀`);
  });
}).catch((ex) => {
  console.error(ex.stack); // eslint-disable-line no-console
  process.exit(1);
});
