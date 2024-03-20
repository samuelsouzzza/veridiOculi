import styles from './page.module.css';
import { MenuNavLogin } from '@/components/MenuNavLogin/MenuNavLogin';
import { FormNewRegister } from '@/components/FormNewRegister/FormNewRegister';
import Image from 'next/image';

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
