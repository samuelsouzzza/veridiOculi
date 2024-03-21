'use client';

import styles from './FormNewRegister.module.css';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export const FormNewRegister = () => {
  function enterRegister(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    alert('Cadastrou');
  }

  return (
    <div className={styles.container}>
      <h3 className='subtitle'>Crie a sua conta</h3>
      <form className={styles.form} action='#'>
        <InputText label='Nome' type='text' required />
        <InputText label='Sobrenome' type='text' required />
        <InputText label='CPF' type='text' required />
        <InputText label='E-Mail' type='text' required />
        <InputText label='Nova senha' type='password' required />
        <InputText label='Confirmar senha' type='password' required />
        <div className={styles.spanAll}>
          <Button
            text='Cadastrar'
            onClick={enterRegister}
            className='btnPrimary'
          />
          <p>Ou</p>
          <Button
            icon
            text='Cadastrar com o Google'
            className='btnSecondary'
            onClick={enterRegister}
          >
            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
          </Button>
        </div>
      </form>
    </div>
  );
};
