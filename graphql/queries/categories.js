import { gql } from '@apollo/client';

const query = gql`
  query CategoryListing {
    categories @rest(type: "Categories", path: "products/categories", method: "GET")
  }
`;

export default query;
