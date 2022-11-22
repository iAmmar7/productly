import { fireEvent, render } from '@testing-library/react';

import usePagination from './usePagination';

describe('usePagination', () => {
  const Pagination = ({ value }) => {
    const { currentPage, handleChangePage, handleNextPage, handleLastPage, handleFirstPage, handlePrevPage } =
      usePagination({ value, totalPages: 10 });

    return (
      <div>
        <p data-testid='page'>{currentPage}</p>
        <button onClick={handleNextPage}>Next</button>
        <button onClick={handlePrevPage}>Previous</button>
        <button onClick={handleLastPage}>Last</button>
        <button onClick={handleFirstPage}>First</button>
        <button onClick={handleChangePage(5)}>5</button>
      </div>
    );
  };

  it('should render the current page', () => {
    const { getByTestId, getByText } = render(<Pagination value={2} />);

    expect(getByTestId('page')).toBeInTheDocument();
    expect(getByText(2)).toBeInTheDocument();
  });

  it('should go to the next page', () => {
    const { getByText } = render(<Pagination value={3} />);

    const next = getByText('Next');
    expect(next).toBeInTheDocument();

    fireEvent.click(next);
    expect(getByText(4)).toBeInTheDocument();
  });

  it('should go to the last page', () => {
    const { getByText } = render(<Pagination value={1} />);

    const last = getByText('Last');
    expect(last).toBeInTheDocument();

    fireEvent.click(last);
    expect(getByText(10)).toBeInTheDocument();
  });

  it('should go to the previous page', () => {
    const { getByText } = render(<Pagination value={3} />);

    const previous = getByText('Previous');
    expect(previous).toBeInTheDocument();

    fireEvent.click(previous);
    expect(getByText(2)).toBeInTheDocument();
  });

  it('should go to the first page', () => {
    const { getByText } = render(<Pagination value={8} />);

    const first = getByText('First');
    expect(first).toBeInTheDocument();

    fireEvent.click(first);
    expect(getByText(1)).toBeInTheDocument();
  });

  it('should go to the correct page', () => {
    const { getByText, getAllByText } = render(<Pagination value={3} />);

    const page = getByText(5);
    expect(page).toBeInTheDocument();

    fireEvent.click(page);
    expect(getAllByText(5)).toHaveLength(2);
  });
});
