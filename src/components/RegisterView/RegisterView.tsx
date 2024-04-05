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
      </div>
    </div>
  );
}
