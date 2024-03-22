import { Metadata } from 'next';
import styles from './page.module.css';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Minhas análises',
  description: 'Página para visualizar as minhas análises da Veridi Oculi',
};

export default function myanalysisPage() {
  return (
    <div className={styles.container}>
      <MenuNavHome activeRoute='my-analysis' />
      Minhas análises
    </div>
  );
}
