import { Metadata } from 'next';
import FetchHistoric from '@/components/HistoricView/FetchHistoric';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Histórico',
  description: 'Página para visualizar as minhas análises da Veridi Oculi',
};

export default function historicPage() {
  return <FetchHistoric />;
}
