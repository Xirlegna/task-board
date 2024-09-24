import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export enum ModalName {
  CREATE_TASK,
}

type ModalState = {
  name: ModalName;
};

type ModalContextValue = ModalState & {
  openModal: (name: ModalName) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export const useModalContext = () => {
  const modalCtx = useContext(ModalContext);

  if (modalCtx === null) {
    throw new Error('ModalContext is null - that should not be the case');
  }

  return modalCtx;
};

const ModalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const [modal, setModal] = useState<ModalName | null>(null);

  const ctx: ModalContextValue = {
    name: modal,
    openModal: (name: ModalName) => setModal(name),
    closeModal: () => setModal(null),
  };

  useEffect(() => setModal(null), [location]);

  return <ModalContext.Provider value={ctx}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;
