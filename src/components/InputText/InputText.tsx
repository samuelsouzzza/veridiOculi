'use client';
import React from 'react';
import styles from './InputText.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { applyMask } from '@/utils/applyMask';

type InputTextProps = React.ComponentProps<'input'> & {
  label?: string;
  type: string;
  typeValidation?: 'name' | 'email' | 'cpf' | 'password' | 'confirmPassword';
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  confirmValue?: string;
  validate?: (
    type: 'name' | 'cpf' | 'email' | 'password' | 'confirmPassword',
    value: string,
    confirmValue?: string
  ) => string | null;
};

export const InputText = ({
  label,
  type,
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

  const [viewPassword, setViewPassword] = React.useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  React.useEffect(() => {
    if (validate && typeValidation) {
      if (typeValidation === 'confirmPassword') {
        setValidationMessage(validate(typeValidation, value, confirmValue));
        return;
      }
      if (typeValidation === 'cpf') {
        const numericChars = value.replace(/\D/g, '');
        setValue(applyMask('cpf', numericChars));
        setValidationMessage(validate(typeValidation, value));
        return;
      }
      setValidationMessage(validate(typeValidation, value));
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
        <div className={styles.boxInput}>
          <input
            type={viewPassword ? 'text' : type}
            className={styles.input}
            id={label}
            value={value}
            onChange={handleChange}
            onBlur={handleChange}
            {...props}
          />
          {type === 'password' && (
            <FontAwesomeIcon
              icon={viewPassword ? faEye : faEyeSlash}
              onClick={() => setViewPassword(!viewPassword)}
            />
          )}
        </div>
      </label>
    </div>
  );
};
