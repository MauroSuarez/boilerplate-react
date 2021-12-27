import { overrideTailwindClasses } from 'tailwind-override';

import './index.scss';

interface PaginatorProps {
  page: number;
  maxPage: number;
  setPage: (value: number) => void;
}

const Paginator = ({ setPage, page, maxPage }: PaginatorProps) => {
  const PageNumber = ({
    number,
    symbol,
    isActive,
    setPage,
  }: {
    number: number;
    symbol?: string;
    isActive?: boolean;
    setPage?: (value: number) => void;
  }) => {
    return (
      <div
        role="button"
        className={overrideTailwindClasses(
          `paginator__number${symbol ? '--symbol' : ''}${
            isActive ? '--active' : ''
          } text-black text-center h-6 w-6 rounded-full`
        )}
        onClick={() => {
          if (number) setPage(number);
        }}
      >
        {symbol || number}
      </div>
    );
  };

  return (
    <div className={`paginator flex justify-center sm:justify-end mb-4`}>
      {page > 1 && <PageNumber number={page - 1} symbol="<" setPage={setPage} />}
      {page - 2 > 0 && <PageNumber number={page - 2} setPage={setPage} />}
      {page - 1 > 0 && <PageNumber number={page - 1} setPage={setPage} />}
      <PageNumber number={page} isActive={true} setPage={setPage} />
      {page + 1 <= maxPage && <PageNumber number={page + 1} setPage={setPage} />}
      {page + 2 <= maxPage && <PageNumber number={page + 2} setPage={setPage} />}
      {page < maxPage && maxPage >= 4 && (
        <PageNumber number={page + 1} symbol=">" setPage={setPage} />
      )}
    </div>
  );
};

export { PaginatorProps };
export default Paginator;
