import { useEffect, useState } from 'react';

const withClientOnly = (Component) => {
  return function WithClientOnly(props) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
      setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return <Component {...props} />;
  };
};

export default withClientOnly;
