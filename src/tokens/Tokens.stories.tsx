import type { Meta, StoryObj } from '@storybook/react';
import { coreTokens } from './generated';

const meta = { title: 'Foundations/Runtime tokens', parameters: { layout: 'padded' } } satisfies Meta;
export default meta; type Story = StoryObj<typeof meta>;
const swatches = [
  ['Core Cyan', coreTokens.color.brand.cyan],
  ['Core Blue', coreTokens.color.brand.blue],
  ['Core Violet', coreTokens.color.brand.violet],
] as const;

export const CanonicalBrandAndShape: Story = { render: () => <div className="core-root" dir="ltr" lang="en" style={{ display: 'grid', gap: 24, padding: 24 }}>
  <section><h2>Canonical brand anchors</h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>{swatches.map(([name, value]) => <div key={name} style={{ border: '1px solid var(--core-color-border-default)', borderRadius: 'var(--core-radius-md)', overflow: 'hidden' }}><div style={{ blockSize: 72, background: value }} /><div style={{ padding: 12 }}><strong>{name}</strong><br /><code>{value}</code></div></div>)}</div></section>
  <section><h2>Radius: 4 / 8 / 12px</h2><div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>{Object.entries(coreTokens.radius).map(([name, value]) => <div key={name} style={{ inlineSize: 120, blockSize: 72, display: 'grid', placeItems: 'center', border: '1px solid var(--core-color-border-strong)', borderRadius: value }}>{name}: {value}</div>)}</div></section>
</div> };

export const PersianRTLAndDark: Story = { parameters: { themes: { themeOverride: 'dark' } }, render: () => <div className="core-root" dir="rtl" lang="fa" style={{ display: 'grid', gap: 16, padding: 24 }}><h2>توکن‌های معنایی فارسی</h2><p>رنگ‌ها، فاصله‌ها و شکل‌ها در هر دو جهت و تم قرارداد یکسان دارند.</p><button className="core-button core-button--primary core-button--md">اقدام اصلی</button></div> };
