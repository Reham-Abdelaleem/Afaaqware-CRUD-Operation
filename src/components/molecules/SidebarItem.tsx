import React from 'react';
import { Icon } from '../atoms/Icon';

interface SidebarItemProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active = false,
  onClick,
}) => {
  const baseClasses =
    'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors';

  const stateClasses = active
    ? 'sidebar-item-active'
    : 'text-secondary hover:bg-surface-muted';

  const classes = [baseClasses, stateClasses].join(' ');

  return (
    <button type="button" onClick={onClick} className={classes}>
      <Icon name={icon} variant="outlined" className="text-[20px]" />
      <span>{label}</span>
    </button>
  );
};