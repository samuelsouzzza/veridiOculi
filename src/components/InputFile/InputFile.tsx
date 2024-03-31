'use client';
import styles from './InputFile.module.css';
import React from 'react';
import { IImgsForAnalysis } from '@/@types/@types';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';

type InputFileProps = React.ComponentProps<'input'> & {
  id: string;
  label: string;
  selectedImgs?: IImgsForAnalysis[] | null;
  radius?: number;
  onDelete: (id: number) => void;
};

export const InputFile = ({
  id,
  label,
  selectedImgs,
  onDelete,
  ...props
}: InputFileProps) => {
  const limitImgs = 3;

  return (
    <div className={styles.container}>
      <p
        className={`${styles.count} ${
          selectedImgs?.length === 3 ? styles.blink : ''
        }`}
      >
        <FontAwesomeIcon icon={faGratipay} />
        Plano gratuito • {selectedImgs?.length ? selectedImgs.length : 0}/
        {limitImgs + ' '}
        fotos
        {selectedImgs?.length === limitImgs
          ? ' | Atualize para o plano premium para subir imagens ilimitadas'
          : ''}
      </p>
      <label htmlFor={id}>
        <FontAwesomeIcon icon={faFolder} />
        <p>{label}</p>
      </label>
      <input className={styles.file} id={id} type='file' multiple {...props} />
      <div className={styles.previewContainer}>
        {selectedImgs && selectedImgs.length > 0 ? (
          selectedImgs?.map((img) => (
            <div key={img.id} className={styles.boxImg}>
              <span className={styles.delImg} onClick={() => onDelete(img.id)}>
                <FontAwesomeIcon icon={faX} />
              </span>
              <Image
                className={styles.previewImg}
                src={img.preview}
                alt='Imagens selecionadas manualmente'
                width={300}
                height={300}
                priority
              />
            </div>
          ))
        ) : (
          <p>Você ainda não selecionou nenhuma foto.</p>
        )}
      </div>
    </div>
  );
};
