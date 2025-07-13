"use client";

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const numParticles = 30;
    const newParticles: Particle[] = [];
    for (let i = 0; i < numParticles; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const moveParticles = () => {
      setParticles((currentParticles) =>
        currentParticles.map((p) => {
          let newX = p.x + p.speedX;
          let newY = p.y + p.speedY;

          if (newX > 100 || newX < 0) p.speedX *= -1;
          if (newY > 100 || newY < 0) p.speedY *= -1;

          return { ...p, x: newX, y: newY };
        })
      );
    };

    const interval = setInterval(moveParticles, 100);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-background overflow-hidden">
       <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
       {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            transition: 'left 100ms linear, top 100ms linear',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
