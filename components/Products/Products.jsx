import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import { Pagination } from '../Pagination';
import { Loader } from '../Loader';
import { SelectBox } from '../SelectBox';
import Listing from './Listing';

const FILTERS = [
  { name: 'Newest first', value: 'freshness' },
  { name: 'Price low to high', value: 'pricedesc' },
  { name: 'Price high to low', value: 'priceasc' },
];

function Products(props) {
  const { products } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [grid, setGrid] = useState(4);
  const router = useRouter();
  const {
    query: { limit = 24, page = 1, filter = 'freshness' },
  } = router;

  const animationStart = () => setIsLoading(true);

  const animationEnd = () => setIsLoading(false);

  useEffect(() => {
    router.events.on('routeChangeStart', animationStart);
    router.events.on('routeChangeComplete', animationEnd);
    router.events.on('routeChangeError', animationEnd);

    return () => {
      router.events.off('routeChangeStart', animationStart);
      router.events.off('routeChangeComplete', animationEnd);
      router.events.off('routeChangeError', animationEnd);
    };
  }, []);

  const onPerPageChange = useCallback((page) => {
    router.replace({ pathname: '/', query: { ...router.query, limit: page } });
  }, []);

  const onPageChange = useCallback((page) => {
    router.replace({ pathname: '/', query: { ...router.query, page } });
  }, []);

  const onPerRowChange = useCallback((newGrid) => {
    setGrid(newGrid);
  }, []);

  const onFilterChange = useCallback((newFilter) => {
    router.replace({ pathname: '/', query: { ...router.query, filter: newFilter.value } });
  }, []);

  return (
    <div className='relative pb-6 px-2'>
      {isLoading && <Loader />}
      <section className='flex items-center justify-between my-4 mt-8 border-b border-t border-muted py-3 px-2'>
        <h2 className='sr-only'>Product filters</h2>
        <div className='hidden lg:flex items-center gap-x-2'>
          <span>Product</span>
          <SelectBox value={grid} options={[1, 2, 3, 4, 5]} onChange={onPerRowChange} />
          <span>per row</span>
        </div>
        <div className='hidden lg:flex items-center gap-x-2'>
          <span>Sort by</span>
          <SelectBox
            value={FILTERS.find((filt) => filt.value === filter)}
            options={FILTERS}
            onChange={onFilterChange}
          />
        </div>
      </section>
      <section className='mt-10'>
        <h2 className='sr-only'>Product listing</h2>
        <Listing products={products} grid={grid} />
      </section>
      <section className='flex items-center justify-between my-4 mt-8 border-b border-t border-muted py-3 px-2'>
        <h2 className='sr-only'>Pagination</h2>
        <Pagination
          value={page}
          totalPages={Math.ceil((products?.data?.products?.itemCount || 0) / parseInt(limit))}
          onChange={onPageChange}
        />
        <div className='flex items-center gap-x-2'>
          <span>Show</span>
          <SelectBox value={limit} options={[12, 24, 36, 48, 60]} menuPlacement='top' onChange={onPerPageChange} />
          <span>per page</span>
        </div>
      </section>
    </div>
  );
}

export default Products;
