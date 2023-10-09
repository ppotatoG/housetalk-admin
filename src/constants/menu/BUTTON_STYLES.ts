export const BUTTON_STYLES: StyleDefinitions = {
  common:
    'p-4 w-full cursor-pointer transition-colors duration-300 ease-in-out',
  levels: {
    0: {
      background: 'bg-indigo-950',
      border: 'border-b border-gray-100 border-opacity-50',
      height: 'h-14',
      font: 'hover:text-yellow-500',
      text: (isActive, isOpen, menu) =>
        isActive || (isOpen && menu.subMenu) ? 'text-yellow-500' : 'text-white',
    },
    1: {
      background: 'bg-gray-300',
      text: 'text-gray-700',
      padding: 'py-2',
      font: menu => (menu.subMenu ? 'font-semibold' : 'hover:text-indigo-700'),
    },
    2: {
      background: 'bg-gray-300',
      text: isActive => (isActive ? 'text-indigo-700' : 'text-gray-700'),
      padding: 'py-2',
      font: 'hover:text-indigo-700',
    },
  },
};
