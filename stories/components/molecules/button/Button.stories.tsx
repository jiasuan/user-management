import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CloseBtn from '@/components/molecules/button/close'
import CancelBtn from '@/components/molecules/button/cancel';
import CreateBtn from '@/components/molecules/button/create';
import DeleteBtn from '@/components/molecules/button/delete';
import RetryBtn from '@/components/molecules/button/retry';
import SubmitBtn from '@/components/molecules/button/submit';

const meta = {
  title: 'Components/Molecules/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const CloseBtnStory = (props: any) => {
  const comp = CloseBtn(props)
  return comp
};

CloseBtnStory.storyName = 'Close';
CloseBtnStory.args = {
  label: "Close",
  action: fn()
}

export const CancelBtnStory = (props: any) => {
  const comp = CancelBtn(props)
  return comp
};

CancelBtnStory.storyName = 'Cancel';
CancelBtnStory.args = {
  label: "Cancel",
  action: fn()
}

export const CreateBtnStory = (props: any) => {
  const comp = CreateBtn(props)
  return comp
};

CreateBtnStory.storyName = 'Create';
CreateBtnStory.args = {
  action: fn()
}

export const DeleteBtnStory = (props: any) => {
  const comp = DeleteBtn(props)
  return comp
};

DeleteBtnStory.storyName = 'Delete';
DeleteBtnStory.args = {
  label: "Delete",
  action: fn()
}

export const RetryBtnStory = (props: any) => {
  const comp = RetryBtn(props)
  return comp
};

RetryBtnStory.storyName = 'Retry';
RetryBtnStory.args = {
  label: "Retry",
  action: fn()
}

export const SubmitBtnStory = (props: any) => {
  const comp = SubmitBtn(props)
  return comp
};

SubmitBtnStory.storyName = 'Submit';
SubmitBtnStory.args = {
  label: "Submit",
  formID: "user-form",
}