import { gql } from '@apollo/client';

const query = gql`
  query ProductListing($store: String!, $offset: Number!, $categoryId: Number!, $limit: Number!) {
    products(store: $store, offset: $offset, categoryId: $categoryId, limit: $limit)
      @rest(
        type: "Products"
        path: "products/v2/list?store={args.store}&offset={args.offset}&categoryId={args.categoryId}&limit={args.limit}"
        method: "GET"
      ) {
      categoryName
      itemCount
      products
    }
  }
`;

export default query;
