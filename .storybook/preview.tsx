import React from 'react';
import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: { ...themes.dark, appBg: '#2a2c2e' },
      light: { ...themes.normal, appBg: '#fff' },
    },
    backgrounds: { disable: true },
  },
  decorators: [
    (Story) => {
      const darkMode = useDarkMode();

      return (
        <div
          style={{
            width: '100%',
            height: '100vh',
            background: darkMode ? '#000' : '#fff',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
