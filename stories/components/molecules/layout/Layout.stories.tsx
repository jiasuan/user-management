import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { GeneralLoadingLayout } from '@/components/molecules/layout/loading';
import { GeneralErrorLayout } from '@/components/molecules/layout/error';

const meta = {
  title: 'Components/Molecules/Layout',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const GeneralLoadingLayoutStory = () => {
  const comp = GeneralLoadingLayout()
  return comp
};

export const GeneralErrorLayoutStory = (props: any) => {
  const comp = GeneralErrorLayout(props)
  return comp
};

GeneralLoadingLayoutStory.storyName = 'General Loading Layout';
GeneralErrorLayoutStory.storyName = 'General Error Layout';
GeneralErrorLayoutStory.args = {
  retryFunction: fn()
}