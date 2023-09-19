import React, { useState } from 'react';
import { MENU } from '@/constants/menu';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

interface Props {
  menu: Menu;
  level: number;
}

const NavigationItem: React.FC<Props> = ({ menu, level }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(level !== 0);
  const hasSubMenu = menu.subMenu && menu.subMenu.length > 0;
  const router = useRouter();
  const pathname = usePathname();
  const parentTextColor: string =
    pathname === menu.path ? 'text-[#D8AD16]' : 'text-white';
  // TODO: child text color

  const handleMenuClick = () => {
    if (menu.path) {
      router.push(menu.path);
    } else {
      level === 0 ? setIsOpen(!isOpen) : null;
    }
  };

  // TODO: Framer Motion 적용
  return (
    <div>
      <button
        className={`flex justify-between items-center p-4 w-full
          ${
            level === 0
              ? `${parentTextColor} bg-[#282B4A] border-b border-[#DFDFDF] border-opacity-50 h-16`
              : `pl-${level * 4} text-black bg-[#D8D8D8]`
          } cursor-pointer`}
        onClick={handleMenuClick}
      >
        {menu.name}
        {hasSubMenu &&
          level === 0 &&
          (isOpen ? <SlArrowUp /> : <SlArrowDown />)}
      </button>
      {isOpen && hasSubMenu
        ? menu.subMenu?.map(subMenu => (
            <NavigationItem key={subMenu.id} menu={subMenu} level={level + 1} />
          ))
        : null}
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="w-1/4 h-screen overflow-y-auto bg-[#282B4A]">
      {MENU.map(menu => (
        <NavigationItem key={menu.id} menu={menu} level={0} />
      ))}
    </div>
  );
};

export default Navigation;
