import React from 'react';

import { COLOR_CLASSES } from '@/constants/buttons';

type ButtonColors = 'default' | 'error' | 'warning';

interface ButtonProps {
  variant: 'filled' | 'outlined';
  color?: ButtonColors;
  text: string;
  onClick?: () => void;
  padding?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  color = 'default',
  text,
  onClick,
  padding = 'px-4 py-2',
}) => {
  const baseClasses = [
    padding,
    'rounded',
    'focus:outline-none',
    'transition-colors',
    'duration-200',
    'w-fit',
    'ml-auto',
  ].join(' ');

  const currentColor: ButtonColorClasses = COLOR_CLASSES[color];

  const filledClasses = [
    currentColor.base,
    currentColor.hover,
    currentColor.darkBase,
    currentColor.darkHover,
    currentColor.text,
    currentColor.border,
    currentColor.darkBorder,
    'hover:opacity-90',
  ].join(' ');

  const outlinedClasses = [
    'border',
    currentColor.text,
    `dark:text-${color}-600`,
    `hover:bg-${color}-50`,
    `dark:hover:bg-${color}-600`,
  ].join(' ');

  return (
    <button
      className={`${baseClasses} ${
        variant === 'filled' ? filledClasses : outlinedClasses
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
