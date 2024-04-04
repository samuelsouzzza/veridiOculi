import { Metadata } from 'next';
import LoginView from '@/components/LoginView/LoginView';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Login',
  description: 'Página de acesso para os clientes da Veridi Ocul',
};

export default function loginPage() {
  return <LoginView />;
}
