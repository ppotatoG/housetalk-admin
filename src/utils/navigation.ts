import { BUTTON_STYLES } from '@/constants/menu/BUTTON_STYLES';

export const isPathInSubMenu = (menus: Menu[], path: string): boolean => {
  return menus.some(menu => {
    if (menu.path === path) return true;
    return !!(menu.subMenu && isPathInSubMenu(menu.subMenu, path));
  });
};

export const calculateMenuHeight = (
  menuList: Menu[],
  height: number
): number => {
  return menuList.reduce((acc, item) => {
    let total = acc + height;
    if (item.subMenu) {
      total += calculateMenuHeight(item.subMenu, height);
    }
    return total;
  }, 0);
};

export const deriveButtonStyle = (
  level: number,
  isActive: boolean,
  isOpen: boolean,
  menu: Menu
): string => {
  const levelStyle = BUTTON_STYLES.levels[level] || {};
  const text =
    typeof levelStyle.text === 'function'
      ? levelStyle.text(isActive, isOpen, menu)
      : levelStyle.text;

  const font =
    typeof levelStyle.font === 'function'
      ? levelStyle.font(menu)
      : levelStyle.font;

  return [
    BUTTON_STYLES.common,
    levelStyle.background,
    levelStyle.border,
    levelStyle.height,
    text,
    font,
    levelStyle.padding,
    `pl-${level * 4}`,
  ]
    .filter(Boolean)
    .join(' ');
};
