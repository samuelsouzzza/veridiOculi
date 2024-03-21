'use client';

import Image from 'next/image';
import styles from './MenuNavLogin.module.css';
import Link from 'next/link';

type MenuNavLoginProps = {
  login?: boolean;
};

export const MenuNavLogin = ({ login }: MenuNavLoginProps) => {
  return (
    <nav className={styles.container}>
      <div className={styles.boxLogo}>
        <Link href={'/'}>
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
        <Link className='btnSecondary' href={'#'}>
          Ver Planos
        </Link>
        {!login ? (
          <Link className='btnPrimary' href={'/login'}>
            Entrar
          </Link>
        ) : (
          <Link className='btnSecondary' href={'/register'}>
            Cadastrar
          </Link>
        )}
      </div>
    </nav>
  );
};
