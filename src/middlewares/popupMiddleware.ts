import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const popupMiddleware: Middleware =
  () => next => (action: PayloadAction<ShowModalAction['payload']>) => {
    if (action.type === 'modalCallback') {
      if (action.payload.callbackType === 'TOAST_SUCCESS') {
        toast(action.payload.message, {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'success',
          position: 'top-right',
        });
      } else if (action.payload.callbackType === 'back') {
        window.history.back();
      }
    }

    return next(action);
  };

export default popupMiddleware;
