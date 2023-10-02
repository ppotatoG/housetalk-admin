import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

import NavigationButton from '@/component/Navigation/NavigationButton';

interface NavigationItemProps {
  menu: Menu;
  level: number;
}

const MENU_HEIGHT = 36;

const NavigationItem: React.FC<NavigationItemProps> = ({ menu, level }) => {
  const [isOpen, setIsOpen] = useState<boolean>(level !== 0);
  const [menuHeight, setMenuHeight] = useState(0);
  const hasSubMenu = menu.subMenu && menu.subMenu.length > 0;
  const router = useRouter();

  const dropdownVariants = {
    open: { opacity: 1, height: menuHeight },
    closed: { opacity: 0, height: 0, overflow: 'hidden' },
  };

  const calculateMenuHeight = useCallback((menuList: Menu[]): number => {
    let totalHeight = 0;

    menuList.forEach(item => {
      totalHeight += MENU_HEIGHT;
      if (item.subMenu) {
        totalHeight += calculateMenuHeight(item.subMenu);
      }
    });

    return totalHeight;
  }, []);

  useEffect(() => {
    if (isOpen) {
      setMenuHeight(calculateMenuHeight(menu.subMenu || []));
    } else {
      setMenuHeight(0);
    }
  }, [calculateMenuHeight, isOpen, menu]);

  const handleMenuClick = () => {
    if (menu.path) {
      router.push(menu.path);
    } else if (level === 0) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <NavigationButton
        menu={menu}
        level={level}
        isOpen={isOpen}
        handleMenuClick={handleMenuClick}
      />
      <AnimatePresence>
        {isOpen && hasSubMenu && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
            style={{ overflow: 'hidden' }}
          >
            {menu.subMenu.map(subMenu => (
              <NavigationItem
                key={subMenu.id}
                menu={subMenu}
                level={level + 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationItem;
