'use client';
import styles from './InputFile.module.css';
import React from 'react';
import { IImgsForAnalysis } from '@/@types/@types';
import Image from 'next/image';

type InputFileProps = React.ComponentProps<'input'> & {
  id: string;
  label: string;
  selectedImgs?: IImgsForAnalysis[] | null;
  span?: number;
  radius?: number;
};

export const InputFile = ({
  span = 1,
  id,
  label,
  selectedImgs,
  ...props
}: InputFileProps) => {
  return (
    <div className={styles.container} style={{ gridColumn: `span ${span}` }}>
      <label htmlFor={id}>
        {label}
        <input
          className={styles.file}
          id={id}
          type='file'
          multiple
          {...props}
        />
      </label>
      <div className={styles.previewContainer}>
        {selectedImgs &&
          selectedImgs?.map((img, i) => (
            <Image
              className={styles.previewImg}
              key={i}
              src={img.preview}
              alt='Imagens selecionadas manualmente'
              width={300}
              height={300}
            />
          ))}
      </div>
    </div>
  );
};
