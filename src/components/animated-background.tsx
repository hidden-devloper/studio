"use client";

import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; top: string; left: string; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * -50,
      duration: Math.random() * 20 + 30,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="bg-particle-gradient particle"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}rem`,
            height: `${p.size}rem`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
