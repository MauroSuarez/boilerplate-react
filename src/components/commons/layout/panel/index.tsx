import React from 'react';

type PanelProps = {
  children: string | React.ReactNode;
  className?: string;
  variant?: '1' | '2' | '3' | '4';
};

interface IVariants {
  [key: string]: string;
}

const variants: IVariants = {
  '1': 'col-span-1 p-5 rounded-md bg-white',
  '2': 'col-span-2 p-5 rounded-md bg-white',
};

const Panel = ({ children, variant = '2', className = '' }: PanelProps): JSX.Element => {
  return <div className={`${variants[variant]} ${className}`}>{children}</div>;
};

export { PanelProps };
export default Panel;
