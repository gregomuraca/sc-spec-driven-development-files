import { describe, expect, it } from 'vitest';
import { app } from '../src/app.js';

describe('static CSS', () => {
  for (const path of ['/styles.css', '/layout.css']) {
    it(`serves ${path} as CSS`, async () => {
      const res = await app.request(path);
      expect(res.status).toBe(200);
      expect(res.headers.get('content-type')).toMatch(/^text\/css/);
    });
  }
});
