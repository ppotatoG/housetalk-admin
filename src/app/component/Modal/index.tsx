import { useDispatch } from 'react-redux';

import { closeModal } from '@/slices/modalSlice';

import Icon from './Icon';

const Modal = ({
  title,
  description,
  type = 'info',
  callbackButton,
}: ModalState) => {
  const dispatch = useDispatch();

  return (
    <div
      className="fixed left-0 top-0 z-[1055] h-full w-full flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-900 bg-opacity-40 dark:bg-opacity-40 dark:bg-neutral-900"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      onClick={() => dispatch(closeModal())}
    >
      <div className="pointer-events-none transition-all duration-300 ease-in-out">
        <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 p-8 gap-2">
          <div className="flex gap-4 rounded-t-md dark:border-opacity-50">
            <Icon type={type} />
            <div>
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalLabel"
              >
                {title}
              </h5>
              <div className="text-gray-400 mt-2">{description}</div>
            </div>
          </div>
          <div className="flex items-center justify-end rounded-b-md">
            <button
              type="button"
              className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
            >
              Close
            </button>
            {callbackButton && (
              <button
                onClick={callbackButton.onClick}
                type="button"
                className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                {callbackButton.text}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
