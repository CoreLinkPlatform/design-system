export const coreTokens = {
  color: {
    brand: { primary: '#168BFF' },
    surface: { default: '#FFFFFF', raised: '#F8FAFC' },
    text: { primary: '#0F172A', secondary: '#475569' }
  },
  radius: { sm: '4px', md: '8px', lg: '12px' }
} as const;

export type CoreTokens = typeof coreTokens;
