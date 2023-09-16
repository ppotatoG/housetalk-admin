import { useState } from 'react';
import { MENU } from '@/constants/menu';

const MenuList = ({ menu }: { menu: Menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        {menu.name}
      </button>
      {isOpen &&
        menu.subMenu?.map(
          (
            subMenu // 이 부분을 subMenu로 변경
          ) => (
            <div className="ml-4" key={subMenu.id}>
              <MenuList menu={subMenu} />
            </div>
          )
        )}
    </div>
  );
};

const Head = () => {
  return (
    <div className="relative bg-white dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="h-screen w-72">
          <nav className="mt-10 px-6">
            {MENU.map(menu => (
              <MenuList key={menu.id} menu={menu} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Head;
