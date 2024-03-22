import { Metadata } from 'next';
import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';
import styles from './page.module.css';
import { Slider } from '@/components/Slider/Slider';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Home',
  description: 'Página inicial da Veridi Oculi',
};

export default function homePage() {
  const imgs = ['/imgs/bg-01.svg', '/imgs/bg-01.svg'];

  return (
    <div className={styles.container}>
      <MenuNavHome activeRoute='home' />
      <section className={styles.initial}>
        <div className={styles.boxSlider}>
          <Slider slides={imgs} />
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.boxAbout}>
          <Image
            src={'/imgs/logo.png'}
            width={50}
            height={60}
            alt='Logo da Veridi Oculi'
          />
          <h1 className='title'>O Veridi Oculi</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
            earum quam incidunt voluptatum animi libero rerum quae, aut,
            doloremque exercitationem magni. Eligendi, aspernatur molestiae
            itaque dolore natus repellendus fuga quis minus hic eveniet ipsa,
            dolorum necessitatibus reprehenderit doloremque et quidem minima
            repellat tempora sunt earum?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
            earum quam incidunt voluptatum animi libero rerum quae, aut,
            doloremque exercitationem magni. Eligendi, aspernatur molestiae
            itaque dolore natus repellendus fuga quis minus hic eveniet ipsa,
            dolorum necessitatibus reprehenderit doloremque et quidem minima
            repellat tempora sunt earum?
          </p>
        </div>
      </section>
      <section className={styles.initial}>Oi</section>
      <section className={styles.initial}>Oi</section>
    </div>
  );
}
