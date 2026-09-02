import { describe, expect, it } from 'vitest';
import { coreTokens } from './generated';

describe('canonical runtime tokens', () => {
  it('retains the approved brand and shape baseline', () => {
    expect(coreTokens.color.brand).toEqual({ cyan: '#00C2FF', blue: '#168BFF', violet: '#7B5CFF' });
    expect(coreTokens.radius).toEqual({ sm: '4px', md: '8px', lg: '12px' });
    expect(Object.values(coreTokens.space)).toEqual(['4px', '8px', '12px', '16px', '20px', '24px', '32px', '40px', '48px', '64px']);
  });

  it('keeps light and dark role sets structurally aligned', () => {
    expect(Object.keys(coreTokens.color.light.surface)).toEqual(Object.keys(coreTokens.color.dark.surface));
    expect(Object.keys(coreTokens.color.light.status)).toEqual(Object.keys(coreTokens.color.dark.status));
  });
});
