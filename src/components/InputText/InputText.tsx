'use client';
import React from 'react';
import styles from './InputText.module.css';

type InputTextProps = React.ComponentProps<'input'> & {
  label?: string;
};

export const InputText = ({
  label,

  ...props
}: InputTextProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={label}>
        {label}
        <input className={styles.input} id={label} {...props} />
      </label>
    </div>
  );
};
