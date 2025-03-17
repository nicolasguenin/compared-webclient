import { useCallback, useRef, useState } from 'react';

export function useHover() {
  const ref = useRef<HTMLElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(true);

  const handleHover = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const refCallback = useCallback(
    (node: HTMLElement) => {
      if (ref.current) {
        ref.current.removeEventListener('mouseover', handleHover);
        ref.current.removeEventListener('mouseleave', handleMouseLeave);
      }

      if (node) {
        node.addEventListener('mouseover', handleHover);
        node.addEventListener('mouseleave', handleMouseLeave);
      }
      ref.current = node;
    },
    [handleHover, handleMouseLeave]
  );

  return [refCallback, isHovered];
}
