import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';
import { home } from './routes/home.js';

export const app = new Hono();

app.use('/*.css', serveStatic({ root: './public' }));
app.route('/', home);
