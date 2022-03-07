import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, [isClient]);

  const isDesktop = useMediaQuery({
    minWidth: '1024px',
  });

  return {
    isDesktop: isClient ? isDesktop : false,
  };
}

export default useResponsive;
