import React, { useEffect, ReactElement, useRef } from 'react';

import './index.scss';

export interface IDropDown {
  text: string;
  href?: string;
  onClick?(): void;
  isVisible?: boolean;
}

const DropDown = ({
  items,
  onBlur,
}: {
  items: IDropDown[];
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
}): ReactElement => {
  const filteredItems = items.filter((item) => item.isVisible);

  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(
      ev: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>
    ) {
      if (wrapperRef.current && !wrapperRef.current.contains(ev.target)) {
        onBlur;
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, onBlur]);

  return (
    <div
      ref={wrapperRef}
      onBlur={onBlur}
      tabIndex={0}
      className={`right-4 block dropDown absolute w-48 bg-white rounded-md shadow-xl z-20`}
    >
      {filteredItems.map((item: IDropDown, i) => {
        const Item = () =>
          item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer px-4 h-9 flex items-center text-xs bg-transparent hover:text-gray-900 hover:bg-gray-200"
            >
              {item.text}
            </a>
          ) : (
            <span
              role="button"
              onMouseDown={item.onClick}
              className="cursor-pointer px-4 h-9 flex items-center text-xs bg-transparent hover:text-gray-900 hover:bg-gray-200"
            >
              {item.text}
            </span>
          );

        return <Item key={i} />;
      })}
    </div>
  );
};

export default DropDown;
