import { gql } from '@apollo/client';

const query = gql`
  query ProductListing($store: String!, $offset: Number!, $categoryId: Number!, $limit: Number!, $filter: String!) {
    products(store: $store, offset: $offset, categoryId: $categoryId, limit: $limit, filter: $filter)
      @rest(
        type: "Products"
        path: "products/v2/list?store={args.store}&offset={args.offset}&categoryId={args.categoryId}&limit={args.limit}&filter={args.filter}"
        method: "GET"
      ) {
      categoryName
      itemCount
      products
    }
  }
`;

export default query;
