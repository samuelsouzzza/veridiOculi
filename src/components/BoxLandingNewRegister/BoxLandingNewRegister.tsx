'use client';
import Link from 'next/link.js';
import styles from './BoxLandingNewRegister.module.css';

export const BoxLandingNewRegister = () => {
  return (
    <div className={styles.container}>
      <section>
        <h1>Faça sua primeira análise no VeridiOculi</h1>
        <p>Junte-se à nossa plataforma</p>
      </section>
      <Link className='btnPrimary' href={'/register'}>
        Cadastrar
      </Link>
    </div>
  );
};
