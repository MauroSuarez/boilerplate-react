import React from 'react';
import { overrideTailwindClasses } from 'tailwind-override';

type AlertProps = {
  children: string | React.ReactNode;
  classes?: string;
  variant?: 'warning' | 'error' | 'info' | 'success';
};

interface IVariants {
  [key: string]: string;
}

const variants: IVariants = {
  warning: 'border-red-400',
  error: 'border-red-600',
  info: 'border-blue-600',
  success: 'border-green-600',
};

const Alert = ({ children, variant = 'info', classes = '' }: AlertProps): JSX.Element => {
  return (
    <div
      className={overrideTailwindClasses(
        `container px-4 py-4 rounded border-solid border-l-4 ${variants[variant]} bg-white shadow-md shadow-gray-400 ${classes}`
      )}
    >
      <div className="text-xs">{children}</div>
    </div>
  );
};

export { AlertProps };
export default Alert;
