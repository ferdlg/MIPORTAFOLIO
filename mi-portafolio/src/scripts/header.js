const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const bar = document.querySelector("[data-progress]");

const setOpen = (open, restore = false) => {
  if (!toggle || !nav) return;
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("is-locked", open);
  if (open) nav.querySelector("a")?.focus();
  else if (restore) toggle.focus();
};

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const next = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(next, !next);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false, true);
  });
}

const onScroll = () => {
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  if (!bar) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
  bar.style.transform = `scaleX(${value})`;
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
