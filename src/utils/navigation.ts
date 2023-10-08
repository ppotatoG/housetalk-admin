import { BUTTON_STYLES } from '@/constants/menu/BUTTON_STYLES';

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

  return [
    BUTTON_STYLES.common,
    levelStyle.background,
    levelStyle.border,
    levelStyle.height,
    text,
    levelStyle.padding,
    levelStyle.font,
    `pl-${level * 4}`,
  ]
    .filter(Boolean)
    .join(' ');
};
