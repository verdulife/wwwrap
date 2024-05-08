window.addEventListener(
  "message",
  (ev) => {
    if (ev.origin !== "http://localhost:4321") return;
    console.log(window.scrollY);
  },
  false,
);