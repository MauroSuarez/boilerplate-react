import React from 'react';

type PanelContainerProps = {
  children: string | React.ReactNode;
  className?: string;
  variant: 'cols' | 'rows';
  count: string;
};

const defaultClass = 'bg-transparent flex grid h-auto lg:gap-4 md:gap-1 sm:gap-0 gap-0 items-start';

interface IVariants {
  [key: string]: string;
}

const PanelContainer = ({
  children,
  className = '',
  variant = 'cols',
  count = '3',
}: PanelContainerProps): JSX.Element => {
  const variants: IVariants = {
    cols: `mt-4 lg:grid-cols-${count} md:grid-cols-${count} sm:grid-cols-1 grid-cols-1`,
    rows: '',
  };
  return <div className={`${defaultClass} ${variants[variant]} ${className}`}>{children}</div>;
};

export { PanelContainerProps };
export default PanelContainer;
