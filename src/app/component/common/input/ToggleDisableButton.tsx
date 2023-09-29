import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

interface ToggleDisableButtonProps {
  required: boolean;
  handleDisableToggle: () => void;
}

const ToggleDisableButton: React.FC<ToggleDisableButtonProps> = ({
  required,
  handleDisableToggle,
}) => {
  if (required) return null;
  return (
    <button
      className="absolute left-auto right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-950"
      aria-label="Disable toggle"
      onClick={handleDisableToggle}
    >
      <AiFillCloseCircle />
    </button>
  );
};

export default ToggleDisableButton;
