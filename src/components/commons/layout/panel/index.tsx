import React from 'react';
import { overrideTailwindClasses } from 'tailwind-override';

import Separator from '../separator';

type PanelProps = {
  children: string | React.ReactNode;
  classes?: string;
  variant?: '1' | '2' | '3' | '4';
  title?: React.ReactNode;
  separator?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
};

interface IVariants {
  [key: string]: string;
}

const variants: IVariants = {
  '1': 'col-span-1 p-5 rounded-md bg-white',
  '2': 'col-span-2 p-5 rounded-md bg-white',
};

const Panel = ({
  children,
  variant = '2',
  classes = '',
  title,
  separator,
}: PanelProps): JSX.Element => {
  return (
    <div className={overrideTailwindClasses(`${variants[variant]} ${classes}`)}>
      {title && <div className="tw-container">{title}</div>}
      {separator && (
        <div className="flex tw-container mt-1 mb-4">
          <Separator variant={separator} />
        </div>
      )}
      {children}
    </div>
  );
};

export { PanelProps };
export default Panel;
