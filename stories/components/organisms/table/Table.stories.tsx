import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import TableComp from '@/components/organisms/table'

const meta = {
  title: 'Components/Organisms/Table',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const TableCompStory = (props: any) => {
  const comp = TableComp(props)
  return comp
};

TableCompStory.storyName = 'Table';
TableCompStory.args = {
  data: [{name: "John Doe", username: "johndoe", email: "Johndoe@email.com"},{name: "Rose", username: "rose", email: "rose@email.com"}],
  header: [{
    key: "name",
    label: "Name",
    sort: true
  },
  {
    key: "username",
    label: "Username",
    sort: true
  },
  {
    key: "email",
    label: "Email",
    sort: true
  },],
  editAction: fn(),
  deleteAction: fn(),
}
