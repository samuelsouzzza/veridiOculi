import { Metadata } from 'next';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';
import styles from './page.module.css';
import namedRoutes from '@/utils/namedRoutes';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Home',
  description: 'Página inicial da Veridi Oculi',
};

export default function homePage() {
  return (
    <div className={styles.container}>
      <MenuNavHome activeRoute='home' />
      <h1>Página inicial</h1>
    </div>
  );
}
