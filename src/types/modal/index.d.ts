interface ModalState {
  id: string;
  title: string;
  description: string;
  type?: ModalType;
  callbackButton?: {
    text: string;
    type: modalCallbackType;
    message?: string;
  };
}

type ModalType = 'info' | 'error' | 'warning' | 'success';

type SizeType = 'sm' | 'md' | 'lg';

interface ModalConfig {
  style: (size: SizeType) => string;
  icon: React.ReactNode;
}

type modalCallbackType = 'TOAST_SUCCESS' | 'TOAST_ERROR';

interface ShowModalAction {
  type: string;
  payload: {
    callbackType: modalCallbackType;
    message: string;
  };
}
