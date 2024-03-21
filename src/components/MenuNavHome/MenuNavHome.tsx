import styles from './MenuNavHome.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export const MenuNavHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxLogo}>
        <Link href={'/home'}>
          <Image
            src='/imgs/logoLabel.svg'
            alt='Logo Veridi Oculi'
            width={220}
            height={70}
            sizes='100vh'
            quality={80}
            priority
          />
        </Link>
      </div>
      <div className={styles.box}>
        <Link href={'#'} className='btnSecondary'>
          Página Inicial
        </Link>
        <Link href={'#'} className='btnSecondary'>
          Nova Análise
        </Link>
        <Link href={'#'} className='btnSecondary'>
          Minhas Análises
        </Link>
        <Button icon text='Minha conta' className='btnSecondary'>
          <FontAwesomeIcon icon={faUser} />
        </Button>
      </div>
    </div>
  );
};
