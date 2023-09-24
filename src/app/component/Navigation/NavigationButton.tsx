import React from 'react';
import { usePathname } from 'next/navigation';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

interface NavigationButtonProps {
  menu: Menu;
  level: number;
  isOpen: boolean;
  handleMenuClick: () => void;
}

interface StyleLevel {
  background?: string;
  border?: string;
  height?: string;
  text:
    | string
    | ((isActivePage: boolean, isOpen: boolean, menu: Menu) => string);
  padding?: string;
  font?: string;
}

interface Styles {
  common: string;
  level: {
    [key: number]: StyleLevel;
  };
}

const styles: Styles = {
  common:
    'p-4 w-full cursor-pointer transition-colors duration-300 ease-in-out',
  level: {
    0: {
      background: 'bg-indigo-950',
      border: 'border-b border-gray-100 border-opacity-50',
      height: 'h-14',
      font: 'hover:text-yellow-500',
      text: (isActivePage, isOpen, menu) =>
        isActivePage || (isOpen && !menu.subMenu)
          ? 'text-yellow-500'
          : 'text-white',
    },
    1: {
      background: 'bg-gray-300',
      text: 'text-gray-700',
      padding: 'py-2',
      font: 'font-semibold',
    },
    2: {
      background: 'bg-gray-300',
      text: isActivePage =>
        isActivePage ? 'text-indigo-700' : 'text-gray-700',
      padding: 'py-2',
      font: 'hover:text-indigo-700',
    },
  },
};

const getButtonStyles = (
  level: number,
  isActivePage: boolean,
  isOpen: boolean,
  menu: Menu
): string => {
  const paddingLeft = `pl-${level * 4}`;
  const effectiveLevel = level === 1 && !menu.subMenu ? 2 : level;
  const levelStyle = styles.level[effectiveLevel] || {};

  const text =
    typeof levelStyle.text === 'function'
      ? levelStyle.text(isActivePage, isOpen, menu)
      : levelStyle.text;

  const styleComponents = [
    styles.common,
    levelStyle.background,
    levelStyle.border,
    levelStyle.height,
    text,
    levelStyle.padding,
    levelStyle.font,
    paddingLeft,
  ];

  return styleComponents.filter(Boolean).join(' ');
};

const NavigationButton: React.FC<NavigationButtonProps> = ({
  menu,
  level,
  isOpen,
  handleMenuClick,
}) => {
  const pathname = usePathname();
  const isActivePage = pathname === menu.path;
  const isParentMenu = level === 0;
  const buttonStyle = getButtonStyles(level, isActivePage, isOpen, menu);

  const ArrowIcon = isOpen ? SlArrowUp : SlArrowDown;

  return (
    <button
      className={`flex justify-between items-center ${buttonStyle}`}
      onClick={handleMenuClick}
    >
      {menu.name}
      {isParentMenu && menu.subMenu?.length && <ArrowIcon className="w-3" />}
    </button>
  );
};

export default NavigationButton;
