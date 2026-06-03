import { gsap, ScrollTrigger } from "./config";

/** Hero entrance master timeline */
export function createHeroTimeline(
  container: HTMLElement,
  reducedMotion: boolean,
): gsap.core.Timeline {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  if (reducedMotion) {
    tl.set(container.querySelectorAll("[data-hero-line], [data-hero-cta]"), {
      opacity: 1,
      y: 0,
    });
    return tl;
  }

  tl.from(container.querySelectorAll("[data-hero-line]"), {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
  })
    .from(
      container.querySelectorAll("[data-hero-cta]"),
      { y: 30, opacity: 0, duration: 0.6, stagger: 0.1 },
      "-=0.4",
    )
    .from(
      container.querySelector("[data-hero-scroll]"),
      { opacity: 0, y: 20, duration: 0.5 },
      "-=0.2",
    );

  return tl;
}

/** Staggered card entrance on scroll */
export function animateCardsOnScroll(
  selector: string,
  reducedMotion: boolean,
): ScrollTrigger | null {
  if (reducedMotion || typeof window === "undefined") return null;

  const elements = document.querySelectorAll(selector);
  if (!elements.length) return null;

  gsap.set(elements, { y: 60, opacity: 0 });

  return ScrollTrigger.batch(selector, {
    onEnter: (batch) => {
      gsap.to(batch, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        overwrite: true,
      });
    },
    start: "top 85%",
    once: true,
  });
}

/** Horizontal pinned experience timeline */
export function createHorizontalScroll(
  container: HTMLElement,
  track: HTMLElement,
  reducedMotion: boolean,
): ScrollTrigger | null {
  if (reducedMotion || typeof window === "undefined") return null;

  const scrollWidth = track.scrollWidth - container.offsetWidth;

  return ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: () => `+=${scrollWidth}`,
    pin: true,
    scrub: 1,
    animation: gsap.to(track, {
      x: -scrollWidth,
      ease: "none",
    }),
    invalidateOnRefresh: true,
  });
}

/** Page transition curtain wipe */
export function pageTransitionIn(): gsap.core.Timeline {
  return gsap.timeline().fromTo(
    ".page-transition-curtain",
    { scaleY: 1, transformOrigin: "top" },
    { scaleY: 0, duration: 0.6, ease: "power4.inOut" },
  );
}

export function pageTransitionOut(): Promise<void> {
  return new Promise((resolve) => {
    gsap.to(".page-transition-curtain", {
      scaleY: 1,
      transformOrigin: "bottom",
      duration: 0.5,
      ease: "power4.inOut",
      onComplete: resolve,
    });
  });
}

/** Counter animation for preloader */
export function animateCounter(
  element: HTMLElement,
  end: number,
  duration: number,
  reducedMotion: boolean,
): gsap.core.Tween {
  const obj = { value: 0 };
  if (reducedMotion) {
    element.textContent = `${end}`;
    return gsap.to(obj, { value: end, duration: 0 });
  }
  return gsap.to(obj, {
    value: end,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = `${Math.round(obj.value)}`;
    },
  });
}
