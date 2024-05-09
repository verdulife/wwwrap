import { defineToolbarApp } from "astro/toolbar";

export default defineToolbarApp({
  init(canvas, app) {
    const { host } = window.location;
    const frame = document.createElement("iframe");

    frame.src = `/wwwrap/${host}`;
    canvas.appendChild(frame);

    frame.style.cssText = /* css */`
      position: fixed;
      width: 100vw;
      height: 100vh;
      border: none;
      z-index: 9999; 
    `;

    app.onToggled(({ state }) => {
      if (!state) return;

      const inner = frame.contentDocument.documentElement.querySelector("astro-dev-toolbar");

      inner.style.cssText = /* css */`
        display: none !important;
      `;
    });
  }
});