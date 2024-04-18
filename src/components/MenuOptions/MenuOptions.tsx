'use client';
import styles from './MenuOptions.module.css';
import Link from 'next/link';
import { CSSProperties } from 'react';
import React from 'react';
import { VerifySession } from '@/utils/VerifySession';

export const MenuOptions = React.forwardRef<HTMLDivElement>(
  (props: React.ComponentProps<'div'>, ref) => {
    const styleOption: CSSProperties = {
      justifyContent: 'start',
      padding: '0 2%',
    };

    const { cleanSession } = VerifySession();

    return (
      <div className={styles.container} ref={ref} {...props}>
        <ul>
          <li>
            <Link
              className='btnSecondary'
              style={styleOption}
              href={'/myaccount'}
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
            <Link
              className='btnSecondary'
              style={styleOption}
              href={'/'}
              onClick={cleanSession}
            >
              <span>Sair</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
);
