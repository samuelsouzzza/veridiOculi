import { Metadata } from 'next';
import styles from './page.module.css';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Histórico',
  description: 'Página para visualizar as minhas análises da Veridi Oculi',
};

export default function historicPage() {
  return (
    <div className={styles.container}>
      <MenuNavHome activeRoute='historic' />
      <div className={styles.view}>
        <h1 className='title'>Meu histórico</h1>
        <div className={styles.boxTable}>
          <div className={styles.rowHead}>
            <div className={styles.colHead}>Id</div>
            <div className={styles.colHead}>Data</div>
            <div className={styles.colHead}>Foco</div>
            <div className={styles.colHead}>Qtd Imgs</div>
            <div className={styles.colHead}>Status</div>
            <div className={styles.colHead}>Relatório</div>
          </div>
          <div className={styles.rowBody}>
            <div className={styles.colBody}>3515485</div>
            <div className={styles.colBody}>28/06/2003 10:00</div>
            <div className={styles.colBody}>Ypê Rosa</div>
            <div className={styles.colBody}>15</div>
            <div className={styles.colBody}>Concluído</div>
            <div className={styles.colBody}>📄</div>
          </div>
          <div className={styles.rowBody}>
            <div className={styles.colBody}>3515485</div>
            <div className={styles.colBody}>28/06/2003 10:00</div>
            <div className={styles.colBody}>Ypê Rosa</div>
            <div className={styles.colBody}>15</div>
            <div className={styles.colBody}>Concluído</div>
            <div className={styles.colBody}>📄</div>
          </div>
          <div className={styles.rowBody}>
            <div className={styles.colBody}>3515485</div>
            <div className={styles.colBody}>28/06/2003 10:00</div>
            <div className={styles.colBody}>Ypê Rosa</div>
            <div className={styles.colBody}>15</div>
            <div className={styles.colBody}>Concluído</div>
            <div className={styles.colBody}>📄</div>
          </div>
          <div className={styles.rowBody}>
            <div className={styles.colBody}>3515485</div>
            <div className={styles.colBody}>28/06/2003 10:00</div>
            <div className={styles.colBody}>Ypê Rosa</div>
            <div className={styles.colBody}>15</div>
            <div className={styles.colBody}>Concluído</div>
            <div className={styles.colBody}>📄</div>
          </div>
        </div>
      </div>
    </div>
  );
}
