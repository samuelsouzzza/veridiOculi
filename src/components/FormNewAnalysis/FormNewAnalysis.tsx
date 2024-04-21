'use client';
import styles from './FormNewAnalysis.module.css';
import { InputFile } from '../InputFile/InputFile';
import { Button } from '../Button/Button';
import { IImgsForAnalysis } from '@/@types/@types';
import React from 'react';
import { UseGlobalContext } from '@/global/GlobalContext';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { ModalActions } from '../ModalActions/ModalActions';
import { SelectBox } from '../SelectBox/SelectBox';
import { postAnalysis } from '@/app/actions/postAnalysis';

export const FormNewAnalysis = () => {
  const { modalActions, setModalActions } = UseGlobalContext();

  const speciesOptions = [
    'Análise automática',
    'Embaúba',
    'Pau Brasil',
    'Ypê Rosa',
  ];
  const [valueSpeciesName, setValueSpeciesName] = React.useState(
    speciesOptions[0]
  );
  const [selectedImgs, setSelectedImgs] = React.useState<
    IImgsForAnalysis[] | null
  >(null);

  function cleanForm() {
    setModalActions(null);
    setSelectedImgs(null);
  }

  React.useEffect(() => {
    cleanForm();
  }, []);

  function loadImgs(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { files } = e.target;
    setModalActions(null);

    if (files !== null && files.length > 0) {
      if (files.length > 3) {
        setModalActions({
          message:
            'No plano gratuito você só pode analisar, no máximo, 3 (três) imagens por vez',
          icon: faExclamation,
          type: 'ok',
          onOk: cleanForm,
        });

        return;
      }

      setSelectedImgs(
        Array.from(files).map((file, i) => ({
          id: Date.now() + i,
          preview: URL.createObjectURL(file),
          raw: file,
        }))
      );
    }
  }

  function deleteImg(id: number) {
    if (selectedImgs) {
      const updatedImgs = selectedImgs.filter((img) => img.id !== id);
      setSelectedImgs(updatedImgs);
    }
  }

  return (
    <>
      {modalActions && <ModalActions />}
      <h1>{valueSpeciesName}</h1>
      <form
        className={styles.container}
        encType='multipart/form-data'
        action={postAnalysis}
      >
        <div className={styles.boxSelect}>
          <SelectBox
            name='txt_species_name'
            id='speciesSelect'
            label='Espécie foco'
            options={speciesOptions}
            value={valueSpeciesName}
            setValue={setValueSpeciesName}
          />
        </div>
        <InputFile
          name='txt_imgs_analysis'
          id='idInputImgsNewAnalysis'
          label='Selecione as imagens para análise'
          selectedImgs={selectedImgs ? selectedImgs : null}
          onChange={loadImgs}
          onDelete={deleteImg}
          accept='image/*'
        />
        {selectedImgs && selectedImgs.length > 0 && (
          <Button
            text={`Analisar ${selectedImgs.length} imagem(ens)`}
            className='btnPrimary'
          />
        )}
      </form>
    </>
  );
};
