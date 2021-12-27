import React, { HTMLAttributes } from 'react';
import { overrideTailwindClasses } from 'tailwind-override';

type LinkProps = {
  children: string | React.ReactNode;
  disabled?: boolean;
  classes?: string;
  variant?: 'blank' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & HTMLAttributes<HTMLButtonElement>;

const defaultClass = 'focus:outline-none open-sans text-center underline font-bold w-auto';

const variants = {
  blank: '',
  primary: 'text-blue-600 cursor-pointer',
  secondary: '',
  inactive: 'bg-gris-perla text-dark-grey cursor-default',
};

const sizes = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-lg',
};

const Link = ({
  children,
  classes = '',
  disabled = false,
  variant = 'blank',
  onClick,
  type = 'button',
  size = 'md',
}: LinkProps): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={overrideTailwindClasses(`${defaultClass}
      ${variant && !disabled ? variants[variant] : variants['inactive']}
      ${sizes[size]}
      ${classes}`)}
    >
      {children}
    </button>
  );
};

export { LinkProps };
export default Link;
