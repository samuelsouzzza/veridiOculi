import { Metadata } from 'next';
import styles from './page.module.css';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';
import React from 'react';
import { FormNewAnalysis } from '@/components/FormNewAnalysis/FormNewAnalysis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Nova análise',
  description: 'Página de novas análises da Veridi Oculi',
};

export default function newanalysisPage() {
  return (
    <div className={styles.container}>
      <MenuNavHome activeRoute='new-analysis' />
      <div className={styles.view}>
        <div className={styles.header}>
          <h1 className='subtitle'>Nova análise</h1>
          <p className={styles.labelPlan}>
            <FontAwesomeIcon icon={faGratipay} />
            Plano gratuito
          </p>
        </div>
        <FormNewAnalysis />
      </div>
    </div>
  );
}
