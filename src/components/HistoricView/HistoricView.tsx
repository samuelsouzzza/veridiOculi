'use client';
import styles from './HistoricView.module.css';
import { IReports } from '@/@types/@types';
import Link from 'next/link';
import React from 'react';

type HistoricViewProps = {
  data: IReports[];
};

export function HistoricView({ data }: HistoricViewProps) {
  const [historic, setHistoric] = React.useState<IReports[]>(data);

  function reverseHistoric() {
    setHistoric((historic) => historic.toReversed());
  }

  return (
    <div className={styles.view}>
      <h1 className='subtitle'>Meu histórico</h1>
      <div className={styles.boxTable}>
        <div className={styles.rowHead} onClick={reverseHistoric}>
          <div className={styles.colHead}>Id</div>
          <div className={styles.colHead}>Data</div>
          <div className={styles.colHead}>Espécie Foco</div>
          <div className={styles.colHead}>Acurácia</div>
          <div className={styles.colHead}>Status</div>
        </div>
        {historic.map((h) => {
          return (
            <Link href={`historic/${h.id}`} className={styles.linkRow}>
              <div key={h.id} className={styles.rowBody}>
                <div className={styles.colBody}>{h.id}</div>
                <div className={styles.colBody}>{h.dt_report}</div>
                <div className={styles.colBody}>{h.data.species_name}</div>
                <div className={styles.colBody}>{h.data.accuracy}</div>
                <div className={styles.colBody}>Concluído</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
