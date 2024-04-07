'use client';
import React from 'react';
import styles from './PercentaCount.module.css';
import { CountUp } from 'countup.js';

type PercentageCountProps = {
  number: number;
};

export default function PercentageCount({ number }: PercentageCountProps) {
  const element = React.useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasVisible, setHasVisible] = React.useState(false);

  const handleScroll = () => {
    if (element.current && !hasVisible) {
      const { top, bottom } = element.current.getBoundingClientRect();
      const isVisible = top >= 0 && bottom <= window.innerHeight;
      setIsVisible(isVisible);
      if (isVisible) setHasVisible(true);
    }
  };

  React.useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasVisible]);

  React.useEffect(() => {
    const end = number;
    const duration = 2;

    const countUp = new CountUp(element.current as HTMLElement, end, {
      duration: duration,
    });

    if (isVisible) countUp.start();
  }, [isVisible]);
  return (
    <span className={styles.box}>
      <p className={styles.n} ref={element}>
        00
      </p>
      <p className={styles.n}>%</p>
    </span>
  );
}
