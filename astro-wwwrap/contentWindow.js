window.addEventListener(
  "message",
  (ev) => {
    if (ev.origin !== "http://localhost:4321") return;

    window.addEventListener("scroll", () => console.log(window.scrollY))
  },
  false,
);