import React from 'react';
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from 'react-icons/ai';

const sizes: Record<SizeType, string> = {
  sm: 'w-8 h-8 text-base',
  md: 'w-12 h-12 text-lg',
  lg: 'w-16 h-16 text-xl',
};

const MODAL_CONFIG: Record<ModalType, ModalConfig> = {
  info: {
    style: size => `text-blue-500 bg-blue-100 p-2 rounded-full ${sizes[size]}`,
    icon: <AiOutlineInfoCircle />,
  },
  error: {
    style: size => `text-red-500 bg-red-100 p-2 rounded-full ${sizes[size]}`,
    icon: <AiOutlineCloseCircle />,
  },
  warning: {
    style: size =>
      `text-yellow-500 bg-yellow-100 p-2 rounded-full ${sizes[size]}`,
    icon: <AiOutlineWarning />,
  },
  success: {
    style: size =>
      `text-green-500 bg-green-100 p-2 rounded-full ${sizes[size]}`,
    icon: <AiOutlineCheckCircle />,
  },
};

interface IconProps {
  type: ModalType;
  size?: SizeType;
}

const Icon: React.FC<IconProps> = ({ type, size = 'md' }) => {
  const iconConfig = MODAL_CONFIG[type];

  return (
    <div
      className={`flex justify-center items-center ${iconConfig.style(size)}`}
    >
      {iconConfig.icon}
    </div>
  );
};

export default Icon;
