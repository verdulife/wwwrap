import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ request, locals }, next) => {
  if (request.method === 'OPTIONS') {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'https://wwwrap.dev/*');
    headers.append('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    return new Response(null, { headers });
  }

  locals.title = "New title";

  const response = await next();

  const headers = new Headers(response.headers);
  headers.append('Access-Control-Allow-Origin', 'https://wwwrap.dev/*');
  headers.append('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  return new Response(response.body, {
    ...response,
    headers: headers,
  });
});