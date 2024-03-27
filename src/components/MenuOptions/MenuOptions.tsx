'use client';

import styles from './MenuOptions.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faX } from '@fortawesome/free-solid-svg-icons';
import { CSSProperties } from 'react';
import React from 'react';

export const MenuOptions = React.forwardRef<HTMLDivElement>(
  (props: React.ComponentProps<'div'>, ref) => {
    const styleOption: CSSProperties = {
      justifyContent: 'start',
      padding: '0 2%',
    };

    return (
      <div className={styles.container} ref={ref} {...props}>
        <ul>
          <li>
            <Link className='btnSecondary' style={styleOption} href={'#'}>
              <FontAwesomeIcon icon={faUser} />
              <span>Meu perfil</span>
            </Link>
          </li>
          <li>
            <Link className='btnSecondary' style={styleOption} href={'#'}>
              <FontAwesomeIcon icon={faGear} />
              <span>Configurações</span>
            </Link>
          </li>
          <li>
            <Link className='btnSecondary' style={styleOption} href={'/'}>
              <FontAwesomeIcon icon={faX} />
              <span>Sair</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
);
