'use client';
import styles from './CardTeam.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

type CardTeamProps = {
  profile: string;
  name: string;
  office: string;
  links: { github: string; linkedin: string };
};

export const CardTeam = ({ profile, name, office, links }: CardTeamProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.boxImg}>
        <img
          className={styles.profileImg}
          src={profile}
          // width={300}
          // height={300}
          alt={'Foto de um membro da equipe'}
        />
      </div>
      <div className={styles.boxDescription}>
        <h4>{name}</h4>
        <span>{office}</span>
      </div>
      <div className={styles.boxIcons}>
        <Link href={links.github}>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href={links.linkedin}>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
    </div>
  );
};
