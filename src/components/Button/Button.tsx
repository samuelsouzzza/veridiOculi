'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { Loading } from '../Loading/Loading';

type ButtonProps = React.ComponentProps<'button'> & {
  text?: string;
  icon?: boolean;
};

export const Button = ({
  children,
  type,
  text,
  icon,
  ...props
}: ButtonProps) => {
  const { pending } = useFormStatus();

  function renderContent(): JSX.Element | string {
    if (pending) return <Loading />;
    else if (!pending && icon)
      return (
        <>
          {children}
          {text}
        </>
      );
    else return text as string;
  }

  return (
    <button disabled={pending} {...props}>
      {renderContent()}
    </button>
  );
};
