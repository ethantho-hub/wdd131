// wait for DOM to exist
document.addEventListener("DOMContentLoaded", function () {
  // set current year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = y;

  // set lastModified (browser-provided)
  const lm = document.getElementById("lastModified");
  if (lm) lm.textContent = document.lastModified || "n/a";
});
