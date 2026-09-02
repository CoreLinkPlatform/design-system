import { useEffect, useRef, useState, type HTMLAttributes } from 'react';
import { useMotionPreference } from './MotionProvider';
export interface AnimatedNumberProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> { value: number; format?: (value: number) => string; duration?: number; }
export function AnimatedNumber({ value, format = String, duration = 320, className = '', ...props }: AnimatedNumberProps) {
  const { reduceMotion } = useMotionPreference(); const previous = useRef(value); const [displayed, setDisplayed] = useState(value);
  useEffect(() => { const from = previous.current; previous.current = value;
    if (reduceMotion || duration <= 0 || typeof requestAnimationFrame !== 'function') { setDisplayed(value); return; }
    let frame = 0; const startedAt = performance.now(); const tick = (now: number) => { const progress = Math.min(1, (now - startedAt) / duration); const eased = 1 - Math.pow(1 - progress, 3); setDisplayed(from + (value - from) * eased); if (progress < 1) frame = requestAnimationFrame(tick); };
    frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame);
  }, [duration, reduceMotion, value]);
  return <span className={`core-animated-number ${className}`.trim()} aria-label={format(value)} {...props}><span aria-hidden="true">{format(displayed)}</span></span>;
}
