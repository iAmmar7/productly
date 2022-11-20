import Listing from './Listing';

function Products(props) {
  const { products } = props;

  return <Listing products={products} />;
}

export default Products;
