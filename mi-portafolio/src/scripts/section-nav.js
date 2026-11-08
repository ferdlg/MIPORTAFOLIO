const links = [...document.querySelectorAll("[data-nav] a[href*='#']")];
const sections = links
  .map((link) => {
    const hash = link.getAttribute("href")?.split("#")[1];
    return hash ? document.getElementById(hash) : null;
  })
  .filter(Boolean);

const mark = (id) => {
  links.forEach((link) => {
    const active = link.getAttribute("href")?.endsWith(`#${id}`);
    link.classList.toggle("is-current", active);
    if (active) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
};

if (sections.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) mark(visible.target.id);
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4] },
  );

  sections.forEach((section) => observer.observe(section));
}
