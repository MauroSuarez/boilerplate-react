import React from 'react';
import { overrideTailwindClasses } from 'tailwind-override';

type StatusLabelProps = {
  classes?: string;
  children?: string | React.ReactNode;
  variant: 'success' | 'info' | 'warning' | 'error';
};

const defaultClass =
  'rounded-md h-6 w-auto flex items-center justify-center py-1 text-xs font-semibold leading-none p-2 inline-flex';

interface IVariants {
  [key: string]: string;
}

const variants: IVariants = {
  success: 'bg-green-100 text-red-700',
  info: '',
  warning: '',
  error: '',
};

const StatusLabel = ({
  variant = 'success',
  children,
  classes = '',
}: StatusLabelProps): JSX.Element => {
  return (
    <span className={overrideTailwindClasses(`${defaultClass} ${variants[variant]} ${classes}`)}>
      {children}
    </span>
  );
};

export { StatusLabelProps };
export default StatusLabel;
