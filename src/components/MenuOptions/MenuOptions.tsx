'use client';
import styles from './MenuOptions.module.css';
import Link from 'next/link';
import { CSSProperties } from 'react';
import React from 'react';
import { clearToken } from '@/app/actions/clearToken';

export const MenuOptions = React.forwardRef<HTMLDivElement>(
  (props: React.ComponentProps<'div'>, ref) => {

    const styleOption: CSSProperties = {
      justifyContent: 'start',
      padding: '0 2%',
    };

    async function cleanSession() {
      clearToken();
      localStorage.removeItem('userLogged');
      window.location.reload();
    }

    return (
      <div className={styles.container} ref={ref} {...props}>
        <ul>
          <li>
            <Link
              className='btnSecondary'
              style={styleOption}
              href={'/my-account'}
            >
              <span>Meu perfil</span>
            </Link>
          </li>
          <li>
            <Link
              className='btnSecondary'
              style={styleOption}
              href={'/settings'}
            >
              <span>Configurações</span>
            </Link>
          </li>
          <li>
            <span
              onClick={cleanSession}
              className={styles.btnLogout + ' btnSecondary'}
            >
              <p>Sair</p>
            </span>
          </li>
        </ul>
      </div>
    );
  }
);
