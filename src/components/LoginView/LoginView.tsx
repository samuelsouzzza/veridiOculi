import styles from './LoginView.module.css';
import { MenuNavLogin } from '../MenuNavLogin/MenuNavLogin';
import BoxFormLogin from '../BoxFormLogin/BoxFormLogin';
import Image from 'next/image';

export default function LoginView() {
  return (
    <div className={styles.container}>
      <MenuNavLogin login />
      <div className={styles.box}>
        <BoxFormLogin />
        <Image
          src='/imgs/logoLabelWhite.svg'
          width={400}
          height={200}
          alt='Logo Veridi Oculi com legenda'
        />
      </div>
    </div>
  );
}
