'use client';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';
import styles from './page.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

type PageParams = {
  params: {
    id: number;
  };
};

export default function historicIdPage({ params }: PageParams) {
  return (
    <>
      <MenuNavHome activeRoute='historic' />
      <div className={styles.container}>
        <div className={styles.view}>
          <Link href={'/historic'} className='linkSimple'>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>
          <h1 className='subtitle'>Análise #{params.id}</h1>
        </div>
      </div>
    </>
  );
}
