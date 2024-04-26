'use client';
import styles from './BoxFormLogin.module.css';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { validationInputs } from '@/utils/validationInputs';
import { UseGlobalContext } from '@/global/GlobalContext';
import { postLogin } from '@/app/actions/postLogin';
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { redirectPath } from '@/app/actions/redirectPath';
import { ModalActions } from '../ModalActions/ModalActions';

export default function BoxFormLogin() {
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');

  const { modalActions, setModalActions } = UseGlobalContext();

  const isEmailInvalid = validationInputs('email', valueEmail);
  const isPasswordInvalid = validationInputs('password', valuePassword);

  const formData = new FormData();
  formData.append('txt_email', valueEmail);
  formData.append('txt_password', valuePassword);

  async function isValidFiels() {
    const feedback = await postLogin(formData);
    console.log(feedback);

    if (!isEmailInvalid) {
      // setModalActions({
      //   icon: feedback?.ok ? faCheck : faExclamation,
      //   type: 'ok',
      //   message: feedback?.message as string,
      //   onOk: () => {
      //     feedback?.ok ? redirectPath('/home') : setModalActions(null);
      //   },
      // });
      redirectPath('/home');
    } else {
      setModalActions({
        icon: faExclamation,
        type: 'ok',
        message: 'Valide todos os campos antes de enviar o formulário.',
        onOk: () => {
          setModalActions(null);
        },
      });
    }
  }

  return (
    <>
      {modalActions && <ModalActions />}
      <div className={styles.container}>
        <h3 className='subtitle'>Entre com a sua conta</h3>
        <form
          action={() => {
            isValidFiels();
            postLogin(formData);
          }}
        >
          <InputText
            name='txt_email'
            label='E-Mail'
            type='email'
            required
            value={valueEmail}
            setValue={setValueEmail}
            typeValidation='email'
            validate={validationInputs}
          />
          <InputText
            name='txt_password'
            label='Senha'
            type='password'
            required
            value={valuePassword}
            setValue={setValuePassword}
          />
          <div className='spanAll'>
            <Button text='Acessar' className='btnPrimary' type='submit' />
            <p>Ou</p>
          </div>
        </form>
        <Button icon text='Continue com o Google' className='btnSecondary'>
          <FontAwesomeIcon icon={faGoogle} />
        </Button>
        <div className={styles.boxLinks}>
          <a className='linkSimple' href='#'>
            Esqueci a senha
          </a>
          <a className='linkSimple' href='#'>
            Preciso de ajuda
          </a>
        </div>
      </div>
    </>
  );
}
