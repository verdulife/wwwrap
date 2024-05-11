import { defineToolbarApp } from "astro/toolbar";

export default defineToolbarApp({
  init(_, app) {
    const { host, pathname } = window.location;
    const link = document.createElement("a");
    const isOff = pathname === "/";

    if (isOff) app.toggleState({ state: false });
    else app.toggleState({ state: true });

    app.onToggled(() => {
      if (isOff) link.href = `http://${host}/wwwrap/${host}`;
      else link.href = `http://${host}`;

      link.click();
    });
  },
});