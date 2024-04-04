import styles from './HistoricIdView.module.css';
import Link from 'next/link';
import { Slider } from '../Slider/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { IReports } from '@/@types/@types';
import { MenuNavHome } from '../MenuNavHome/MenuNavHome';
import Image from 'next/image';
import AccuracyGraph from '../AccuracyGraph/AccuracyGraph';

type HistoricIdViewProps = {
  data: IReports;
};

export default function HistoricIdView({ data }: HistoricIdViewProps) {
  const arrExamplesSlides = [
    '/example.webp',
    '/imgs/team/luan_franca.jpg',
    '/example.webp',
    '/imgs/bg-01.svg',
    '/imgs/bg-01.svg',
    '/imgs/bg-01.svg',
  ];

  return (
    <div className={styles.container}>
      <MenuNavHome activeRoute='historic' />
      <div className={styles.view}>
        <Link href={'/historic'} className='linkSimple'>
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>
        <h1 className='subtitle'>Análise #{data.id}</h1>
        <div className={styles.boxImgs}>
          <Slider slides={arrExamplesSlides} contain />
        </div>
        {data.data.map((d) => {
          return (
            <div className={styles.containerItemAnalysis}>
              <h1 className={styles.speciesName}>{d.species_name}</h1>
              <div className={styles.boxItem}>
                <Image
                  src={d.path}
                  width={500}
                  height={300}
                  alt='Imagem analisada'
                  className={styles.itemImg}
                />
                <div className={styles.boxGraph}>
                  <AccuracyGraph />
                </div>
              </div>
              {/* <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                quidem veniam, magni laboriosam beatae incidunt qui ab
                cupiditate, molestiae architecto repellat assumenda sint. Iste
                enim sapiente placeat magni laboriosam porro excepturi
                consequuntur fugit veritatis, quas doloremque. Dolores quam
                consequatur, eum perspiciatis expedita quidem placeat nihil?
              </p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
