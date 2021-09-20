import clsx from 'clsx';
import { memo, ReactNode } from 'react';
import { AccessibilityProps, InteractiveProps } from 'root/shared/uikit/common';
import { Text } from 'root/shared/uikit/Text';

export interface ListItemProps extends InteractiveProps<HTMLLIElement>, AccessibilityProps {
  label: NonNullable<ReactNode>;
  selected?: boolean;
  className?: string;
  description?: ReactNode;
}

export const ListItem = memo(
  ({ description, label, className, selected, ...props }: ListItemProps) => (
    <li
      className={clsx(
        'py-4 pl-6 pr-4 flex-col flex text-left',
        selected && 'bg-purple-100',
        className
      )}
      {...props}
    >
      <Text type="body" spacingBottom={!!description}>
        {label}
      </Text>
      {description && <Text type="body-description">{description}</Text>}
    </li>
  )
);

ListItem.displayName = 'ListItem';
