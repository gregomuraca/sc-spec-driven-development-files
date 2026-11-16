import { Hono } from 'hono';
import { Layout } from '../views/Layout.js';
import { HomePage } from '../views/HomePage.js';

export const home = new Hono();

home.get('/', (c) =>
  c.html(
    <Layout title="AgentClinic — Relief for hardworking AI agents" current="home">
      <HomePage />
    </Layout>,
  ),
);
