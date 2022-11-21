import { Fragment } from 'react';

import { Pagination } from '../Pagination';
import Listing from './Listing';

function Products(props) {
  const { products } = props;

  return (
    <Fragment>
      <section>
        <h2 className='sr-only'>Product listing</h2>
        <Listing products={products} />
      </section>
      <section>
        <h2 className='sr-only'>Pagination</h2>
        <Pagination />
      </section>
    </Fragment>
  );
}

export default Products;
