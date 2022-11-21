import { useMemo, useCallback, useState } from 'react';

const usePagination = (props) => {
  const { value = 1, totalPages = 10 } = props;
  const [currentPage, setCurrentPage] = useState(value);

  const currentPages = useMemo(() => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, n) => n + 1);

    if (totalPages <= currentPage + 2) {
      return Array.from({ length: 5 }, (_, n) => totalPages - n).reverse();
    }

    if (currentPage > 3 && totalPages > currentPage + 2) {
      const left = Array.from({ length: 2 }, (_, n) => n + currentPage - 2);
      const right = Array.from({ length: 2 }, (_, n) => n + currentPage + 1);
      const range = [...left, currentPage, ...right];
      return range;
    }

    return Array.from({ length: 5 }, (_, n) => n + 1);
  }, [currentPage, totalPages]);

  console.log('total', totalPages, currentPages);

  const handleChangePage = useCallback(
    (pageNum) => () => {
      setCurrentPage(pageNum);
    },
    []
  );

  const handleNextPage = useCallback(() => {
    if (currentPage === totalPages) return;
    setCurrentPage((prevPage) => prevPage + 1);
  }, [currentPage, totalPages]);

  const handleLastPage = useCallback(() => {
    setCurrentPage(totalPages);
  }, [totalPages]);

  const handlePrevPage = useCallback(() => {
    if (currentPage === 1) return;
    setCurrentPage((prevPage) => prevPage - 1);
  }, [currentPage]);

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
