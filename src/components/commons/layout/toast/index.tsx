import { ReactElement, useEffect, useState } from 'react';
import { overrideTailwindClasses } from 'tailwind-override';

import './index.scss';

interface ToastProps {
  title: string;
  text: string;
  classes?: string;
}

function Toast({ title, text, classes = '' }: ToastProps): ReactElement {
  const [toast, setToast] = useState<{ duration: number; status: boolean }>({
    duration: 3000,
    status: true,
  });

  const hiddenToast = (): void => {
    setToast({ ...toast, status: false });
  };

  useEffect(() => {
    if (toast.duration) {
      setTimeout(() => {
        setToast({ ...toast, status: false });
      }, toast.duration);
    }
  }, [toast]);

  return (
    <div
      className={overrideTailwindClasses(
        `toast-component-${
          toast.status ? 'show' : 'hidden'
        } flex rounded-md fixed right-3 top-3 bg-gray-600 py-3 px-3 flex-row justify-between items-center w-4/5 container border-solid border-white border
        ${classes}`
      )}
    >
      {/* <div>Icono</div> */}
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs pt-1 font-semibold text-white">{text}</p>
      </div>
      <div className="cursor-pointer" onClick={hiddenToast}>
        {/* <RemoveToast /> */} X
      </div>
    </div>
  );
}

export { ToastProps };
export default Toast;
