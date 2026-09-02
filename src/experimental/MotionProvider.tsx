import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';

export type MotionPreference = 'system' | 'reduce' | 'full';
export type ResolvedMotionPreference = 'reduce' | 'full';

interface MotionContextValue { preference: MotionPreference; resolvedPreference: ResolvedMotionPreference; reduceMotion: boolean; }
const MotionContext = createContext<MotionContextValue>({ preference: 'system', resolvedPreference: 'full', reduceMotion: false });

function systemPreference(): ResolvedMotionPreference {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return 'full';
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduce' : 'full';
}

export interface MotionProviderProps extends PropsWithChildren { preference?: MotionPreference; }

export function MotionProvider({ preference = 'system', children }: MotionProviderProps) {
  const [system, setSystem] = useState<ResolvedMotionPreference>(systemPreference);
  useEffect(() => {
    if (preference !== 'system' || typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setSystem(media.matches ? 'reduce' : 'full');
    update(); media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, [preference]);
  const resolvedPreference = preference === 'system' ? system : preference;
  const value = useMemo(() => ({ preference, resolvedPreference, reduceMotion: resolvedPreference === 'reduce' }), [preference, resolvedPreference]);
  return <MotionContext.Provider value={value}><div data-core-motion={resolvedPreference}>{children}</div></MotionContext.Provider>;
}

export function useMotionPreference() { return useContext(MotionContext); }
