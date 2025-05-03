
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type AnimatedDot = {
  x: number;
  y: number;
  color: string;
  size: number;
};

interface AnimatedBackgroundProps {
  isInView: boolean;
  animatedDots: AnimatedDot[];
  setAnimatedDots: React.Dispatch<React.SetStateAction<AnimatedDot[]>>;
  mousePosition: { x: number; y: number };
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  isInView, 
  animatedDots, 
  setAnimatedDots,
  mousePosition 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas animation for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isInView) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make canvas responsive
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    const connections: number[][] = [];
    let animationFrame: number;

    // Create connections between dots
    for (let i = 0; i < animatedDots.length; i++) {
      for (let j = i + 1; j < animatedDots.length; j++) {
        const dx = animatedDots[i].x - animatedDots[j].x;
        const dy = animatedDots[i].y - animatedDots[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          connections.push([i, j]);
        }
      }
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw dots
      const updatedDots = [...animatedDots];
      updatedDots.forEach((dot, index) => {
        // Move dots
        dot.y -= 0.2;
        
        // Reset position when out of view
        if (dot.y < -10) {
          dot.y = canvas.height + 10;
          dot.x = Math.random() * canvas.width;
        }
        
        // Apply slight horizontal drift
        dot.x += Math.sin(Date.now() * 0.001 + index) * 0.2;
        
        // Interactive effect - attract to mouse
        const dx = mousePosition.x - dot.x;
        const dy = mousePosition.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          dot.x += dx * 0.01;
          dot.y += dy * 0.01;
        }
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      });
      
      // Draw connections
      connections.forEach(([i, j]) => {
        const dot1 = updatedDots[i];
        const dot2 = updatedDots[j];
        
        const dx = dot1.x - dot2.x;
        const dy = dot1.y - dot2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          // Calculate line opacity based on distance
          const opacity = 0.2 * (1 - distance / 150);
          
          const gradient = ctx.createLinearGradient(dot1.x, dot1.y, dot2.x, dot2.y);
          if (dot1.color.includes('247')) {
            gradient.addColorStop(0, `rgba(247, 169, 45, ${opacity})`);
            gradient.addColorStop(1, `rgba(37, 40, 89, ${opacity})`);
          } else {
            gradient.addColorStop(0, `rgba(37, 40, 89, ${opacity})`);
            gradient.addColorStop(1, `rgba(247, 169, 45, ${opacity})`);
          }
          
          ctx.beginPath();
          ctx.moveTo(dot1.x, dot1.y);
          ctx.lineTo(dot2.x, dot2.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
      
      setAnimatedDots(updatedDots);
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, animatedDots, mousePosition, setAnimatedDots]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
};
