'use client';
import React from 'react';
import styles from './InputText.module.css';

type InputTextProps = React.ComponentProps<'input'> & {
  label?: string;
  typeValidation?: 'email' | 'password' | 'cpf';
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  validate?: (type: string, value: string) => string;
};

export const InputText = ({
  label,
  typeValidation,
  value,
  setValue,
  validate,
  ...props
}: InputTextProps) => {
  const [message, setMessage] = React.useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (validate && typeValidation) setMessage(validate(typeValidation, value));
  }

  return (
    <div className={styles.container}>
      <label htmlFor={label}>
        {label} {message && <p>{message}</p>}
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
