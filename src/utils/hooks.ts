import { useState, useCallback } from 'react';

export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  onClickOutside: (e?: MouseEvent) => void,
) {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      onClickOutside(event);
    }
  };

  document.addEventListener('click', handleClick);
  return () => document.removeEventListener('click', handleClick);
}

export function useToggle(initialState: boolean) {
  const [active, setActive] = useState(initialState);

  const on = useCallback(() => {
    setActive(true);
  }, []);

  const off = useCallback(() => {
    setActive(false);
  }, []);

  return { active, on, off };
}
