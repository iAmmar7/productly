import ProductCard from './ProductCard';

function Listing(props) {
  const { products } = props;

  return (
    <ol className='grid gap-x-4 gap-y-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.data.products.products.map((prod) => (
        <ProductCard key={prod.id} data={prod} />
      ))}
    </ol>
  );
}

export default Listing;
