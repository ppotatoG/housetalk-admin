import React from 'react';
import { MENU } from '@/constants/menu';
import NavigationItem from './NavigationItem';

const Navigation = () => {
  return (
    <nav className="sticky top-0 left-0 bg-indigo-950 overflow-y-auto max-h-screen">
      {MENU.map(menu => (
        <NavigationItem key={menu.id} menu={menu} level={0} />
      ))}
    </nav>
  );
};

export default Navigation;
