/**
 * @param children
 * @param content
 * @constructor
 * Usage <Tooltip content={reactNode}>{children}</Tooltip>
 */

import { Portal } from '@cpd/shared';
import clsx from 'clsx';
import {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  useMemo,
  useRef,
} from 'react';
import { Box } from '../Box';
import useTooltip from './hooks/useTooltip';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
}

export default function Tooltip({ children, content }: TooltipProps) {
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const { isVisible, onMouseEnter, onMouseLeave, position } = useTooltip({
    triggerRef,
    tooltipRef,
  });

  // Prevent re-render of children element when creating the tooltip
  const clonedChild = useMemo(() => {
    return isValidElement(children)
      ? cloneElement(children as ReactElement<any>, {
          ...(children.props as object),
          ref: triggerRef,
          onMouseEnter,
          onMouseLeave,
        })
      : null;
  }, [children, onMouseEnter, onMouseLeave]);

  return (
    <>
      {isVisible && (
        <Portal>
          <Box
            ref={tooltipRef}
            bgColor={'white'}
            rounded
            shadow={'md'}
            className={clsx('absolute', styles.tooltip)}
            style={{ top: position.top, left: position.left }}
          >
            {content}
          </Box>
        </Portal>
      )}
      {clonedChild}
    </>
  );
}
