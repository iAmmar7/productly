import { useQuery } from '@apollo/client';

import { PRODUCTS } from '../graphql/queries';

function Products() {
  const { data } = useQuery(PRODUCTS, {
    variables: {
      store: 'US',
      offset: 0,
      categoryId: 4209,
      limit: 48,
    },
    fetchPolicy: 'network-only',
  });

  console.log('client', data);

  return <div>Products</div>;
}

export default Products;
