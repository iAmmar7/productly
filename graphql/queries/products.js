import { gql } from '@apollo/client';

const query = gql`
  query ProductListing($limit: Number, $skip: Number) {
    products(limit: $limit, skip: $skip)
      @rest(type: "Products", path: "products/?limit={args.limit}&skip={args.skip}", method: "GET") {
      products
      total
      skip
      limit
    }
  }
`;

export default query;
