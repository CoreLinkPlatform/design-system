import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Foundation/Overview',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div style={{ direction: 'rtl', fontFamily: 'Noto Sans, sans-serif' }}>
      <h2>Core Design System</h2>
      <p>Foundation layer: tokens, themes, and components.</p>
    </div>
  ),
};
