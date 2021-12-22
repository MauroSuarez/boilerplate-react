import React from 'react';
import { overrideTailwindClasses } from 'tailwind-override';

type PanelContainerProps = {
  children: string | React.ReactNode;
  classes?: string;
  variant: 'cols' | 'rows';
  count: string;
};

const defaultClass = 'bg-transparent grid h-auto lg:gap-4 md:gap-1 sm:gap-0 gap-0 items-start';

interface IVariants {
  [key: string]: string;
}

const PanelContainer = ({
  children,
  classes = '',
  variant = 'cols',
  count = '3',
}: PanelContainerProps): JSX.Element => {
  const variants: IVariants = {
    cols: `lg:grid-cols-${count} md:grid-cols-${count} sm:grid-cols-${count} grid-cols-1`,
    rows: '',
  };
  return (
    <div className={overrideTailwindClasses(`${defaultClass} ${variants[variant]} ${classes}`)}>
      {children}
    </div>
  );
};

export { PanelContainerProps };
export default PanelContainer;
