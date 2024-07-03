import styles from './MenuNavHome.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { MenuOptions } from '../MenuOptions/MenuOptions';
import { getToken } from '@/app/actions/getToken';

type MenuNavHomeProps = {
  activeRoute?: string;
};

export const MenuNavHome = ({ activeRoute }: MenuNavHomeProps) => {
  const [active, setActive] = React.useState(activeRoute);
  const [showOptions, setShowOptions] = React.useState(false);
  const [hasLogged, setHasLogged] = React.useState<
    Promise<void> | string | undefined
  >(verifyLogin());

  const refMenu = React.useRef<HTMLDivElement>(null);

  async function verifyLogin() {
    const TOKEN = await getToken();
    setHasLogged(TOKEN);
  }

  React.useEffect(() => {
    verifyLogin();
  }, []);

  function handleActive(tab: string) {
    setActive(tab);
  }

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (refMenu.current && !refMenu.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        {hasLogged ? (
          <>
            <Link
              href={'/new-analysis'}
              className={`btnSecondary ${
                active === 'new-analysis' ? 'active' : ''
              }`}
              onClick={() => handleActive('new-analysis')}
            >
              <FontAwesomeIcon icon={faPlus} /> Nova Análise
            </Link>
            <Link
              href={'/historic'}
              className={`btnSecondary ${
                active === 'historic' ? 'active' : ''
              }`}
              onClick={() => handleActive('historic')}
            >
              <FontAwesomeIcon icon={faClockRotateLeft} />
              Histórico
            </Link>
          </>
        ) : (
          <div className={styles.box}>
            <Link className='btnSecondary' href={'#'}>
              Ver Planos
            </Link>
            <Link className='btnSecondary' href={'/register'}>
              Cadastrar
            </Link>
            <Link className='btnPrimary' href={'/login'}>
              Entrar
            </Link>
          </div>
        )}
        {hasLogged && (
          <Button
            icon
            text={`Logado`}
            className='btnSecondary'
            onClick={() => setShowOptions(true)}
          >
            <FontAwesomeIcon icon={faUser} />
          </Button>
        )}

        {showOptions && <MenuOptions ref={refMenu} />}
      </div>
    </div>
  );
};
