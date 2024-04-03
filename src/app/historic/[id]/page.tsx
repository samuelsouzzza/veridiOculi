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
    '/imgs/team/luan_franca.jpg',
    '/example.webp',
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
            <Slider slides={arrExamplesSlides} contain />
          </div>
          <h1 className={styles.speciesName}>Embaúba</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            quidem veniam, magni laboriosam beatae incidunt qui ab cupiditate,
            molestiae architecto repellat assumenda sint. Iste enim sapiente
            placeat magni laboriosam porro excepturi consequuntur fugit
            veritatis, quas doloremque. Dolores quam consequatur, eum
            perspiciatis expedita quidem placeat nihil?
          </p>
        </div>
      </div>
    </>
  );
}
