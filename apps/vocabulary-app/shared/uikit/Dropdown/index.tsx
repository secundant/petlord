import { memo, ReactNode } from 'react';

export interface DropdownProps {
  open: boolean;
  target: NonNullable<ReactNode>;
  children: NonNullable<ReactNode>;
}

export const Dropdown = memo(({ open, target, children }: DropdownProps) => (
  <div className="relative">
    {target}
    <div hidden={!open} className="absolute left-0 right-0 mt-2">
      {open && children}
    </div>
  </div>
));

Dropdown.displayName = 'Dropdown';
