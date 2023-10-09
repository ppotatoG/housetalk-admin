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

interface StyleConfig {
  background?: string;
  border?: string;
  height?: string;
  text: string | ((isActive: boolean, isOpen: boolean, menu: Menu) => string);
  padding?: string;
  font?: string | ((menu: Menu) => string);
}

interface StyleDefinitions {
  common: string;
  levels: Record<number, StyleConfig>;
}
