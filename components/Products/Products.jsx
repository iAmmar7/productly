import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import { Pagination } from '../Pagination';
import { Loader } from '../Loader';
import { SelectBox } from '../SelectBox';
import Listing from './Listing';

function Products(props) {
  const { products } = props;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    query: { limit = 24, page = 1 },
  } = router;

  console.log(products, products?.data?.products?.itemCount);

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

  return (
    <div className='relative pt-10 pb-6 px-2'>
      {isLoading && <Loader />}
      <section>
        <h2 className='sr-only'>Product listing</h2>
        <Listing products={products} />
      </section>
      <section className='flex items-center justify-between my-4 mt-8'>
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
