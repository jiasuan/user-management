import type { Meta, StoryObj } from '@storybook/react';
// stories/Icons.stories.js

import React from 'react';
import { LoadingIndicator, CircleAlertIcon, ArrowLeftIcon, AddIcon, ViewIcon, EditIcon, DeleteIcon, CheckCircleIcon } from '@/components/atoms/icons'; // Adjust the import based on the location of your Icons component file

export default {
  title: 'Components/Atoms/Icons',
  component: LoadingIndicator,
};

export const CircleAlertIconStory = () => {
  const IconComp = CircleAlertIcon();
  return IconComp
};

export const LoadingIndicatorStory = () => {
  const IconComp = LoadingIndicator();
  return IconComp
};

export const ArrowLeftIconStory = () => {
  const IconComp = ArrowLeftIcon();
  return IconComp
};

export const AddIconStory = () => {
  const IconComp = AddIcon();
  return IconComp
};

export const ViewIconStory = () => {
  const IconComp = ViewIcon();
  return IconComp
};

export const EditIconStory = () => {
  const IconComp = EditIcon();
  return IconComp
};

export const DeleteIconStory = () => {
  const IconComp = DeleteIcon();
  return IconComp
};


export const CheckCircleIconStory = () => {
  const IconComp = CheckCircleIcon();
  return IconComp
};

CircleAlertIconStory.storyName = 'Circle Alert';
LoadingIndicatorStory.storyName = 'Loading Indicator';
ArrowLeftIconStory.storyName = 'Arrow Left';
AddIconStory.storyName = 'Add';
ViewIconStory.storyName = 'View';
EditIconStory.storyName = 'Edit';
DeleteIconStory.storyName = 'Delete';
CheckCircleIconStory.storyName = 'Check Circle';
