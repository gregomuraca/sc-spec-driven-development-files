import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { home } from './routes/home.js';

const app = new Hono();

app.use('/styles.css', serveStatic({ root: './public' }));
app.route('/', home);

const port = Number(process.env.PORT) || 3000;

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`AgentClinic running at http://localhost:${info.port}`);
});
