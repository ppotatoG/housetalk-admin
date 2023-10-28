import React from 'react';
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from 'react-icons/ai';

const MODAL_CONFIG: Record<ModalType, ModalConfig> = {
  default: {
    style: 'text-blue-500 bg-blue-100 rounded-full w-12 h-12 text-2xl',
    icon: <AiOutlineInfoCircle />,
  },
  error: {
    style: 'text-red-500 bg-red-100 rounded-full w-12 h-12 text-2xl',
    icon: <AiOutlineCloseCircle />,
  },
  warning: {
    style: 'text-yellow-500 bg-yellow-100 rounded-full w-12 h-12 text-2xl',
    icon: <AiOutlineWarning />,
  },
  success: {
    style: 'text-green-500 bg-green-100 rounded-full w-12 h-12 text-2xl',
    icon: <AiOutlineCheckCircle />,
  },
};

interface IconProps {
  type: ModalType;
  size?: SizeType;
}

const Icon: React.FC<IconProps> = ({ type }) => {
  const iconConfig = MODAL_CONFIG[type];

  return (
    <div
      className={`flex justify-center items-center ${MODAL_CONFIG[type].style}`}
    >
      {iconConfig.icon}
    </div>
  );
};

export default Icon;
