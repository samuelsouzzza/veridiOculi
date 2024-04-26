'use client';

import styles from './FormNewRegister.module.css';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { validationInputs } from '@/utils/validationInputs';
import { postUser } from '@/app/actions/postUser';
import { UseGlobalContext } from '@/global/GlobalContext';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ModalActions } from '../ModalActions/ModalActions';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { redirectPath } from '@/app/actions/redirectPath';

export const FormNewRegister = () => {
  const [valueCompleteName, setValueCompleteName] = React.useState('');
  const [valueCpf, setValueCpf] = React.useState('');
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const [valueConfirmPassword, setValueConfirmPassword] = React.useState('');

  const { modalActions, setModalActions } = UseGlobalContext();

  React.useEffect(() => {
    setModalActions(null);
  }, []);

  const isCompleteNameInvalid = validationInputs('name', valueCompleteName);
  const isEmailInvalid = validationInputs('email', valueEmail);
  const isCpfInvalid = validationInputs('cpf', valueCpf);
  const isPasswordInvalid = validationInputs('password', valuePassword);
  const isConfirmPasswordInvalid = validationInputs(
    'confirmPassword',
    valuePassword,
    valueConfirmPassword
  );

  const formData = new FormData();

  formData.append('txt_complete_name', valueCompleteName);
  formData.append('txt_cpf', valueCpf);
  formData.append('txt_email', valueEmail);
  formData.append('txt_password', valuePassword);
  formData.append('txt_confirm_password', valueConfirmPassword);

  async function isValidFiels() {
    const feedback = await postUser(formData);

    if (
      !isCompleteNameInvalid &&
      !isEmailInvalid &&
      !isCpfInvalid &&
      !isPasswordInvalid &&
      !isConfirmPasswordInvalid
    ) {
      setModalActions({
        icon: feedback?.ok ? faCheck : faExclamation,
        type: 'ok',
        message: feedback?.message as string,
        onOk: () => {
          feedback?.ok ? redirectPath('/login') : setModalActions(null);
        },
      });
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
        <h3 className='subtitle'>Crie a sua conta</h3>
        <form
          className={styles.form}
          action={() => {
            isValidFiels();
            postUser(formData);
          }}
        >
          <div className='spanAll'>
            <InputText
              name='txt_complete_name'
              label='Nome completo *'
              type='text'
              maxLength={50}
              required
              value={valueCompleteName}
              setValue={setValueCompleteName}
              typeValidation='name'
              validate={validationInputs}
              placeholder='Samuel Ribeiro de Souza'
            />
          </div>
          <InputText
            name='txt_cpf'
            label='CPF *'
            type='text'
            maxLength={14}
            required
            value={valueCpf}
            setValue={setValueCpf}
            typeValidation='cpf'
            validate={validationInputs}
            placeholder='999.999.999-99'
          />
          <InputText
            name='txt_email'
            label='E-Mail *'
            type='text'
            maxLength={50}
            required
            value={valueEmail}
            setValue={setValueEmail}
            typeValidation='email'
            validate={validationInputs}
            placeholder='samuel.souza@gmail.com'
          />
          <InputText
            name='txt_password'
            label='Nova senha *'
            type='password'
            maxLength={15}
            required
            value={valuePassword}
            setValue={setValuePassword}
            typeValidation='password'
            validate={validationInputs}
            placeholder='6 dígitos e caractere especial'
          />
          <InputText
            name='txt_confirm_password'
            label='Confirmar senha *'
            type='password'
            maxLength={15}
            required
            value={valueConfirmPassword}
            setValue={setValueConfirmPassword}
            confirmValue={valuePassword}
            typeValidation='confirmPassword'
            validate={validationInputs}
            placeholder='Idêntica à nova senha'
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
    </>
  );
};
