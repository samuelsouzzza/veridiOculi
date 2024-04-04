import RegisterView from '@/components/RegisterView/RegisterView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Novo cadastro',
  description: 'Página de novos cadastros para a Veridi Oculi',
};

export default function registerPage() {
  return <RegisterView />;
}
