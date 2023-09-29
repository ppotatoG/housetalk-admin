import React from 'react';

interface RequiredMarkProps {
  required: boolean;
}

const RequiredMark: React.FC<RequiredMarkProps> = ({ required }) => {
  if (!required) return null;
  return <span className="text-red-500 ml-1">*</span>;
};

export default RequiredMark;
