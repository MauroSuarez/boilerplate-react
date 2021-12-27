import { useState } from 'react';

import './index.scss';

interface PillProps {
  items?: undefined | string[];
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
}

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

const Pill = ({ items = undefined, variant = 'primary' }: PillProps): JSX.Element => {
  const states = [
    'all',
    'onPreparation',
    'confirmed',
    'onTheWay',
    'toWithdraw',
    'delivered',
    'canceled',
  ];

  const [selected, setSelected] = useState<string>('');

  return (
    <div className="stateFilter overflow-x-scroll whitespace-nowrap">
      {(items ?? states).map((state) => (
        <div
          key={state}
          onClick={() => setSelected(state)}
          className={`${
            state === selected ? 'statePill--selected' : 'statePill'
          } text-sm mb-2 inline-block`}
        >
          {state}
        </div>
      ))}
    </div>
  );
};

export { PillProps };
export default Pill;
