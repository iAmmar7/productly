import { AnimatePresence } from 'framer-motion';

import ProductCard from './ProductCard';

function Listing(props) {
  const { products } = props;

  return (
    <AnimatePresence>
      <ol className='grid gap-x-4 gap-y-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.data.products.products.map((prod) => (
          <ProductCard key={prod.id} data={prod} />
        ))}
      </ol>
    </AnimatePresence>
  );
}

export default Listing;
