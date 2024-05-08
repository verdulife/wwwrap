const icon = /* html */`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M0 0h24v24H0z" stroke="none"/><path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6-2L3 9m11-6-7 7m12-7-7 7m9-4-4 4M3 10h18m-11 0v11"/>
  </svg>
`;

/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "wwwrap",
  hooks: {
    "astro:config:setup": ({ addDevToolbarApp, injectScript }) => {
      addDevToolbarApp({
        id: "astro-wwwrap",
        name: "wwwrap",
        icon,
        entrypoint: "./astro-wwwrap/app.js",
      });

      injectScript(
        "page",
        "import '@/../astro-wwwrap/contentWindow.js'; console.log('injected');"
      );

      /* addMiddleware({
        entrypoint: "./astro-wwwrap/middleware.js",
        order: 'pre'
      }); */
    },
  },
});