import { useEffect, useState } from 'react';

/**
 * Tracks the user's `prefers-reduced-motion` setting so animations can be
 * toned down or skipped entirely. Returns `true` when motion should be reduced.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return reduced;
}
