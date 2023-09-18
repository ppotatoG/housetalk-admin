interface BaseMenu {
  id: number;
  name: string;
}

interface MenuWithSubMenu extends BaseMenu {
  subMenu: Menu[];
  path?: never;
}

interface MenuWithPath extends BaseMenu {
  path: string;
  subMenu?: never;
}

type Menu = MenuWithSubMenu | MenuWithPath;
