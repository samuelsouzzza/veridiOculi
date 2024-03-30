import { Metadata } from 'next';
import styles from './page.module.css';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';
import React from 'react';
import { FormNewAnalysis } from '@/components/FormNewAnalysis/FormNewAnalysis';
import { ModalActions } from '@/components/ModalActions/ModalActions';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Nova análise',
  description: 'Página de novas análises da Veridi Oculi',
};

export default function newanalysisPage() {
  return (
    <>
      <ModalActions
        message='Mensagem de mairo de testse teste ashfssl lsdf'
        icon={faWarning}
        type='ok'
      />
      <div className={styles.container}>
        <MenuNavHome activeRoute='new-analysis' />
        <div className={styles.view}>
          <FormNewAnalysis />
        </div>
      </div>
    </>
  );
}
