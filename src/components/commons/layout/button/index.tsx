// import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import './index.scss';

type ButtonProps = {
  children: string | React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  variant?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button' | 'reset';
} & HTMLAttributes<HTMLButtonElement>;

const defaultClass = 'focus:outline-none open-sans text-center font-bold w-44 rounded-full';

const variants = {
  blank: '',
  primary:
    'bg-primary-background text-cyan-primary border outline-white border-cyan-primary hover:shadow-button-default',
  secondary: 'bg-cyan-primary text-white hover:bg-cyan-shaded',
  tertiary: 'bg-btn-indigo text-white',
  quaternary: 'bg-white text-btn-indigo border border-btn-indigo,',
  quinary: 'bg-white text-btn-indigo border border-btn-indigo,',
  link: 'underline text-btn-indigo font-bold',
  inactive: 'bg-gris-perla text-dark-grey',
};

const sizes = {
  sm: 'py-2 px-4 text-xs',
  md: 'px-3.5 py-2 text-sm',
  lg: 'py-3 px-8 text-lg',
};

const Button = ({
  children,
  className = '',
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
      className={`${defaultClass}
      ${variant && !disabled ? variants[variant] : variants['inactive']}
      ${sizes[size]}
      ${loading ? sizes[size] + ` loading btn-${variant}` : ''}
      ${className}`}
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
