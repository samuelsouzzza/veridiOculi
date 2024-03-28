import { Metadata } from 'next';
import styles from './page.module.css';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Histórico',
  description: 'Página para visualizar as minhas análises da Veridi Oculi',
};

export default function historicPage() {
  return (
    <div className={styles.container}>
      <MenuNavHome activeRoute='my-analysis' />
      Histórico
    </div>
  );
}
