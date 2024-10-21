const express = require('express');
const next = require('next');
const fetch = require('node-fetch');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Function to handle rendering for both subdomain and /site/:slug
  const renderSite = async (slug, res) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/shipstation-websites/websites`;
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
      res.redirect(process.env.NEXT_PUBLIC_MAIN_URL);
    }
  };

  // Handle /site/:slug route
  server.get('/site/:slug', async (req, res) => {
    const { slug } = req.params;
    await renderSite(slug, res);
  });

  // Handle subdomain routing
  server.use((req, res, next) => {
    const hostname = req.hostname;
    const mainDomain = process.env.NEXT_PUBLIC_PROFILE_DOMAIN;

    console.log("Got request for", hostname);
    
    if (hostname !== mainDomain && hostname.endsWith(`.${mainDomain}`)) {
      const slug = hostname.replace(`.${mainDomain}`, '');
      console.log("Rendering", slug);
      renderSite(slug, res);
    } else {
      next();
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
