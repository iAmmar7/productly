import clsx from 'clsx';
import { useEffect } from 'react';
import { motion, LayoutGroup } from 'framer-motion';

import { Icon } from '../Icon';
import PageButton from './PageButton';
import { usePagination } from '../../hooks';

function Pagination(props) {
  const { currentPage: currentPageProp = 1, totalPages = 10, onChange } = props;
  const {
    currentPage,
    currentPages,
    handleChangePage,
    handleNextPage,
    handleLastPage,
    handleFirstPage,
    handlePrevPage,
  } = usePagination(currentPageProp, totalPages);

  useEffect(() => {
    onChange && onChange(currentPage);
  }, [currentPage, onChange]);

  return (
    <LayoutGroup>
      <ol className='flex items-center gap-x-2'>
        <li className='p-0 m-0'>
          <PageButton onClick={handleFirstPage} disabled={currentPage < 2}>
            <Icon icon='ri-arrow-left-s-line' />
            <Icon icon='ri-arrow-left-s-line' className='-ml-3' />
          </PageButton>
        </li>
        <li className='p-0 m-0'>
          <PageButton onClick={handlePrevPage} disabled={currentPage < 2}>
            <Icon icon='ri-arrow-left-s-line' />
          </PageButton>
        </li>
        {currentPages.map((page) => (
          <li key={page} className='p-0 m-0'>
            <PageButton
              className={clsx('relative', currentPage === page ? 'text-black' : 'text-white')}
              onClick={handleChangePage(page)}
            >
              {currentPage === page && (
                <motion.span
                  className='absolute bg-white h-8 w-6 -z-10'
                  layoutId='pagination'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              {page}
            </PageButton>
          </li>
        ))}
        <li className='p-0 m-0'>
          <PageButton onClick={handleNextPage} disabled={currentPage >= totalPages}>
            <Icon icon='ri-arrow-right-s-line' />
          </PageButton>
        </li>
        <li className='p-0 m-0'>
          <PageButton onClick={handleLastPage} disabled={currentPage >= totalPages}>
            <Icon icon='ri-arrow-right-s-line' />
            <Icon icon='ri-arrow-right-s-line' className='-ml-3' />
          </PageButton>
        </li>
      </ol>
    </LayoutGroup>
  );
}

export default Pagination;
