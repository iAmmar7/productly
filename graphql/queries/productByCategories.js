import { gql } from '@apollo/client';

const query = gql`
  query ProductsByCategory($category: String) {
    products(category: $category) @rest(type: "Products", path: "products/category/{args.category}", method: "GET") {
      products
      total
      skip
      limit
    }
  }
`;

export default query;
