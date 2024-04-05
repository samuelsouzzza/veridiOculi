'use client';
import React from 'react';
import styles from './PercentaCount.module.css';
import { CountUp } from 'countup.js';

type PercentageCountProps = {
  number: number;
};

export default function PercentageCount({ number }: PercentageCountProps) {
  const element = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    const end = number;
    const duration = 1;

    const countUp = new CountUp(element.current as HTMLElement, end, {
      duration: duration,
    });

    countUp.start();

    return () => {
      countUp.reset();
    };
  }, []);
  return (
    <span className={styles.box}>
      <p className={styles.n} ref={element} />
      <p className={styles.n}>%</p>
    </span>
  );
}
