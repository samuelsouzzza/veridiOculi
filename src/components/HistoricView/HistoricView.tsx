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
          <div className={styles.colHead}>Qtd Imagens</div>
        </div>
        {historic.map((h, i) => {
          return (
            <Link
              key={h.id}
              href={`historic/${h.id}`}
              className={styles.linkRow}
            >
              <div className={styles.rowBody}>
                <div className={styles.colBody}>{h.id}</div>
                <div className={styles.colBody}>{h.dt_report}</div>
                <div className={styles.colBody}>{h.data.length}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
