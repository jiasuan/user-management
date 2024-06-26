import type { Preview, Parameters } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const parameters: Parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Atoms','Molecules', 'Organisms'],
      locales: 'en-US',
  }
  }
};

export default preview;
