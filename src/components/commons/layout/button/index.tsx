// import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { overrideTailwindClasses } from 'tailwind-override';
import './index.scss';

type ButtonProps = {
  children: string | React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  classes?: string;
  variant?: 'blank' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  type?: 'submit' | 'button' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & HTMLAttributes<HTMLButtonElement>;

const defaultClass = 'focus:outline-none open-sans text-center font-bold w-44 rounded-full';

const variants = {
  blank: '',
  primary:
    'bg-btn-background-primary text-btn-text-primary border border-btn-border-primary hover:shadow-button-default',
  secondary:
    'bg-btn-background-secondary text-btn-text-secondary border border-btn-border-secondary hover:bg-btn-hover-background-secondary',
  // link: 'underline text-btn-indigo font-bold',
  inactive: 'bg-gris-perla text-dark-grey',
};

const sizes = {
  sm: 'py-2 px-1 text-xs',
  md: 'px-3.5 py-2 text-sm h-10',
  lg: 'py-4 px-4 text-lg',
};

const Button = ({
  children,
  classes = '',
  loading = false,
  disabled = false,
  variant = 'primary',
  onClick,
  type = 'submit',
  size = 'md',
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={overrideTailwindClasses(`${defaultClass}
      ${variant && !disabled ? variants[variant] : variants['inactive']}
      ${sizes[size]}
      ${loading ? sizes[size] + ` loading btn-${variant}` : ''}
      ${classes}`)}
    >
      {loading && (
        <>
          <div />
          <div />
          <div />
        </>
      )}
      {!loading && children}
    </button>
  );
};

export { ButtonProps };
export default Button;
