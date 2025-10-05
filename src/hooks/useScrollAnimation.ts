'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.3, rootMargin = '-100px 0px', triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: [0, threshold],
        rootMargin,
      }
    );

    // Add a small delay before observing to ensure elements are positioned
    const timeoutId = setTimeout(() => {
      observer.observe(currentRef);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.unobserve(currentRef);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}