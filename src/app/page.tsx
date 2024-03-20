import styles from './page.module.css';
import { MenuNavLogin } from '@/components/MenuNavLogin/MenuNavLogin';
import { BoxLandingNewRegister } from '@/components/BoxLandingNewRegister/BoxLandingNewRegister';

export default function Home() {
  return (
    <main className={styles.main}>
      <MenuNavLogin />
      <div className={styles.boxMessage}>
        <h1>Análises com acurácia elevada</h1>
        <p>
          Ajudando a identificar espécies raras com o foco na preservação dos
          biomas. As possibilidades de análise são diversas e rastreamento de
          espécies em extinção.
        </p>
      </div>
      <BoxLandingNewRegister />
    </main>
  );
}
