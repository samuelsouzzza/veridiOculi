'use client';

import styles from './FormNewRegister.module.css';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { validationInputs } from '@/utils/validationInputs';
import { postUser } from '@/app/actions/postUser';

export const FormNewRegister = () => {
  const [valueCompleteName, setValueCompleteName] = React.useState('');
  const [valueCpf, setValueCpf] = React.useState('');
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const [valueConfirmPassword, setValueConfirmPassword] = React.useState('');

  async function formSended(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const thisForm = new FormData(e.currentTarget);
    const response = await postUser(thisForm);

    console.log(response);
  }

  return (
    <div className={styles.container}>
      <h3 className='subtitle'>Crie a sua conta</h3>
      <form className={styles.form} onSubmit={formSended}>
        <div className='spanAll'>
          <InputText
            name='txt_complete_name'
            label='Nome completo'
            type='text'
            required
            value={valueCompleteName}
            setValue={setValueCompleteName}
          />
        </div>
        <InputText
          name='txt_cpf'
          label='CPF'
          type='number'
          required
          value={valueCpf}
          setValue={setValueCpf}
          typeValidation='cpf'
          validate={validationInputs}
        />
        <InputText
          name='txt_email'
          label='E-Mail'
          type='text'
          required
          value={valueEmail}
          setValue={setValueEmail}
          typeValidation='email'
          validate={validationInputs}
        />
        <InputText
          name='txt_password'
          label='Nova senha'
          type='password'
          required
          value={valuePassword}
          setValue={setValuePassword}
          typeValidation='password'
          validate={validationInputs}
        />
        <InputText
          name='txt_confirm_password'
          label='Confirmar senha'
          type='password'
          required
          value={valueConfirmPassword}
          setValue={setValueConfirmPassword}
        />
        <div className='spanAll'>
          <Button text='Cadastrar' className='btnPrimary' type='submit' />
          <p>Ou</p>
        </div>
      </form>
      <Button icon text='Cadastrar com o Google' className='btnSecondary'>
        <FontAwesomeIcon icon={faGoogle} />
      </Button>
    </div>
  );
};
