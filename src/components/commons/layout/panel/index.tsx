import React from 'react';

type PanelProps = {
  children: string | React.ReactNode;
  className?: string;
  variant?: '1' | '2' | '3' | '4';
};

const variants = {
  '1': 'col-span-1 p-5 rounded-md bg-red-600',
  '2': 'col-span-2 p-5 rounded-md bg-red-100',
};

const Panel = ({ children, variant = '2', className = '' }: PanelProps): JSX.Element => (
  <div className={`${variants[variant]} ${className}`}>{children}</div>
);

export { PanelProps };
export default Panel;
