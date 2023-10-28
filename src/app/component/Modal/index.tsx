import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@/component/common/Button';
import { closeModal } from '@/slices/modalSlice';

import Icon from './Icon';

const Modal = ({
  id,
  title,
  description,
  type = 'default',
  callbackButton,
}: ModalState) => {
  const dispatch = useDispatch();

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed left-0 top-0 z-[1055] h-full w-full flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-900 bg-opacity-40 dark:bg-opacity-40 dark:bg-neutral-900"
      id={id}
      aria-labelledby="exampleModalLabel"
      onClick={() => dispatch(closeModal(id))}
    >
      <div
        className="pointer-events-none transition-all duration-300 ease-in-out"
        onClick={e => handleModalClick(e)}
      >
        <div className="pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-clip-padding text-current shadow-lg dark:bg-neutral-600 p-6 gap-8">
          <div className="flex gap-4 rounded-t-md">
            <Icon type={type} />
            <div>
              <h5 className="text-xl font-medium text-neutral-800 dark:text-neutral-200">
                {title}
              </h5>
              <div className="text-gray-400 mt-1">{description}</div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 rounded-b-md">
            <Button
              variant="outlined"
              color={type}
              text="닫기"
              className="!m-0"
              onClick={() => dispatch(closeModal(id))}
            />
            {callbackButton && (
              <Button
                variant="filled"
                color={type}
                text={callbackButton.text}
                className="!m-0"
                onClick={() => {
                  dispatch({
                    type: 'modalCallback',
                    payload: {
                      callbackType: callbackButton.type,
                      message: callbackButton.message,
                    },
                  });
                  dispatch(closeModal(id));
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
