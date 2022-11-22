import { useQuery } from '@apollo/client';

import { PRODUCTS, PRODUCTS_BY_CATEGORIES } from '../graphql/queries';
import { isEmpty } from '../lib/utils';

const useProductResource = (props) => {
  const { page = 1, limit = 24, category } = props;

  const {
    data: productsData,
    loading: productsLoading,
    error: productError,
  } = useQuery(PRODUCTS, {
    variables: {
      skip: (parseInt(page) - 1) * parseInt(limit),
      limit: parseInt(limit),
    },
    skip: !isEmpty(category),
  });

  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useQuery(PRODUCTS_BY_CATEGORIES, {
    variables: {
      category,
    },
    skip: isEmpty(category),
  });

  return {
    data: productsData || categoryData,
    loading: productsLoading || categoryLoading,
    error: productError || categoryError,
  };
};

export default useProductResource;
