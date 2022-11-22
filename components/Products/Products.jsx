import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import { Pagination } from '../Pagination';
import { Loader } from '../Loader';
import { SelectBox } from '../SelectBox';
import { capitalize } from '../../lib/utils';
import { useRouteTransition } from '../../hooks';
import { useCategory } from '../../resources';
import Listing from './Listing';

function Products(props) {
  const { products } = props;
  const [grid, setGrid] = useState(4);
  const router = useRouter();
  const {
    query: { limit = 24, page = 1, category },
  } = router;
  const { data, loading, error } = useCategory();
  const { isLoading } = useRouteTransition();

  const onPerPageChange = useCallback(
    (newLimit) => {
      console.log('onPerPageChange');
      router.replace({ pathname: '/', query: { ...router.query, limit: newLimit, page: 1 } });
    },
    [router]
  );

  const onPageChange = useCallback(
    (newPage) => {
      console.log('onPageChange');
      router.replace({ pathname: '/', query: { ...router.query, page: newPage } });
    },
    [router]
  );

  const onPerRowChange = useCallback((newGrid) => {
    setGrid(newGrid);
  }, []);

  const onCategoryChange = useCallback(
    (newCategory) => {
      if (newCategory === 'all') {
        router.replace({ pathname: '/', query: { page: 1 } });
        return;
      }
      router.replace({ pathname: '/', query: { ...router.query, page: 1, category: newCategory } });
    },
    [router]
  );

  return (
    <div className='relative pb-6 px-2'>
      {isLoading && <Loader />}
      <section className='mt-10 sm:mt-14'>
        <h2 className='text-lg sm:text-xl'>
          Selected category: <span className='font-bold italic'>{capitalize(category ?? 'all')}</span>
        </h2>
      </section>
      <section className='flex items-center justify-end lg:justify-between my-4 mt-8 border-b border-t border-muted py-3 px-2'>
        <h2 className='sr-only'>Product filters</h2>
        <div className='hidden lg:flex items-center gap-x-2'>
          <span>Product</span>
          <SelectBox value={grid} options={[1, 2, 3, 4, 5]} onChange={onPerRowChange} />
          <span>per row</span>
        </div>
        <div className='flex items-center gap-x-2 text-sm sm:text-base'>
          <span>Category</span>
          <SelectBox
            value={category ?? 'all'}
            options={['all', ...(data?.categories || [])]}
            onChange={onCategoryChange}
            className='min-w-[150px] sm:min-w-[170px]'
            disabled={error || loading}
          />
        </div>
      </section>
      <section className='mt-10 min-h-[700px]'>
        <h2 className='sr-only'>Product listing</h2>
        <Listing products={products} grid={grid} isLoading={products?.data?.loading} />
      </section>
      <section className='flex items-center justify-center sm:justify-between my-4 mt-8 border-b border-t border-muted py-3 px-2'>
        <h2 className='sr-only'>Pagination</h2>
        <Pagination
          value={parseInt(page)}
          totalPages={Math.ceil((products?.data?.products?.total || 0) / parseInt(limit))}
          onChange={onPageChange}
        />
        <div className='hidden sm:flex items-center gap-x-2'>
          <span>Show</span>
          <SelectBox
            value={limit}
            options={[12, 24, 36, 48, 60]}
            menuPlacement='top'
            onChange={onPerPageChange}
            className='min-w-[60px]'
          />
          <span>per page</span>
        </div>
      </section>
    </div>
  );
}

export default Products;
