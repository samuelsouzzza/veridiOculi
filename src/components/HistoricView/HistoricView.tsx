'use client';
import styles from './HistoricView.module.css';
import { useRouter } from 'next/navigation';
import { IReports } from '@/@types/@types';

type HistoricViewProps = {
  data: IReports[];
};

export function HistoricView({ data }: HistoricViewProps) {
  const router = useRouter();

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
        {data.map((d) => {
          return (
            <div
              key={d.id}
              className={styles.rowBody}
              onClick={() => router.push(`/historic/${d.id}`)}
            >
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
