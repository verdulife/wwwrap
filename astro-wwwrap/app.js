import { defineToolbarApp } from "astro/toolbar";

export default defineToolbarApp({
  init(canvas, app) {
    app.onToggled(({ state }) => {
      if (!state) return;

      const { host, pathname } = window.location;
      const frame = document.createElement("iframe");
      const URL = "/wwwrap/" + (`${host}${pathname}`).replaceAll("/", "_");

      frame.src = URL;
      canvas.appendChild(frame);

      frame.style.cssText = /* css */`
        position: fixed;
        width: 100vw;
        height: 100vh;
        border: none;
        z-index: 9999; 
      `;

      const inner = frame.contentDocument.documentElement.querySelector("astro-dev-toolbar");

      inner.style.cssText = /* css */`
        display: none !important;
      `;
    });
  }
});