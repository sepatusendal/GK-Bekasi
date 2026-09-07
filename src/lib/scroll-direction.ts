// Bang Wira - github.com/sepatusendal
let lastY = 0;
let direction: "up" | "down" = "down";
let initialized = false;

function handleScroll() {
  const y = window.scrollY;
  if (y > lastY + 2) direction = "down";
  else if (y < lastY - 2) direction = "up";
  lastY = y;
}

export function initScrollDirectionTracker() {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;
  lastY = window.scrollY;
  window.addEventListener("scroll", handleScroll, { passive: true });
}

export function getScrollDirection() {
  return direction;
}
