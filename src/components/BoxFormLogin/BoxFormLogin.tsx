'use client';
import styles from './BoxFormLogin.module.css';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';

export default function BoxFormLogin() {
  const router = useRouter();

  function enterLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    router.push('/home');
  }

  return (
    <div className={styles.container}>
      <h3 className='subtitle'>Entre com a sua conta</h3>
      <form action='#'>
        <InputText label='E-Mail' type='text' required />
        <InputText label='Senha' type='password' required />
        <div className='spanAll'>
          <Button text='Acessar' className='btnPrimary' onClick={enterLogin} />
          <p>Ou</p>
          <Button icon text='Continue com o Google' className='btnSecondary'>
            <FontAwesomeIcon icon={faGoogle} />
          </Button>
        </div>
        <div className={styles.boxLinks}>
          <a className='linkSimple' href='#'>
            Esqueci a senha
          </a>
          <a className='linkSimple' href='#'>
            Preciso de ajuda
          </a>
        </div>
      </form>
    </div>
  );
}
