import { useMemo, useCallback, useState } from 'react';
import { slice } from '../lib/utils';

const usePagination = (props) => {
  const { currentPage: currentPageProp = 1, totalPages = 10 } = props;
  const [currentPage, setCurrentPage] = useState(currentPageProp);

  const totalPagesView = useMemo(() => Array.from({ length: totalPages }, (_, n) => n + 1), [totalPages]);

  const currentPages = useMemo(() => {
    if (totalPages <= 5) return totalPagesView;

    if (currentPage >= totalPages - 1) {
      const range = slice(totalPagesView, totalPages - 5, totalPages);
      return range;
    }

    const left = currentPage - 2;
    const start = left > 0 ? left : 1;
    const right = start + 4;
    const end = right < totalPages ? right : totalPages;
    const range = slice(totalPagesView, start - 1, end);
    return range;
  }, [currentPage, totalPages, totalPagesView]);

  const handleChangePage = useCallback(
    (pageNum) => () => {
      setCurrentPage(pageNum);
    },
    []
  );

  const handleNextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  const handleLastPage = useCallback(() => {
    setCurrentPage(totalPages);
  }, [totalPages]);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage - 1);
  }, []);

  const handleFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  return {
    currentPage,
    currentPages,
    handleChangePage,
    handleNextPage,
    handleLastPage,
    handleFirstPage,
    handlePrevPage,
  };
};

export default usePagination;
