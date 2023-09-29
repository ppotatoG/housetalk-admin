const COLOR_CLASSES: Record<
  ButtonColors,
  {
    base: string;
    hover: string;
    darkBase: string;
    darkHover: string;
    text: string;
    border: string;
    darkText: string;
    darkBorder: string;
  }
> = {
  default: {
    base: 'bg-indigo-950',
    hover: 'hover:bg-indigo-900',
    darkBase: 'dark:bg-indigo-900',
    darkHover: 'dark:hover:bg-indigo-100',
    text: 'text-white',
    border: 'border-indigo-960',
    darkText: 'text-indigo-900',
    darkBorder: 'dark:border-indigo-200',
  },
  error: {
    base: 'bg-red-500',
    hover: 'hover:bg-red-600',
    darkBase: 'dark:bg-red-600',
    darkHover: 'dark:hover:bg-red-700',
    text: 'text-white',
    border: 'border-red-500',
    darkText: 'text-red-600',
    darkBorder: 'dark:border-red-600',
  },
  warning: {
    base: 'bg-yellow-500',
    hover: 'hover:bg-yellow-600',
    darkBase: 'dark:bg-yellow-600',
    darkHover: 'dark:hover:bg-yellow-700',
    text: 'text-white',
    border: 'border-yellow-500',
    darkText: 'text-yellow-600',
    darkBorder: 'dark:border-yellow-600',
  },
};

export { COLOR_CLASSES };
