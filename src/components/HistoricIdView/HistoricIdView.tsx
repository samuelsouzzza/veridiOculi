'use client';
import styles from './HistoricIdView.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faArrowDown,
  faFileCsv,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { IDetailsAnalysis, IImages } from '@/@types/@types';
import { MenuNavHome } from '../MenuNavHome/MenuNavHome';
import Image from 'next/image';
import AccuracyGraph from '../AccuracyGraph/AccuracyGraph';
import { Button } from '../Button/Button';
import React from 'react';
import { ModalActions } from '../ModalActions/ModalActions';
import { UseGlobalContext } from '@/global/GlobalContext';

type HistoricIdViewProps = {
  data: IDetailsAnalysis;
};

export default function HistoricIdView({ data }: HistoricIdViewProps) {
  const { modalActions } = UseGlobalContext();

  return (
    <>
      {modalActions && <ModalActions />}
      <div className={styles.container}>
        <MenuNavHome activeRoute='historic' />
        <div className={styles.view}>
          <Link href={'/historic'} className='linkSimple'>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>
          <div className={styles.boxTitle}>
            <h1 className='subtitle'>
              Análise #{data.analysis[0].id_analysis}
            </h1>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
              <p>{data.analysis[0].date_analysis}</p>
            </span>
          </div>
          <div className={styles.boxActions}>
            <div>
              <Button text='Baixar Relatório' className='btnPrimary' icon>
                <FontAwesomeIcon icon={faArrowDown} />
              </Button>
              <Button text='Exportar Relatório' className='btnSecondary' icon>
                <FontAwesomeIcon icon={faFileCsv} />
              </Button>
            </div>
          </div>
          <div className={styles.boxImgs}></div>
          {data?.images?.map((d) => {
            return (
              <div key={d.id_analysis} className={styles.containerItemAnalysis}>
                <h1 className={styles.speciesName}>{d.species_name_image}</h1>
                <div className={styles.boxItem}>
                  <Image
                    src={`http://localhost:3333/${d.ia_path_image}`}
                    width={800}
                    height={300}
                    alt='Imagem analisada'
                    className={styles.itemImg}
                  />
                  <div className={styles.boxGraph}>
                    <AccuracyGraph accuracy={d.accuracy_image} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
