'use client';
import styles from './BoxFormLogin.module.css';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';
import React from 'react';
import { validationInputs } from '@/utils/validationInputs';
import { UseGlobalContext } from '@/global/GlobalContext';

export default function BoxFormLogin() {
  const router = useRouter();
  const { setModalActions } = UseGlobalContext();

  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');

  const userLogged = {
    name: 'Samuel Ribeiro de Souza',
    email: 'rssamuel17@gmail.com',
  };

  function enterLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setModalActions(null);

    localStorage.setItem('userLogged_vo', JSON.stringify(userLogged));

    const data = {
      email: valueEmail,
      password: valuePassword,
    };

    router.push('/home');
    console.log(data);
  }

  return (
    <div className={styles.container}>
      <h3 className='subtitle'>Entre com a sua conta</h3>
      <form method='post'>
        <InputText
          label='E-Mail'
          type='email'
          typeValidation='email'
          required
          value={valueEmail}
          setValue={setValueEmail}
          validate={validationInputs}
        />
        <InputText
          label='Senha'
          type='password'
          typeValidation='password'
          required
          value={valuePassword}
          setValue={setValuePassword}
        />
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
