'use client';

/**
 * Reusable createPortal component.
 */
import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  portalId?: string;
}

export default function Portal({
  children,
  portalId = 'portal-container',
}: PortalProps) {
  const target = useRef<null | HTMLElement>(null);

  useEffect(() => {
    let portal = document.getElementById(portalId);

    if (!portal) {
      portal = document.createElement('div');
      portal.setAttribute('id', portalId);
      document.body.appendChild(portal);
    }

    if (target.current) {
      portal.appendChild(target.current);
    }

    return () => {
      if (target.current) {
        target.current.remove();

        if (portal.childNodes.length === 0) {
          portal.remove();
        }
      }
    };
  }, [portalId]);

  if (!target.current) {
    target.current = document.createElement('div');
  }

  return createPortal(children, target.current);
}
