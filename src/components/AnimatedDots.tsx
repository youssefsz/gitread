'use client';

import { useState, useEffect } from 'react';

interface AnimatedDotsProps {
  speed?: number; // Speed of animation in milliseconds
}

export default function AnimatedDots({ speed = 500 }: AnimatedDotsProps) {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => {
        if (prevDots === '.') return '..';
        if (prevDots === '..') return '...';
        return '.';
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  return <span>{dots}</span>;
}