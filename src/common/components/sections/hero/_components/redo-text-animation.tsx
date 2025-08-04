'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

export interface IRedoTextAnimationProps {
  delay: number;
}

export default function RedoTextAnimation({ delay }: IRedoTextAnimationProps) {
  const textIndex = useMotionValue(0);

  const texts = [
    'I build dynamic, performant web apps using React and Next.js—bridging design and functionality with precision.',
    'From components to routes, I craft scalable, maintainable UIs that users love and developers trust.',
    'In a fast-moving React ecosystem, I stay ahead by writing clean code and embracing best practices.',
    'Next.js empowers me to deliver fast, SEO-optimized, and server-ready applications—seamlessly.',
    'I design with responsiveness in mind—every pixel, every breakpoint, every interaction.',
    'Code splitting, lazy loading, and SSR aren’t buzzwords—they’re tools I use daily to boost performance.',
    'I treat debugging as an opportunity to learn, improve, and perfect user experiences.',
    'Whether it’s state management, routing, or animations—I write code that’s both elegant and efficient.',
    'Working in React means staying curious—I constantly explore new libraries, hooks, and patterns.',
    'I believe great frontend work is equal parts code, collaboration, and care for the end user.',
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      delay: delay,
      duration: 3,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.span className="h-32 max-w-96 bg-lightBeige text-[1.2rem] font-bold dark:bg-darkBeige md:text-[1.5rem] lg:text-[1.7rem]">
      {displayText}
    </motion.span>
  );
}
