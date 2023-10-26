interface ModalState {
  id: string;
  title: string;
  description: string;
  type?: ModalType;
  callbackButton?: {
    text: string;
    onClick: () => void;
    color?: ButtonColors;
  };
}

type ModalType = 'info' | 'error' | 'warning' | 'success';

type SizeType = 'sm' | 'md' | 'lg';

interface ModalConfig {
  style: (size: SizeType) => string;
  icon: React.ReactNode;
}
