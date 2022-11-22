import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';

import gridMapper from './gridMapper';
import Skeleton from './Skeleton';
import ProductCard from './ProductCard';

function Listing(props) {
  const { products, grid, isLoading } = props;

  return (
    <AnimatePresence>
      {isLoading ? (
        <Skeleton grid={grid} />
      ) : (
        <ol
          title='product-list'
          className={clsx('grid gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-6 grid-cols-2 md:grid-cols-3', gridMapper(grid))}
        >
          {(products?.data?.products?.products || []).map((prod) => (
            <ProductCard key={prod.id} data={prod} />
          ))}
        </ol>
      )}
    </AnimatePresence>
  );
}

export default Listing;
