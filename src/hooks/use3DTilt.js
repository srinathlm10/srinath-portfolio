import { useRef, useEffect } from 'react';

export const use3DTilt = (options = { max: 15, scale: 1.02, speed: 400 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      
      const xTilt = (yPct * -options.max).toFixed(2);
      const yTilt = (xPct * options.max).toFixed(2);
      
      element.style.transform = `perspective(1000px) rotateX(${xTilt}deg) rotateY(${yTilt}deg) scale(${options.scale})`;
    };

    const handleMouseLeave = () => {
      element.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [options.max, options.scale, options.speed]);

  return ref;
};
