'use client';
import styles from './FormNewAnalysis.module.css';
import { InputFile } from '../InputFile/InputFile';
import { Button } from '../Button/Button';
import { IImgsForAnalysis } from '@/@types/@types';
import React from 'react';
import { UseGlobalContext } from '@/global/GlobalContext';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ModalActions } from '../ModalActions/ModalActions';
import { SelectBox } from '../SelectBox/SelectBox';
import { useRouter } from 'next/navigation';

export const FormNewAnalysis = () => {
  const router = useRouter();
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

  function prepareData() {
    const formData = new FormData();

    const data = {
      species_name: valueSpeciesName,
      imgs: selectedImgs,
    };

    console.log(data);
  }

  function sendForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    prepareData();

    setModalActions({
      message:
        'Suas imagens foram enviadas para análise, acesse a guia "Histórico" para visualizar',
      icon: faCheck,
      type: 'ok',
      onOk: () => {
        cleanForm();
        router.push('/historic');
      },
    });
  }

  return (
    <>
      {modalActions && <ModalActions />}
      <form
        className={styles.container}
        onSubmit={sendForm}
        encType='multipart/form-data'
      >
        <div className={styles.boxSelect}>
          <SelectBox
            id='speciesSelect'
            label='Espécie foco'
            options={speciesOptions}
            value={valueSpeciesName}
            setValue={setValueSpeciesName}
          />
        </div>
        <InputFile
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
