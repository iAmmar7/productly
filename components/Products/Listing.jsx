import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';

import ProductCard from './ProductCard';

const gridMapper = (count) => {
  switch (count) {
    case 1:
      return 'lg:grid-cols-1';
    case 2:
      return 'lg:grid-cols-2';
    case 3:
      return 'lg:grid-cols-3';
    case 4:
      return 'lg:grid-cols-4';
    case 5:
      return 'lg:grid-cols-5';
    default:
      return 'lg:grid-cols-4';
  }
};

function Listing(props) {
  const { products, grid } = props;

  return (
    <AnimatePresence>
      <ol className={clsx('grid gap-x-4 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3', gridMapper(grid))}>
        {(products?.data?.products?.products || []).map((prod) => (
          <ProductCard key={prod.id} data={prod} />
        ))}
      </ol>
    </AnimatePresence>
  );
}

export default Listing;
