import { useEffect, useState } from 'react';

import './index.scss';

interface SwitchProps {
  text: string[];
  onChange: (value: boolean) => void;
}

const Switch = ({ onChange, text = ['On', 'Off'] }: SwitchProps): JSX.Element => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    onChange(isOnline);
  }, [isOnline, onChange]);

  return (
    <div className="typeSelector flex flex-row relative">
      <div
        onClick={() => setIsOnline(true)}
        className="typeSelector__option text-center text-sm py-3"
      >
        <p className="relative">{text[0]}</p>
      </div>
      <div
        onClick={() => setIsOnline(false)}
        className="typeSelector__option text-center text-sm py-3"
      >
        <p className="relative">{text[1]}</p>
      </div>
      <div className={`typeSelector__selected absolute ${!isOnline && 'right-0'}`}></div>
    </div>
  );
};

export { SwitchProps };
export default Switch;
