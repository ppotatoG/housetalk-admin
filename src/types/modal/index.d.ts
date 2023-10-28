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

type ModalType = 'default' | 'error' | 'warning' | 'success';

type SizeType = 'sm' | 'md' | 'lg';

interface ModalConfig {
  style: string;
  icon: React.ReactNode;
}

type modalCallbackType = 'TOAST_SUCCESS' | 'TOAST_ERROR' | 'back';

interface ShowModalAction {
  type: string;
  payload: {
    callbackType: modalCallbackType;
    message: string;
  };
}
