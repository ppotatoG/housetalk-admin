interface Menu {
  id: number;
  name: string;
  path: string;
  subMenu?: Menu[];
}
