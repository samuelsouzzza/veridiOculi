import styles from './RegisterView.module.css';
import { MenuNavLogin } from '@/components/MenuNavLogin/MenuNavLogin';
import { FormNewRegister } from '@/components/FormNewRegister/FormNewRegister';
import Image from 'next/image';

export default function RegisterView() {
  return (
    <div className={styles.container}>
      <MenuNavLogin />
      <div className={styles.box}>
        <FormNewRegister />
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
