import ProductCard from './ProductCard';
import { Pagination } from '../Pagination';

function Listing(props) {
  const { products } = props;

  return (
    <section>
      <h2 className='sr-only'>Product listing</h2>
      <ol className='grid gap-x-4 gap-y-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.data.products.products.map((prod) => (
          <ProductCard key={prod.id} data={prod} />
        ))}
      </ol>
      <div className='my-10'>
        <Pagination />
      </div>
    </section>
  );
}

export default Listing;
