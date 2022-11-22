import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const useRouteTransition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const transitionStart = () => setIsLoading(true);

  const transitionEnd = () => setIsLoading(false);

  useEffect(() => {
    router.events.on('routeChangeStart', transitionStart);
    router.events.on('routeChangeComplete', transitionEnd);
    router.events.on('routeChangeError', transitionEnd);

    return () => {
      router.events.off('routeChangeStart', transitionStart);
      router.events.off('routeChangeComplete', transitionEnd);
      router.events.off('routeChangeError', transitionEnd);
    };
  }, [router.events]);

  return { isLoading };
};

export default useRouteTransition;
