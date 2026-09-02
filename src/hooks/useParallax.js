import { useEffect, useRef } from 'react';

export function useParallax(speed = 0.5) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let rafId = null;

    const updatePosition = () => {
      const scrollY = window.scrollY;
      const offset = scrollY * speed;
      element.style.transform = `translate3d(0, ${offset}px, 0)`;
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updatePosition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    updatePosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [speed]);

  return ref;
}