import { Metadata } from 'next';
import HomeView from '@/components/HomeView/HomeView';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Home',
  description: 'Página inicial da Veridi Oculi',
};

export default function homePage() {
  return <HomeView />;
}
