import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ request }, next) => {
  const response = await next();
  const headers = new Headers(response.headers);

  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Methods', '*');
  headers.append('Access-Control-Allow-Headers', '*');

  return new Response(response.body, {
    ...response,
    headers: headers,
  });
});