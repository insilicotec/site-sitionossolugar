
import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Custom hook for detecting when elements enter the viewport
 * Optimized version to prevent memory leaks and improve performance
 */
const useIntersectionObserver = (options = {}): [(element: HTMLElement | null) => void, IntersectionObserverEntry[]] => {
  const [elements, setElements] = useState<HTMLElement[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  
  // Memoize options to prevent unnecessary re-renders
  const memoizedOptions = useRef(options);
  
  useEffect(() => {
    // Clean up previous observer
    if (observer.current) {
      observer.current.disconnect();
    }
    
    observer.current = new IntersectionObserver(observedEntries => {
      setEntries(observedEntries);
    }, memoizedOptions.current);
    
    // Observe all current elements
    elements.forEach(el => {
      if (observer.current && el) {
        observer.current.observe(el);
      }
    });
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements]);
  
  const ref = useCallback((element: HTMLElement | null) => {
    if (element && !elements.includes(element)) {
      setElements(prev => [...prev, element]);
    }
  }, [elements]);
  
  return [ref, entries];
};

export default useIntersectionObserver;
