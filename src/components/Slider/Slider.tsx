'use client';
import React from 'react';
import styles from './Slider.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCircle as faCircleFull,
} from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

type SliderProps = {
  slides: string[];
  autoPlay?: boolean;
};

export const Slider = ({ slides, autoPlay }: SliderProps) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    function slideNextOrReset() {
      if (active === slides.length - 1) setActive(0);
      else slideNext();
    }

    if (autoPlay) timeoutId = setTimeout(slideNextOrReset, 5000);

    if (contentRef.current) {
      const { width } = contentRef.current.getBoundingClientRect();
      setPosition(-(width * active));
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div className={styles.boxButtons}>
        {active > 0 ? (
          <button onClick={slidePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        ) : (
          <div style={{ width: '45px' }} />
        )}
        <div className={styles.count}>
          {slides.map((s, i) => {
            return (
              <FontAwesomeIcon
                key={i}
                icon={active === i ? faCircleFull : faCircle}
                onClick={() => setActive(i)}
              />
            );
          })}
        </div>
        {active >= 0 && active + 1 < slides.length ? (
          <button onClick={slideNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        ) : (
          <div style={{ width: '45px' }} />
        )}
      </div>
      <div
        className={styles.content}
        ref={contentRef}
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        {slides.map((slide) => {
          return (
            <div className={styles.item} key={Math.random()}>
              <Image
                className={styles.image}
                // src={`http://localhost:3000/${slide}`}
                src={`${slide}`}
                alt='Imagem da publicação'
                width={300}
                height={300}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
