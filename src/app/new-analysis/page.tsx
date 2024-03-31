import { Metadata } from 'next';
import styles from './page.module.css';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';
import React from 'react';
import { FormNewAnalysis } from '@/components/FormNewAnalysis/FormNewAnalysis';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Nova análise',
  description: 'Página de novas análises da Veridi Oculi',
};

export default function newanalysisPage() {
  return (
    <div className={styles.container}>
      <MenuNavHome activeRoute='new-analysis' />
      <div className={styles.view}>
        <h1 className='title'>Nova análise</h1>
        <FormNewAnalysis />
      </div>
    </div>
  );
}
