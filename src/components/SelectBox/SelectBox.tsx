'use client';

import React from 'react';
import styles from './SelectBox.module.css';

type SelectBoxProps = React.ComponentProps<'select'> & {
  id: string;
  label?: string;
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SelectBox = ({
  id,
  label,
  options,
  value,
  setValue,
  ...props
}: SelectBoxProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          className={styles.input}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        >
          {options.map((o, i) => {
            return (
              <option key={i} value={o}>
                {o}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};
