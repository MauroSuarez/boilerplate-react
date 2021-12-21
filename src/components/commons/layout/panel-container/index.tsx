import React from 'react';

type PanelContainerProps = {
  children: string | React.ReactNode;
  className?: string;
};

const defaultClass =
  'bg-transparent flex grid border h-80 lg:grid-cols-3 mt-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 lg:gap-4 md:gap-1 sm:gap-0 gap-0';

const PanelContainer = ({ children, className = '' }: PanelContainerProps): JSX.Element => {
  return <div className={`${defaultClass} ${className}`}>{children}</div>;
};

export { PanelContainerProps };
export default PanelContainer;
