import styles from './FetchHistoric.module.css';
import { IReports } from '@/@types/@types';

export default async function FetchHistoric() {
  const response = await fetch('http://localhost:5000/historic');
  const json = (await response.json()) as IReports[];

  return (
    <div className={styles.view}>
      <h1 className='subtitle'>Meu histórico</h1>
      <div className={styles.boxTable}>
        <div className={styles.rowHead}>
          <div className={styles.colHead}>Id</div>
          <div className={styles.colHead}>Data</div>
          <div className={styles.colHead}>Espécie Foco</div>
          <div className={styles.colHead}>Acurácia</div>
          <div className={styles.colHead}>Status</div>
        </div>
        {json.map((d) => {
          return (
            <div key={d.id} className={styles.rowBody}>
              <div className={styles.colBody}>{d.id}</div>
              <div className={styles.colBody}>{d.dt_report}</div>
              <div className={styles.colBody}>{d.data.species_name}</div>
              <div className={styles.colBody}>{d.data.accuracy}</div>
              <div className={styles.colBody}>Concluído</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
