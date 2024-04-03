'use client';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';
import styles from './page.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Slider } from '@/components/Slider/Slider';

type PageParams = {
  params: {
    id: number;
  };
};

export default function historicIdPage({ params }: PageParams) {
  const arrExamplesSlides = [
    '/example.webp',
    '/imgs/bg-01.svg',
    '/imgs/bg-01.svg',
    '/imgs/bg-01.svg',
    '/imgs/bg-01.svg',
  ];

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
          <div className={styles.boxImgs}>
            <Slider slides={arrExamplesSlides} />
          </div>
          <h1>Foto 01</h1>
        </div>
      </div>
    </>
  );
}
