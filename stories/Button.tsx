import React, { ReactNode } from 'react';
import './button.css';
import ContainedBtn from '@/components/atoms/button/contained';
import { ButtonProps } from '@/interfaces';

/**
 * Contained button component used for user interactions. Fundemantal component for action buttons etc submit, delete, retry.
 */
export const Button = ({
  backgroundColor,
  label,
  leftIcon,
  rightIcon,
  action,
  ...props
}: ButtonProps) => {
  return (
    <ContainedBtn label={label} backgroundColor={backgroundColor}/>
  );
};
