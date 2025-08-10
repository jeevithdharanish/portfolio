import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const animations = {
    'fade-in': isVisible ? 'animate-fade-in' : 'opacity-0',
    'slide-up': isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8',
    'scale-in': isVisible ? 'animate-scale-in' : 'opacity-0 scale-95',
    'slide-left': isVisible ? 'animate-slide-up' : 'opacity-0 translate-x-8',
    'slide-right': isVisible ? 'animate-slide-up' : 'opacity-0 -translate-x-8'
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animations[animation]} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
