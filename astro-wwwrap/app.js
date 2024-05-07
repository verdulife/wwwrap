import { defineToolbarApp } from "astro/toolbar";

export default defineToolbarApp({
  init(canvas) {
    const tool = document.createElement('astro-dev-toolbar-window');

    const style = document.createElement("style");
    style.textContent = /* css */`
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `;

    const div = document.createElement("div");

    const title = document.createElement('span');
    title.innerHTML = 'Open localhost on <strong>wwwrap.dev</strong>';

    const button = document.createElement('astro-dev-toolbar-button');
    button.textContent = 'Open';
    button.buttonStyle = "purple";
    button.size = "medium";

    button.addEventListener('click', () => {
      console.log('Clicked!');
    });


    div.appendChild(title);
    div.appendChild(button);
    tool.appendChild(div);
    tool.appendChild(style);
    canvas.appendChild(tool);
  },
});