
import { useState, useRef, useEffect } from 'react';

/**
 * Custom hook for detecting when elements enter the viewport
 */
const useIntersectionObserver = (options = {}): [(element: HTMLElement | null) => void, IntersectionObserverEntry[]] => {
  const [elements, setElements] = useState<HTMLElement[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observer.current = new IntersectionObserver(observedEntries => {
      setEntries(observedEntries);
    }, options);
    
    elements.forEach(el => {
      if (observer.current) {
        observer.current.observe(el);
      }
    });
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements, options]);
  
  const ref = (element: HTMLElement | null) => {
    if (element && !elements.includes(element)) {
      setElements(prev => [...prev, element]);
    }
  };
  
  return [ref, entries];
};

export default useIntersectionObserver;
