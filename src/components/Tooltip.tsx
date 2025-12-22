import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

interface TooltipState {
  visible: boolean;
  content: string;
  x: number;
  y: number;
}

export function TooltipProvider() {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    content: '',
    x: 0,
    y: 0,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    const offset = 15;
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let x = clientX + offset;
    let y = clientY + offset;

    if (x + rect.width > window.innerWidth) {
      x = clientX - rect.width - offset;
    }

    if (y + rect.height > window.innerHeight) {
      y = clientY - rect.height - offset;
    }

    setTooltip((prev) => ({ ...prev, x, y }));
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-tooltip]');
      if (target) {
        const content = target.getAttribute('data-tooltip');
        if (content) {
          setTooltip({
            visible: true,
            content,
            x: e.clientX + 15,
            y: e.clientY + 15,
          });
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-tooltip]');
      if (target) {
        setTooltip((prev) => ({ ...prev, visible: false }));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (tooltip.visible) {
        updatePosition(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [tooltip.visible, updatePosition]);

  const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';

  return createPortal(
    <div
      ref={containerRef}
      className={`fixed z-[9999] pointer-events-none transition-opacity duration-200 max-w-[300px] px-3 py-2 rounded text-[13px] font-medium whitespace-nowrap shadow-lg backdrop-blur-[10px] bg-card/95 text-foreground border border-border/10`}
      style={{
        opacity: tooltip.visible ? 1 : 0,
        left: tooltip.x,
        top: tooltip.y,
      }}
    >
      {tooltip.content}
    </div>,
    document.body
  );
}
