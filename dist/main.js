document.addEventListener("DOMContentLoaded", () => {
  const textEl = document.getElementById("text");
  const text = "Coming soon...";
  if (!textEl) return;

  let i = 0;

  function type() {
    if (i < text.length) {
      textEl.textContent += text.charAt(i);
      i++;
      setTimeout(type, 120);
    }
  }

  setTimeout(type, 1500);
});
