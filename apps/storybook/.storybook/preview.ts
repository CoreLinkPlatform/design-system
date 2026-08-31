import type { Preview } from '@storybook/react-vite';
import '../src/styles.css';

const preview: Preview = {
  globalTypes: {
    direction: {
      description: 'Text direction',
      defaultValue: 'rtl',
      toolbar: {
        title: 'Direction',
        items: ['ltr', 'rtl'],
      },
    },
    theme: {
      description: 'Theme mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        items: ['light', 'dark'],
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        dir={context.globals.direction}
        data-theme={context.globals.theme}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
  },
};

export default preview;
