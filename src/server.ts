import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Proxy API and Upload requests to MonsterASP backend over HTTP
 */
app.use(['/api', '/uploads'], async (req, res) => {
  const targetUrl = `http://jobayer-portfolio-api.runasp.net${req.originalUrl}`;
  try {
    const forwardHeaders: Record<string, string> = {};
    for (const [key, value] of Object.entries(req.headers)) {
      if (value && typeof value === 'string') {
        forwardHeaders[key] = value;
      }
    }
    forwardHeaders['host'] = 'jobayer-portfolio-api.runasp.net';
    forwardHeaders['x-forwarded-host'] = req.headers.host || '';
    forwardHeaders['x-forwarded-proto'] = 'https';

    const hasBody = !['GET', 'HEAD'].includes(req.method);
    const fetchOptions: any = {
      method: req.method,
      headers: forwardHeaders,
      redirect: 'manual',
    };

    if (hasBody) {
      const chunks: Buffer[] = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      fetchOptions.body = Buffer.concat(chunks);
    }

    const backendRes = await fetch(targetUrl, fetchOptions);
    res.status(backendRes.status);
    backendRes.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    const buffer = Buffer.from(await backendRes.arrayBuffer());
    res.send(buffer);
  } catch (err: any) {
    res.status(502).json({ error: 'Backend unreachable', details: err?.message });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
