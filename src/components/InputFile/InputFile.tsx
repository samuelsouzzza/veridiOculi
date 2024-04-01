'use client';
import styles from './InputFile.module.css';
import React from 'react';
import { IImgsForAnalysis } from '@/@types/@types';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { getTotalSizeImgs } from '@/utils/getTotalSizeImgs';

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
      <label htmlFor={id}>
        <FontAwesomeIcon icon={faFolder} />
        <p>{label}</p>
      </label>
      <input className={styles.file} id={id} type='file' multiple {...props} />
      <p className={styles.statsFiles}>
        {selectedImgs?.length ? selectedImgs.length : 0}/{limitImgs + ' '}
        fotos •{' '}
        {selectedImgs ? getTotalSizeImgs(selectedImgs) + ' Mb' : 0 + ' Mb'}
      </p>
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
              <p>{img.raw?.name}</p>
            </div>
          ))
        ) : (
          <p>Você ainda não selecionou nenhuma foto.</p>
        )}
      </div>
    </div>
  );
};
