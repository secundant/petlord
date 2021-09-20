import { memo, ReactNode } from 'react';

export interface ListProps {
  children: NonNullable<ReactNode>;
}

export const List = memo(({ children }: ListProps) => (
  <ul className="py-2 list-none">{children}</ul>
));

List.displayName = 'List';
