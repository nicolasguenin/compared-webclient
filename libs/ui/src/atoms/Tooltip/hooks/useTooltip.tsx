import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

type TooltipPosition = {
  top?: number;
  left?: number;
  width?: number;
};

interface Props {
  options?: { delay?: number; space?: number };
  triggerRef: RefObject<HTMLElement | null>;
  tooltipRef: RefObject<HTMLDivElement | null>;
}

export default function useTooltip({
  options = {},
  triggerRef,
  tooltipRef,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<TooltipPosition>({});
  const [pointerArea, setPointerArea] = useState<HTMLDivElement | null>(null);

  // Prevent the flash effect
  const timeout = useRef(0);

  const delay = options.delay || 300;
  const space = options.space || 8;

  /**
   * Open the tooltip
   */
  const onMouseEnter = useCallback(() => {
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => {
      setIsVisible(true);
      timeout.current = 0;
    }, delay);
  }, [delay]);

  /**
   * Close tooltip and clear current timeout value
   */
  const onClose = useCallback(() => {
    window.clearTimeout(timeout.current);
    timeout.current = 0;
    setIsVisible(false);
  }, []);

  /**
   * Close tooltip or trigger mouseMove event
   */
  const onMouseLeave = useCallback(() => {
    if (tooltipRef.current) {
      return setPointerArea(tooltipRef.current);
    }
    // Clear if the tooltip was not displayed due to the options.delay value
    onClose();
  }, [tooltipRef, onClose]);

  const handlePosition = useCallback(() => {
    const { left, bottom, width } = (
      triggerRef.current as HTMLElement
    ).getBoundingClientRect();

    const tooltipWidth = tooltipRef.current?.getBoundingClientRect().width || 0;
    const middle = left + width / 2 - tooltipWidth / 2;

    setPosition({
      top: bottom + space,
      left: middle,
      width,
    });
  }, [space, triggerRef, tooltipRef]);

  useEffect(() => {
    if (timeout.current) {
      window.clearTimeout(timeout.current);
      timeout.current = 0;
    }
  }, []);

  useEffect(() => {
    if (!triggerRef.current) {
      return;
    }
    if (isVisible) {
      handlePosition();
    } else if (Object.keys(position).length > 0) {
      setPosition({}); // Reset tooltip position
    }
  }, [isVisible, handlePosition, triggerRef]);

  useEffect(() => {
    if (pointerArea) {
      // Check if the mouse is outside the tooltip or trigger elements
      const handleTrackPointer = (event: MouseEvent) => {
        const { x, y, width, height } = pointerArea.getBoundingClientRect();
        const { clientX, clientY } = event;

        const isPointInPolygon =
          clientX >= x &&
          clientX <= x + width &&
          clientY >= y - space &&
          clientY <= y + height;

        if (
          !isPointInPolygon &&
          !(triggerRef.current as HTMLElement).contains(
            event.target as HTMLElement
          )
        ) {
          onClose();
          setPointerArea(null);
        }
      };

      document.addEventListener('mousemove', handleTrackPointer);
      return () =>
        document.removeEventListener('mousemove', handleTrackPointer);
    }
  }, [onClose, pointerArea, space, tooltipRef, triggerRef]);

  return {
    isVisible,
    onMouseEnter,
    onMouseLeave,
    position: {
      top: position.top ?? 0,
      left: position.left ?? 0,
      width: position.width ?? 0,
    },
  };
}
