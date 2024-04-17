'use client';
import styles from './HomeView.module.css';
import { MenuNavHome } from '../MenuNavHome/MenuNavHome';
import { Slider } from '../Slider/Slider';
import Image from 'next/image';
import { CardTeam } from '../CardTeam/CardTeam';
import { Footer } from '../Footer/Footer';
import { IMember } from '@/@types/@types';
import { verifySession } from '@/utils/verifySession';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function HomeView() {
  const router = useRouter();

  React.useEffect(() => {
    if (!verifySession().getSession()) router.push('/');
  }, []);

  const imgs = [
    '/imgs/bg-01.svg',
    '/imgs/bg-01.svg',
    '/imgs/bg-01.svg',
    '/imgs/bg-01.svg',
  ];
  const members: IMember[] = [
    {
      id: 1,
      profile: '/imgs/team/valmir_cardoso.png',
      name: 'Valmir Cardoso',
      office: 'Dev Back-End',
      links: {
        github: 'https://github.com/valmirc17',
        linkedin: 'https://linkedin.com/in/valmirc17',
      },
    },
    {
      id: 2,
      profile: '/imgs/team/samuel_souzzza.jpg',
      name: 'Samuel Souza',
      office: 'Dev Front-End',
      links: {
        github: 'https://github.com/samuelsouzzza',
        linkedin: 'https://linkedin.com/in/samuelsouzzza',
      },
    },
    {
      id: 3,
      profile: '/imgs/team/luan_franca.jpg',
      name: 'Luan França',
      office: 'Designer UX/UI',
      links: {
        github: 'https://github.com/luangmf',
        linkedin: 'https://linkedin.com/in/luangmf',
      },
    },
    {
      id: 4,
      profile: '/imgs/team/ricardo_matsumura.png',
      name: 'Ricardo Matsumura',
      office: 'CEO & Dev Back-End',
      links: {
        github: 'https://github.com/fuzilo',
        linkedin: 'https://linkedin.com/in/ricardo-matsumura-09726a133',
      },
    },
  ];

  return (
    <div className={styles.container}>
      <MenuNavHome activeRoute='home' />
      <section className={styles.initial}>
        <Slider slides={imgs} autoPlay />
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
      <section className={styles.impact}>
        <div className={styles.boxImpact}>
          <Image
            src={'/imgs/chave-inglesa.png'}
            width={60}
            height={60}
            alt='Logo da Veridi Oculi'
          />
          <h1 className='title'>Impacto do Projeto</h1>
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
      <section className={styles.team}>
        <div className={styles.boxTeam}>
          <h1 className='title'>Nossa equipe</h1>
          <div className={styles.boxCards}>
            {members.map((m) => {
              return (
                <CardTeam
                  key={m.id}
                  profile={m.profile}
                  name={m.name}
                  office={m.office}
                  links={m.links}
                />
              );
            })}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo id
            tempora soluta esse nostrum? Qui inventore assumenda architecto
            excepturi nisi atque. Quod, totam similique porro neque aspernatur
            earum voluptates quaerat saepe laborum deleniti rerum possimus
            repellat, qui dolor nostrum pariatur sapiente impedit magni minima?
            Molestiae soluta sunt nobis. Repellendus, voluptates.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
