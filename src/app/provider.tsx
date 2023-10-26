import React from 'react';
import { Provider, useSelector } from 'react-redux';

import Modal from '@/component/Modal';
import store from '@/store';

interface ProvidersProps {
  children: React.ReactNode;
}

const ModalContainer: React.FC = () => {
  const modals = useSelector((state: RootStateType) => state.modal);

  if (modals.length === 0) return <></>;

  return (
    <>
      {modals.map(modal => (
        <Modal
          key={modal.id}
          title={modal.title}
          description={modal.description}
          type={modal.type}
          id={modal.id}
          callbackButton={modal.callbackButton}
        />
      ))}
    </>
  );
};

export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      {children}
      <ModalContainer />
    </Provider>
  );
}
