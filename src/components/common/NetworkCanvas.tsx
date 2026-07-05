import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

/**
 * Animated node-network background — the brand's signature motif (echoing the
 * connected nodes in the Indus2 mark). Pure 2D canvas for performance; degrades
 * to a sparse static field when reduced motion is requested.
 */
const NetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf = 0;
    const pointer = { x: -9999, y: -9999 };

    const buildNodes = () => {
      const density = Math.min(Math.max(Math.floor((width * height) / 20000), 28), 90);
      nodes = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const linkDist = 150;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.5;
            ctx.strokeStyle = `rgba(255, 92, 52, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const pdx = node.x - pointer.x;
        const pdy = node.y - pointer.y;
        const near = Math.hypot(pdx, pdy) < 120;
        ctx.beginPath();
        ctx.arc(node.x, node.y, near ? 2.6 : 1.6, 0, Math.PI * 2);
        ctx.fillStyle = near ? 'rgba(255, 138, 91, 0.95)' : 'rgba(255, 51, 23, 0.65)';
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 51, 23, 0.4)';
        ctx.fill();
      }
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };

    resize();
    window.addEventListener('resize', resize);

    if (reduced) {
      drawStatic();
    } else {
      window.addEventListener('pointermove', onPointer);
      raf = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointer);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
};

export default NetworkCanvas;
