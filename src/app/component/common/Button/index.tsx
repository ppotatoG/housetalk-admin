import React from 'react';

import { COLOR_CLASSES } from '@/constants/buttons';

type ButtonColors = 'default' | 'error' | 'warning';
type ButtonSizes = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant: 'filled' | 'outlined';
  color?: ButtonColors;
  text?: string;
  onClick?: () => void;
  padding?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  size?: ButtonSizes;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  color = 'default',
  text,
  onClick,
  padding = 'px-4 py-2',
  type = 'button',
  children,
  size = 'medium',
  className,
}) => {
  const baseClasses = [
    padding,
    className,
    'rounded',
    'focus:outline-none',
    'transition-colors',
    'duration-200',
    'w-fit',
    'ml-auto',
    'hover:opacity-90',
  ].join(' ');

  const sizeClasses = {
    small: 'text-xs !px-2 !py-1',
    medium: '',
    large: 'text-xl',
  };

  const currentColor: ButtonColorClasses = COLOR_CLASSES[color];

  const filledClasses = [
    currentColor.base,
    currentColor.hover,
    currentColor.darkBase,
    currentColor.darkHover,
    currentColor.text,
    currentColor.border,
    currentColor.darkBorder,
  ].join(' ');

  const outlinedClasses = [
    'border',
    currentColor.border,
    currentColor.darkText,
    `dark:text-${color}-600`,
  ].join(' ');

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${
        variant === 'filled' ? filledClasses : outlinedClasses
      }`}
      onClick={onClick}
      type={type}
    >
      {text || children}
    </button>
  );
};

export default Button;
