'use client';

import React from 'react';
import { Container } from './Button.styles';

type ButtonProps = React.ComponentProps<'button'> & {
  text: string;
  primary?: boolean;
  ref?: React.Ref<any>;
};

export const Button = ({ primary, text, ...props }: ButtonProps) => {
  return (
    <>
      <Container primary={primary} {...props}>
        {text}
      </Container>
    </>
  );
};
