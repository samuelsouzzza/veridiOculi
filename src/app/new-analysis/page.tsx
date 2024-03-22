import { Metadata } from 'next';
import styles from './page.module.css';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Nova análise',
  description: 'Página de novas análises da Veridi Oculi',
};

export default function newanalysisPage() {
  return (
    <div className={styles.container}>
      <MenuNavHome activeRoute='new-analysis' />
      Nova análises
    </div>
  );
}
