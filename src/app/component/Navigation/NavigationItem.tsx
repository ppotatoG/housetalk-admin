import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import NavigationButton from '@/component/Navigation/NavigationButton';
import { calculateMenuHeight, isPathInSubMenu } from '@/utils/navigation';

interface NavigationItemProps {
  menu: Menu;
  level: number;
}

const MENU_HEIGHT = 36;

const NavigationItem: React.FC<NavigationItemProps> = ({ menu, level }) => {
  const router = useRouter();
  const currentPath = usePathname();
  const subMenus = useMemo(() => menu.subMenu || [], [menu.subMenu]);

  const hasSubMenu = Boolean(menu.subMenu && menu.subMenu.length);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuHeight, setMenuHeight] = useState<number>(0);

  const dropdownVariants = {
    open: { opacity: 1, height: menuHeight },
    closed: { opacity: 0, height: 0, overflow: 'hidden' },
  };

  useEffect(() => {
    setMenuHeight(isOpen ? calculateMenuHeight(subMenus, MENU_HEIGHT) : 0);
  }, [isOpen, subMenus]);

  useEffect(() => {
    const isActivePage = currentPath === menu.path;
    const isInsideActiveSubMenu = isPathInSubMenu(subMenus, currentPath);

    if (level === 0) {
      setIsOpen(isActivePage || isInsideActiveSubMenu);
    } else if (level !== 0 && hasSubMenu) {
      setIsOpen(true);
    }
  }, [currentPath, subMenus, menu, level, hasSubMenu]);

  const handleMenuClick = useCallback(() => {
    if (menu.path) {
      router.push(menu.path);
    } else if (hasSubMenu && level === 0) {
      setIsOpen(prevIsOpen => !prevIsOpen);
    }
  }, [menu.path, hasSubMenu, level, router]);

  return (
    <>
      <NavigationButton
        menu={menu}
        level={level}
        isOpen={isOpen}
        onClick={handleMenuClick}
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
            {subMenus.map(subMenu => (
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
