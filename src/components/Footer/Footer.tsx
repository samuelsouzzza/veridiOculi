'use client';

import styles from './Footer.module.css';

export const Footer = () => {
  const now = new Date();
  return (
    <div className={styles.container}>
      © {now.getFullYear()} Todos os direitos reservados
    </div>
  );
};
