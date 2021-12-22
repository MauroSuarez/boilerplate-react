import React from 'react';
import { overrideTailwindClasses } from 'tailwind-override';

type SeparatorProps = {
  classes?: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
};

const defaultClass = 'w-full h-1 border-b';

interface IVariants {
  [key: string]: string;
}

const variants: IVariants = {
  primary: 'border-red-700',
  secondary: '',
  tertiary: '',
  quaternary: '',
  quinary: '',
};

const Separator = ({ variant = 'primary', classes = '' }: SeparatorProps): JSX.Element => {
  return (
    <div className={overrideTailwindClasses(`${defaultClass} ${variants[variant]} ${classes}`)} />
  );
};

export { SeparatorProps };
export default Separator;
