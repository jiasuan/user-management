import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import AppBar from '@/components/molecules/appbar';
import SubmitButton from '@/components/molecules/button/submit';
import DeleteBtn from '@/components/molecules/button/delete';

const meta = {
  title: 'Components/Molecules/Appbar',
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const AppBarStory = (props: any) => {
  const comp = AppBar(props)
  return comp
};

AppBarStory.storyName = 'App Bar';
AppBarStory.args = {
  title: "User Module",
  backTo: "back to path",
  actionBtn1: <SubmitButton formID="user-form" label={"Save Changes"}/>,
  actionBtn2: <DeleteBtn action={()=>{}} label={"Delete"}/>
}
