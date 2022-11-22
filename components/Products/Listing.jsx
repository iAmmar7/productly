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
        <ol className={clsx('grid gap-x-4 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3', gridMapper(grid))}>
          {(products?.data?.products?.products || []).map((prod) => (
            <ProductCard key={prod.id} data={prod} />
          ))}
        </ol>
      )}
    </AnimatePresence>
  );
}

export default Listing;
