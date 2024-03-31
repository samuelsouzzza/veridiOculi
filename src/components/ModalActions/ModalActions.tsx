'use client';
import React from 'react';
import styles from './Modal.module.css';
import { Button } from '../Button/Button';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UseGlobalContext } from '@/global/GlobalContext';

export type ModalActionsProps = React.ComponentProps<'div'> & {
  icon: IconDefinition;
  message: string;
  type: 'yes-no' | 'ok';
  onOk: () => void | null;
};

export const ModalActions = ({
  icon,
  message,
  type,
  onOk,
  ...props
}: ModalActionsProps) => {
  const { setModalActions } = UseGlobalContext();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container} {...props}>
          <FontAwesomeIcon icon={icon} />
          <p>{message}</p>
          {type === 'ok' ? (
            <Button
              text='Ok'
              className='btnPrimary'
              onClick={() => setModalActions(null)}
            />
          ) : (
            <div className={styles.boxButtons}>
              <Button
                text='Não'
                className='btnSecondary'
                onClick={() => setModalActions(null)}
              />
              <Button text='Sim' className='btnPrimary' onClick={onOk} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
