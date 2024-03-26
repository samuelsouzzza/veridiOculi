'use client';
import styles from './MenuNavHome.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { MenuOptions } from '../MenuOptions/MenuOptions';

type MenuNavHomeProps = {
  activeRoute: string;
};

export const MenuNavHome = ({ activeRoute }: MenuNavHomeProps) => {
  const [active, setActive] = React.useState(activeRoute);
  const [showOptions, setShowOptions] = React.useState(false);

  const refMenu = React.useRef<HTMLDivElement>(null);

  function handleActive(tab: string) {
    if (tab === active) return;
    setActive(tab);
  }

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (refMenu.current && !refMenu.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.boxLogo}>
        <Link href={'/home'}>
          <Image
            src='/imgs/logoLabel.svg'
            alt='Logo Veridi Oculi'
            width={220}
            height={70}
            sizes='100vh'
            quality={80}
            priority
          />
        </Link>
      </div>
      <div className={styles.box}>
        <Link
          href={'/home'}
          className={`btnSecondary ${active === 'home' ? 'active' : ''}`}
          onClick={() => handleActive('home')}
        >
          Página Inicial
        </Link>
        <Link
          href={'/new-analysis'}
          className={`btnSecondary ${
            active === 'new-analysis' ? 'active' : ''
          }`}
          onClick={() => handleActive('new-analysis')}
        >
          Nova Análise
        </Link>
        <Link
          href={'/my-analysis'}
          className={`btnSecondary ${active === 'my-analysis' ? 'active' : ''}`}
          onClick={() => handleActive('my-analysis')}
        >
          Minhas Análises
        </Link>

        <Button
          icon
          text='Minha conta'
          className='btnSecondary'
          onClick={() => setShowOptions(true)}
        >
          <FontAwesomeIcon icon={faUser} />
        </Button>
        {showOptions && <MenuOptions ref={refMenu} />}
      </div>
    </div>
  );
};
