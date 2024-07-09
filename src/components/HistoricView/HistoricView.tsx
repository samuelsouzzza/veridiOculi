'use client';
import styles from './HistoricView.module.css';
import { IAnalysis, IFeedback } from '@/@types/@types';
import { MenuNavHome } from '../MenuNavHome/MenuNavHome';
import Link from 'next/link';
import React from 'react';
import { UseGlobalContext } from '@/global/GlobalContext';
import { ModalActions } from '../ModalActions/ModalActions';

type HistoricViewProps = {
  data: IAnalysis[];
};

export const HistoricView = ({ data }: HistoricViewProps) => {
  const [historic, setHistoric] = React.useState<IAnalysis[]>(data);

  const { modalActions } = UseGlobalContext();

  function reverseHistoric() {
    setHistoric((historic) => historic.toReversed());
  }

  return (
    <>
      {modalActions && <ModalActions />}
      <div className={styles.container}>
        <MenuNavHome activeRoute='historic' />
        <div className={styles.view}>
          <h1 className='subtitle'>Meu histórico</h1>
          <div className={styles.boxTable}>
            <div className={styles.rowHead} onClick={reverseHistoric}>
              <div className={styles.colHead}>Id</div>
              <div className={styles.colHead}>Data</div>
              <div className={styles.colHead}>Status</div>
            </div>
            {historic?.map((h) => {
              return (
                <Link
                  key={h.id_analysis}
                  href={`historic/${h.id_analysis}`}
                  className={styles.linkRow}
                >
                  <div className={styles.rowBody}>
                    <div className={styles.colBody}>{h.id_analysis}</div>
                    <div className={styles.colBody}>{h.date_analysis}</div>
                    <div className={styles.colBody}>{h.status_analysis}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
