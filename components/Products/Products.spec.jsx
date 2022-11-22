import { useRouter } from 'next/router';
import { act } from '@testing-library/react';

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
});
