import { useEffect, useRef, useCallback } from 'react';

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'fade';

interface UseRevealOptions {
  variant?: RevealVariant;
  stagger?: boolean;
  staggerDelay?: number; // ms per item
  threshold?: number;
  /** Extra delay before animation starts (ms) */
  delay?: number;
}

/**
 * Observes a container element; when it enters the viewport it adds
 * a `.revealed` class (and optionally staggers children marked with
 * `[data-reveal-item]`).
 */
export const useReveal = ({
  variant = 'up',
  stagger = false,
  staggerDelay = 80,
  threshold = 0.15,
  delay = 0,
}: UseRevealOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  const reveal = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const doReveal = () => {
      el.classList.add('revealed');

      if (stagger) {
        const items = el.querySelectorAll('[data-reveal-item]');
        items.forEach((item, i) => {
          (item as HTMLElement).style.transitionDelay = `${i * staggerDelay}ms`;
          item.classList.add('revealed');
        });
      }
    };

    if (delay > 0) {
      setTimeout(doReveal, delay);
    } else {
      doReveal();
    }
  }, [stagger, staggerDelay, delay]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set the variant as a data attribute so CSS can pick it up
    el.setAttribute('data-reveal', variant);

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.setAttribute('data-reveal', 'fade');
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, threshold, reveal]);

  return ref;
};
