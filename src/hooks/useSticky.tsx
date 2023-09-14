import { useEffect, useRef, useState } from 'react';

import { setGlobalSticky } from '../app/slices/appSlice';
import { useDispatch } from 'react-redux';

const useSticky = () => {
  const stickyRef = useRef<HTMLElement>(null);
  const [sticky, setSticky] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stickyRef.current) {
      return;
    }
    setOffset(stickyRef.current.offsetTop);
  }, [stickyRef, setOffset]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) {
        return;
      }

      const isSticky: boolean = window.scrollY > offset;
      setSticky(isSticky);
      dispatch(setGlobalSticky({ sticky: isSticky }));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setSticky, stickyRef, offset, dispatch]);
  return { sticky, stickyRef };
};

export default useSticky;
