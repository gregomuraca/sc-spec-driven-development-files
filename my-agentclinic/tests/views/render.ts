import type { JSXNode } from 'hono/jsx';

/** Render a Hono JSX element to an HTML string. */
export const render = async (node: unknown): Promise<string> =>
  String(await (node as JSXNode).toString());
