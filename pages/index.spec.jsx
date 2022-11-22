import { useRouter } from 'next/router';
import { act } from '@testing-library/react';
import fetch from 'jest-fetch-mock';

import HomePage, { getServerSideProps } from './index';
import renderer from '../config/renderer';
import { default as dummyCMSResponse } from '../tests/responses/cms-response.json';
import { default as productsResponse } from '../tests/responses/products-responses.json';

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

describe('HomePage', () => {
  const router = useRouter();

  beforeEach(async () => {
    await router.push('/');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render header and footer', async () => {
    const { getAllByText, getByText, getByTitle } = await act(() => renderer(<HomePage />));

    expect(getAllByText('Productly')).toHaveLength(2);
    expect(getByTitle('Productly')).toBeInTheDocument();
    expect(getByText(/All rights reserverd © 2022/)).toBeInTheDocument();
  });

  describe('getServerSideProps', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it('should call APIs', async () => {
      fetch.mockResponseOnce(JSON.stringify(dummyCMSResponse));
      fetch.mockResponseOnce(JSON.stringify(productsResponse));

      const response = await getServerSideProps({ query: { limit: 2 } });
      expect(response).toEqual(expect.any(Object));
    });
  });
});
