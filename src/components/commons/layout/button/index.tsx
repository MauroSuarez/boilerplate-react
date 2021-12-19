// import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import './index.scss';

type ButtonProps = {
  children: string | React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  theme?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button' | 'reset';
} & HTMLAttributes<HTMLButtonElement>;

const GLOBAL_THEMES = {
  blank: '',
  primary: 'bg-white text-cyan-primary border border-cyan-primary hover:shadow-button-default',
  secondary: 'bg-cyan-primary text-white hover:bg-cyan-shaded',
  tertiary: 'bg-btn-indigo text-white',
  quaternary: 'bg-white text-btn-indigo border border-btn-indigo,',
  quinary: 'bg-white text-btn-indigo border border-btn-indigo,',
  link: 'underline text-btn-indigo font-bold text-sm',
  inactive: 'bg-gris-perla text-dark-grey',
};

const Button = ({
  children,
  className = '',
  loading = false,
  disabled = false,
  theme = 'primary',
  onClick,
  type = 'submit',
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-3xl font-bold py-2 px-5 ${
        theme && !disabled ? GLOBAL_THEMES[theme] : GLOBAL_THEMES['inactive']
      }
      ${loading ? 'btn--loading' : ''}
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
