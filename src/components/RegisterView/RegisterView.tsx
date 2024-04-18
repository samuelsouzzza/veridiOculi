import styles from './RegisterView.module.css';
import { MenuNavLogin } from '@/components/MenuNavLogin/MenuNavLogin';
import { FormNewRegister } from '@/components/FormNewRegister/FormNewRegister';

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
