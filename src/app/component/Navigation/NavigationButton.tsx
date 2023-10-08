import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

import { deriveButtonStyle } from '@/utils/navigation';

interface NavigationButtonProps {
  menu: Menu;
  level: number;
  isOpen: boolean;
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  menu,
  level,
  isOpen,
  onClick,
}) => {
  const currentPath = usePathname();
  const isActive = currentPath === menu.path;

  const style = useMemo(() => {
    return deriveButtonStyle(level, isActive, isOpen, menu);
  }, [level, isActive, isOpen, menu]);

  const ArrowIcon = isOpen ? SlArrowUp : SlArrowDown;

  return (
    <button
      className={`flex justify-between items-center ${style}`}
      onClick={onClick}
    >
      {menu.name}
      {level === 0 && menu.subMenu?.length && <ArrowIcon className="w-3" />}
    </button>
  );
};

export default NavigationButton;
