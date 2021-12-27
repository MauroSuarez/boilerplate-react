import React from 'react';
import { overrideTailwindClasses } from 'tailwind-override';

type TypographyProps = {
  classes?: string;
  children?: string;
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
};

const defaultClass = '';

interface IVariants {
  [key: string]: string;
}

const variants: IVariants = {
  primary: 'bg-green-100 text-red-700',
  secondary: '',
  tertiary: '',
  quaternary: '',
  quinary: '',
};

const Typography = ({
  component = 'p',
  children,
  classes = '',
  variant = 'primary',
}: TypographyProps): JSX.Element => {
  const objElement: Record<string, JSX.Element> = {
    h1: (
      <h1 className={overrideTailwindClasses(`${defaultClass} ${variants[variant]} ${classes}`)}>
        {children}
      </h1>
    ),
    h2: (
      <h2 className={overrideTailwindClasses(`${defaultClass} ${variants[variant]} ${classes}`)}>
        {children}
      </h2>
    ),
    h3: (
      <h3 className={overrideTailwindClasses(`${defaultClass} ${variants[variant]} ${classes}`)}>
        {children}
      </h3>
    ),
    h4: (
      <h4 className={overrideTailwindClasses(`${defaultClass} ${variants[variant]} ${classes}`)}>
        {children}
      </h4>
    ),
    h5: (
      <h5 className={overrideTailwindClasses(`${defaultClass} ${variants[variant]} ${classes}`)}>
        {children}
      </h5>
    ),
    h6: (
      <h6 className={overrideTailwindClasses(`${defaultClass} ${variants[variant]} ${classes}`)}>
        {children}
      </h6>
    ),
    p: (
      <p className={overrideTailwindClasses(`${defaultClass} ${variants[variant]} ${classes}`)}>
        {children}
      </p>
    ),
  };

  return objElement[component];
};

export { TypographyProps };
export default Typography;
