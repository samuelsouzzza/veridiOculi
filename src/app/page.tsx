import styles from './page.module.css';
import { MenuNavLogin } from '@/components/MenuNavLogin/MenuNavLogin';
import { BoxLandingNewRegister } from '@/components/BoxLandingNewRegister/BoxLandingNewRegister';

export default function Home() {
  return (
    <main className={styles.main}>
      <MenuNavLogin />
      <div className={styles.boxMessage}>
        <h1 className='subtitle' style={{ fontSize: '3rem' }}>
          Veridi Oculi
        </h1>
        <p style={{ fontSize: '1.25rem' }}>
          Ajudando a identificar espécies raras com o foco na preservação dos
          biomas. As possibilidades de análise são diversas no rastreamento de
          espécies em extinção.
        </p>
      </div>
      <BoxLandingNewRegister />
    </main>
  );
}
