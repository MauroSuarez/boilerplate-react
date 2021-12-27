import React, { HTMLAttributes } from 'react';
import { overrideTailwindClasses } from 'tailwind-override';

import DropDown, { IDropDown } from './drop-down';
import './index.scss';

type ButtonMoreProps = {
  children?: React.ReactNode;
  items: IDropDown[];
  disabled?: boolean;
  loading?: boolean;
  classes?: string;
  variant?: 'blank' | 'primary' | 'secondary';
  type?: 'submit' | 'button' | 'reset';
  open: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & HTMLAttributes<HTMLButtonElement>;

const defaultClass = 'focus:outline-none open-sans text-center font-bold w-auto';

const variants = {
  blank: '',
  primary: 'text-btn-text-primary',
  secondary: 'text-btn-text-secondary',
};

const ButtonMore = ({
  children = undefined,
  items,
  classes = '',
  disabled = false,
  variant = 'primary',
  open = false,
  onClick,
}: ButtonMoreProps): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={overrideTailwindClasses(`${defaultClass}
        ${variant && variants[variant]}
        ${disabled ? 'cursor-default' : ''}
        ${classes}`)}
    >
      {children ?? '···'}
      {open && <DropDown items={items} onBlur={onClick} />}
    </button>
  );
};

export { ButtonMoreProps };
export default ButtonMore;
