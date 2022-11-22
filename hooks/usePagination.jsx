import { useMemo, useCallback, useState, useEffect } from 'react';

const usePagination = (props) => {
  const { value = 1, totalPages = 10, onChange } = props;
  const [currentPage, setCurrentPage] = useState(value);

  useEffect(() => {
    setCurrentPage(value);
  }, [value]);

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

  const handleChangePage = useCallback(
    (pageNum) => () => {
      setCurrentPage(pageNum);
      onChange(pageNum);
    },
    [onChange]
  );

  const handleNextPage = useCallback(() => {
    if (currentPage === totalPages) return;
    setCurrentPage((prevPage) => prevPage + 1);
    onChange(currentPage + 1);
  }, [currentPage, onChange, totalPages]);

  const handleLastPage = useCallback(() => {
    setCurrentPage(totalPages);
    onChange(totalPages);
  }, [onChange, totalPages]);

  const handlePrevPage = useCallback(() => {
    if (currentPage === 1) return;
    setCurrentPage((prevPage) => prevPage - 1);
    onChange(currentPage - 1);
  }, [currentPage, onChange]);

  const handleFirstPage = useCallback(() => {
    setCurrentPage(1);
    onChange(1);
  }, [onChange]);

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
