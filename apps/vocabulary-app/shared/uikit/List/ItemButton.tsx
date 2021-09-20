import clsx from 'clsx';
import { memo } from 'react';
import { ListItem, ListItemProps } from 'root/shared/uikit/List/Item';

export interface ListItemButtonProps extends ListItemProps {
  disabled?: boolean;
}

export const ListItemButton = memo(
  ({ disabled, onClick, className, selected, ...props }: ListItemButtonProps) => (
    <ListItem
      role="button"
      className={clsx(
        !disabled && 'transition-colors',
        !disabled && selected && 'hover:bg-purple-200 active:bg-purple-300',
        !disabled && !selected && 'hover:bg-gray-100 active:bg-gray-300',
        className
      )}
      selected={selected}
      onClick={disabled ? void 0 : onClick}
      {...props}
    />
  )
);

ListItemButton.displayName = 'ListItemButton';
