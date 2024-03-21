import styles from './page.module.css';
import { MenuNavLogin } from '@/components/MenuNavLogin/MenuNavLogin';
import { FormNewRegister } from '@/components/FormNewRegister/FormNewRegister';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Novo cadastro',
  description: 'Página de novos cadastros para a Veridi Oculi',
};

export default function registerPage() {
  return (
    <div className={styles.container}>
      <MenuNavLogin />
      <div className={styles.box}>
        <FormNewRegister />
        <Image
          src='/imgs/logoLabel.svg'
          width={325}
          height={200}
          alt='Logo Veridi Oculi com legenda'
        />
      </div>
    </div>
  );
}
