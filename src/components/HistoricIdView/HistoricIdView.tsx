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
  const slides = data.data.map((d) => d.path);

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
          <Slider slides={slides} contain />
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
                  <AccuracyGraph accuracy={d.accuracy} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
