'use client';

import Image from 'next/image';
import styles from './MenuNavLogin.module.css';
import Link from 'next/link';

export const MenuNavLogin = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.boxLogo}>
        <Image
          src='/imgs/logo.png'
          alt='Logo Veridi Oculi'
          width={50}
          height={70}
          sizes='100vh'
          quality={80}
          priority
        />
      </div>
      <div className={styles.box}>
        <Link className='btnSecondary' href={'#'}>
          Assinaturas
        </Link>
        <Link className='btnPrimary' href={'/login'}>
          Entrar
        </Link>
      </div>
    </nav>
  );
};
