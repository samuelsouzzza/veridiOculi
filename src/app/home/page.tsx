import { Metadata } from 'next';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Home',
  description: 'Página inicial da Veridi Oculi',
};

export default function homePage() {
  return (
    <div className={styles.container}>
      <MenuNavHome />
    </div>
  );
}
