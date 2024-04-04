import { Metadata } from 'next';
import NewAnalysisView from '@/components/NewAnalysisView/NewAnalysisView';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Nova análise',
  description: 'Página de novas análises da Veridi Oculi',
};

export default function newanalysisPage() {
  return <NewAnalysisView />;
}
