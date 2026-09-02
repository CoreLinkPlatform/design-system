import { describe, expect, it } from 'vitest';
import { normalizeProgress } from './Progress';
describe('normalizeProgress', () => {
  it('clamps transitions without changing layout ranges', () => { expect(normalizeProgress(-10)).toBe(0); expect(normalizeProgress(50)).toBe(50); expect(normalizeProgress(140)).toBe(100); });
  it('supports custom ranges and invalid input', () => { expect(normalizeProgress(4, 2, 6)).toBe(4); expect(normalizeProgress(Number.NaN, 2, 6)).toBe(2); expect(normalizeProgress(3, 5, 5)).toBe(5); });
});
