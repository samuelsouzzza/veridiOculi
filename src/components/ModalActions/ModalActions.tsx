'use client';
import React from 'react';
import styles from './Modal.module.css';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UseGlobalContext } from '@/global/GlobalContext';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// export type ModalActionsProps = React.ComponentProps<'div'> & {
// icon: IconDefinition;
// message: string;
// type: 'yes-no' | 'ok';
// onOk: () => void | null;
// };

export const ModalActions = () => {
  const { modalActions, setModalActions } = UseGlobalContext();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <FontAwesomeIcon icon={modalActions?.icon as IconDefinition} />
          <p>{modalActions?.message}</p>
          {modalActions?.type === 'ok' ? (
            <Button
              text='Ok'
              className='btnPrimary'
              onClick={() => modalActions?.onOk()}
            />
          ) : (
            <div className={styles.boxButtons}>
              <Button
                text='Não'
                className='btnSecondary'
                onClick={() => setModalActions(null)}
              />
              <Button
                text='Sim'
                className='btnPrimary'
                onClick={() => modalActions?.onOk()}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
