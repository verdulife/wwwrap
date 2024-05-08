import { defineToolbarApp } from "astro/toolbar";

export default defineToolbarApp({
  init(canvas, app) {
    app.onToggled(({ state }) => {
      if (!state) return;

      const link = document.createElement("a");
      link.href = "https://wwwrap.dev/localhost:4321";
      link.click();

      app.changeAppState({ state: false });
    });
  },
});