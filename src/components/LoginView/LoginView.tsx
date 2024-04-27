'use client';
import styles from './LoginView.module.css';
import { MenuNavLogin } from '../MenuNavLogin/MenuNavLogin';
import BoxFormLogin from '../BoxFormLogin/BoxFormLogin';
import Image from 'next/image';
import React from 'react';
import { UseGlobalContext } from '@/global/GlobalContext';

export default function LoginView() {
  const { setModalActions } = UseGlobalContext();

  React.useEffect(() => {
    setModalActions(null);
  }, []);

  return (
    <div className={styles.container}>
      <MenuNavLogin login />
      <div className={styles.box}>
        <BoxFormLogin />
        <Image
          src='/imgs/logoLabel.svg'
          width={400}
          height={200}
          alt='Logo Veridi Oculi com legenda'
        />
      </div>
    </div>
  );
}
