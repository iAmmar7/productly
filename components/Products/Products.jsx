import { Fragment } from 'react';

import { Pagination } from '../Pagination';
import { SelectBox } from '../SelectBox';
import Listing from './Listing';

function Products(props) {
  const { products } = props;

  return (
    <Fragment>
      <section>
        <h2 className='sr-only'>Product listing</h2>
        <Listing products={products} />
      </section>
      <section className='flex items-center justify-between my-4 mt-8'>
        <h2 className='sr-only'>Pagination</h2>
        <Pagination />
        <div className='flex items-center gap-x-2'>
          <span>Show</span>
          <SelectBox value={24} options={[12, 24, 36, 48, 60]} menuPlacement='top' />
          <span>per page</span>
        </div>
      </section>
    </Fragment>
  );
}

export default Products;
