import { useEffect, useRef } from 'react';

type AnimationType = 'fade-in' | 'slide-up' | 'scale-in';

interface UseScrollAnimationProps {
  animationType: AnimationType;
  threshold?: number;
  delay?: number;
}

export const useScrollAnimation = ({ animationType, threshold = 0.1, delay = 0 }: UseScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0) scale(1)';
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Set initial styles
    element.style.opacity = '0';
    element.style.transition = 'all 0.5s ease-out';
    
    if (animationType === 'slide-up') {
      element.style.transform = 'translateY(20px)';
    } else if (animationType === 'scale-in') {
      element.style.transform = 'scale(0.95)';
    }

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animationType, threshold, delay]);

  return elementRef;
}; 