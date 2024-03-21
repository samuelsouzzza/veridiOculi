import { Metadata } from 'next';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Home',
  description: 'Página inicial da Veridi Oculi',
};

export default function homePage() {
  return <MenuNavHome />;
}
