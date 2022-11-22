import { useQuery } from '@apollo/client';

import { CATEGORIES } from '../graphql/queries';

const useCategoryResource = () => {
  const { data, loading, error } = useQuery(CATEGORIES);

  return { data, loading, error };
};

export default useCategoryResource;
