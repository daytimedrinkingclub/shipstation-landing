const express = require('express');
const next = require('next');
const fetch = require('node-fetch');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/site/:slug', async (req, res) => {
    const { slug } = req.params;
    const baseUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/shipstation-websites/websites`;
    const url = `${baseUrl}/${slug}/index.html`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch HTML');
      }
      const htmlContent = await response.text();
      res.setHeader('Content-Type', 'text/html');
      res.send(htmlContent);
    } catch (error) {
      console.error('Error:', error);
      res.status(404).send('Not Found');
    }
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${port}`);
  });
});