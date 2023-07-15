import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [width, setWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => setWidth(window.innerWidth), []);
  useEffect(() => setIsMobile(width <= 768), [width]);

  return { width, isMobile };
};
