import Image from 'next/image';
import styles from './page.module.css';
import { MenuNavLogin } from '@/components/MenuNavLogin/MenuNavLogin';
import { BoxLandingNewRegister } from '@/components/BoxLandingNewRegister/BoxLandingNewRegister';

export default function Home() {
  return (
    <main className={styles.main}>
      <MenuNavLogin />
      <BoxLandingNewRegister />
    </main>
  );
}
