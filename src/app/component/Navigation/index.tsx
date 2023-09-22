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
  const isParentMenu: boolean = level === 0;
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
    <>
      <button
        className={`flex justify-between items-center p-4 w-full cursor-pointer
          ${
            isParentMenu
              ? `border-b border-gray-100 border-opacity-50 h-14 text-base ${parentTextColor}`
              : `text-black bg-gray-300 py-2 pl-${level * 4}`
          }`}
        onClick={handleMenuClick}
      >
        {menu.name}
        {hasSubMenu &&
          level === 0 &&
          (isOpen ? <SlArrowUp class="w-3" /> : <SlArrowDown class="w-3" />)}
      </button>
      {isOpen && hasSubMenu
        ? menu.subMenu?.map(subMenu => (
            <NavigationItem key={subMenu.id} menu={subMenu} level={level + 1} />
          ))
        : null}
    </>
  );
};

const Navigation = () => {
  return (
    <div className="w-60 h-screen overflow-y-auto bg-indigo-950">
      {MENU.map(menu => (
        <NavigationItem key={menu.id} menu={menu} level={0} />
      ))}
    </div>
  );
};

export default Navigation;
