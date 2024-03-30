'use client';
import React from 'react';
import styles from './Modal.module.css';
import { Button } from '../Button/Button';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ModalActionsProps = React.ComponentProps<'div'> & {
  icon: IconDefinition;
  message: string;
  type: 'yes-no' | 'ok';
};

export const ModalActions = ({
  icon,
  message,
  type,
  ...props
}: ModalActionsProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} {...props}>
        <FontAwesomeIcon icon={icon} />
        <p>{message}</p>
        {type === 'ok' ? (
          <Button text='Ok' className='btnPrimary' />
        ) : (
          <div className={styles.boxButtons}>
            <Button text='Não' className='btnSecondary' />
            <Button text='Sim' className='btnPrimary' />
          </div>
        )}
      </div>
    </div>
  );
};
