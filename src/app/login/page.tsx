import styles from './page.module.css';
import { Metadata } from 'next';
import { MenuNavLogin } from '@/components/MenuNavLogin/MenuNavLogin';
import BoxFormLogin from '@/components/BoxFormLogin/BoxFormLogin';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Login',
  description: 'Página de acesso para os clientes da Veridi Ocul',
};

export default function loginPage() {
  return (
    <div className={styles.container}>
      <MenuNavLogin login />
      <div className={styles.box}>
        <BoxFormLogin />
        <Image
          src='/imgs/logoLabelWhite.svg'
          width={325}
          height={200}
          alt='Logo Veridi Oculi com legenda'
        />
      </div>
    </div>
  );
}
