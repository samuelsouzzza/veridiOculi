'use client';
import React from 'react';
import { Container, Input } from './InputText.styles.ts';

type InputTextProps = React.ComponentProps<'input'> & {
  label?: string;
};

export const InputText = ({
  label,

  ...props
}: InputTextProps) => {
  return (
    <Container>
      <label htmlFor={label}>
        {label}
        <Input id={label} {...props} />
      </label>
    </Container>
  );
};
