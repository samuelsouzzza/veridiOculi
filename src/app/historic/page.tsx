import { Metadata } from 'next';
import styles from './page.module.css';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';
import FetchHistoric from '@/components/HistoricView/FetchHistoric';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Histórico',
  description: 'Página para visualizar as minhas análises da Veridi Oculi',
};

export default function historicPage() {
  return (
    <div className={styles.container}>
      <MenuNavHome activeRoute='historic' />
      <FetchHistoric />
    </div>
  );
}
