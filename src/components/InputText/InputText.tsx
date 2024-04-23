'use client';
import React from 'react';
import styles from './InputText.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { applyMask } from '@/utils/applyMask';

type InputTextProps = React.ComponentProps<'input'> & {
  label?: string;
  typeValidation?: 'name' | 'email' | 'cpf' | 'password' | 'confirmPassword';
  value: string;
  confirmValue?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  validate?: (type: string, value: string, confirmValue?: string) => string;
};

export const InputText = ({
  label,
  typeValidation,
  value,
  confirmValue,
  setValue,
  validate,
  ...props
}: InputTextProps) => {
  const [validationMessage, setValidationMessage] = React.useState<
    string | null
  >(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  React.useEffect(() => {
    if (validate && typeValidation) {
      if (typeValidation === 'confirmPassword') {
        setValidationMessage(validate(typeValidation, value, confirmValue));
      } else if (typeValidation === 'cpf') {
        const numericChars = value.replace(/\D/g, '');

        setValue(applyMask('cpf', numericChars));
      } else setValidationMessage(validate(typeValidation, value));
    }
  }, [value, confirmValue]);

  React.useEffect(() => setValidationMessage(null), []);

  return (
    <div className={styles.container}>
      <label htmlFor={label}>
        <div>
          {label}
          <p className={validationMessage ? styles.invalid : styles.valid}>
            {value.length >= 1 && !validationMessage ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              validationMessage
            )}
          </p>
        </div>
        <input
          className={styles.input}
          id={label}
          value={value}
          onChange={handleChange}
          onBlur={handleChange}
          {...props}
        />
      </label>
    </div>
  );
};
