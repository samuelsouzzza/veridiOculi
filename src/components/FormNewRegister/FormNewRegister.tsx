'use client';

import styles from './FormNewRegister.module.css';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { validationInputs } from '@/utils/validationInputs';

export const FormNewRegister = () => {
  const [valueCompleteName, setValueCompleteName] = React.useState('');
  const [valueCpf, setValueCpf] = React.useState('');
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const [valueConfirmPassword, setValueConfirmPassword] = React.useState('');

  function enterRegister(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    const data = {
      complete_name: valueCompleteName,
      cpf: valueCpf,
      email: valueEmail,
      password: valueConfirmPassword,
    };

    console.log('Dados enviados', data);
  }

  return (
    <div className={styles.container}>
      <h3 className='subtitle'>Crie a sua conta</h3>
      <form className={styles.form} method='post'>
        <div className='spanAll'>
          <InputText
            label='Nome completo'
            type='text'
            required
            value={valueCompleteName}
            setValue={setValueCompleteName}
          />
        </div>
        <InputText
          label='CPF'
          type='number'
          required
          value={valueCpf}
          setValue={setValueCpf}
          typeValidation='cpf'
          validate={validationInputs}
        />
        <InputText
          label='E-Mail'
          type='text'
          required
          value={valueEmail}
          setValue={setValueEmail}
          typeValidation='email'
          validate={validationInputs}
        />
        <InputText
          label='Nova senha'
          type='password'
          required
          value={valuePassword}
          setValue={setValuePassword}
          typeValidation='password'
          validate={validationInputs}
        />
        <InputText
          label='Confirmar senha'
          type='password'
          required
          value={valueConfirmPassword}
          setValue={setValueConfirmPassword}
          // compare=
        />
        <div className='spanAll'>
          <Button
            text='Cadastrar'
            className='btnPrimary'
            onClick={enterRegister}
          />
          <p>Ou</p>
          <Button icon text='Cadastrar com o Google' className='btnSecondary'>
            <FontAwesomeIcon icon={faGoogle} />
          </Button>
        </div>
      </form>
    </div>
  );
};
