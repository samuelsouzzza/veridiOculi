'use client';
import React from 'react';
import { IModalActions } from '@/@types/@types';

type IScreens = {
  modalActions: IModalActions | null;
  setModalActions: React.Dispatch<React.SetStateAction<IModalActions | null>>;
};

const GlobalContext = React.createContext<IScreens | null>(null);

export const UseGlobalContext = () => {
  const context = React.useContext(GlobalContext);
  if (!context) throw new Error('useContext deve estar dentro do Provider');
  return context;
};

export const GlobalContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [modalActions, setModalActions] = React.useState<IModalActions | null>(
    null
  );

  return (
    <GlobalContext.Provider
      value={{
        modalActions,
        setModalActions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
