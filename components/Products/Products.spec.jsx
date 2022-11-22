import { useRouter } from 'next/router';
import { act, fireEvent } from '@testing-library/react';

import { default as productResponse } from '../../tests/responses/products-responses.json';
import renderer from '../../config/renderer';
import Products from './Products';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      replace: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe('ProductListing', () => {
  const router = useRouter();

  beforeEach(async () => {
    await router.push({ pathname: '/', query: { category: 'Test' } });
  });

  it('should render category section', async () => {
    const { getByText, getByTestId } = await act(() => renderer(<Products products={productResponse} />));

    expect(getByText(/Selected category/)).toBeInTheDocument();
    expect(getByTestId('category')).toBeInTheDocument();
  });

  it('should render filter section', async () => {
    const { getByText } = await act(() => renderer(<Products products={productResponse} />));

    expect(getByText(/Product filters/)).toBeInTheDocument();
    expect(getByText(/Category/)).toBeInTheDocument();
  });

  it('should render pagination section', async () => {
    const { getByText } = await act(() => renderer(<Products products={productResponse} />));

    expect(getByText('Pagination')).toBeInTheDocument();
    expect(getByText(/per page/)).toBeInTheDocument();
  });

  it('should render list section', async () => {
    const { getByText, getAllByTestId } = await act(() => renderer(<Products products={productResponse} />));

    expect(getByText('Product listing')).toBeInTheDocument();
    expect(getAllByTestId('product-item')).toHaveLength(24);
  });

  it('should change the number of grids', async () => {
    const { getByTitle, getByRole } = await act(() => renderer(<Products products={productResponse} />));

    const list = getByTitle('product-list');
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('lg:grid-cols-4');

    const gridSelect = getByTitle('grid');
    expect(gridSelect).toBeInTheDocument();

    fireEvent.click(gridSelect);

    const option = getByRole('option', { name: 2 });
    expect(option).toBeInTheDocument();

    fireEvent.click(option);

    expect(list).toHaveClass('lg:grid-cols-2');
  });

  it('should change the number of products', async () => {
    const { getByTitle, getByRole, getAllByTestId } = await act(() =>
      renderer(<Products products={productResponse} />)
    );

    const pageSelect = getByTitle('limit');
    expect(pageSelect).toBeInTheDocument();

    fireEvent.click(pageSelect);

    const option = getByRole('option', { name: 24 });
    expect(option).toBeInTheDocument();

    fireEvent.click(option);

    await router.replace('/?limit=24&page=1');

    expect(getAllByTestId('product-item')).toHaveLength(24);
  });
});
