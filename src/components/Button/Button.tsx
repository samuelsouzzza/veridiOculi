'use client';
import React from 'react';

type ButtonProps = React.ComponentProps<'a'> & {
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
    <a {...props}>
      {icon ? children : text} {icon ? text : false}
    </a>
  );
};
