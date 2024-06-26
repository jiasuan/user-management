import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import UserFormComp from '@/components/organisms/form/userForm'
import { Provider } from "react-redux";
import { makeStore } from '@/lib/redux/store';
const meta = {
  title: 'Components/Organisms/Form/User Form',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const store = makeStore();
      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ],
} satisfies Meta<typeof UserFormComp>;


export default meta;

export const UserFormCompStory = (props: any) => {
  const comp = UserFormComp(props)
  return comp
};

UserFormCompStory.storyName = 'User Form';
UserFormCompStory.args = {
  initialValues : { name: '', username: '', phone: '', email: ''},
  handleSubmit: fn()
}
