'use client';
import React from 'react';
import styles from './InputText.module.css';

type InputTextProps = React.ComponentProps<'input'> & {
  label?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: string;
};

export const InputText = ({
  label,
  value,
  setValue,
  error,
  ...props
}: InputTextProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={label}>
        {label} {error && <p>{error}</p>}
        <input
          className={styles.input}
          id={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          {...props}
        />
      </label>
    </div>
  );
};
