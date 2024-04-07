'use client';
import React from 'react';

type ButtonProps = React.ComponentProps<'button'> & {
  text?: string;
  primary?: boolean;
  icon?: boolean;
};

export const Button = ({
  children,
  primary,
  text,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button {...props}>
      {icon ? children : text} {icon ? text : false}
    </button>
  );
};
