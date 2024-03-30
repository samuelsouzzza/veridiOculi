'use client';
import React from 'react';
import { ModalActionsProps } from '@/components/ModalActions/ModalActions';

type IScreens = {
  modalActions: ModalActionsProps | null;
  setModalActions: React.Dispatch<
    React.SetStateAction<ModalActionsProps | null>
  >;
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
  const [modalActions, setModalActions] =
    React.useState<ModalActionsProps | null>(null);

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
