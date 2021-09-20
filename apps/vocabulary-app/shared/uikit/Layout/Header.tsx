import { memo, ReactNode } from 'react';

export interface LayoutHeaderProps {
  children: NonNullable<ReactNode>;
}

export const LayoutHeader = memo(({ children }: LayoutHeaderProps) => {
  return (
    <header className="h-14 md:h-16 shadow-md px-4">
      <div className="max-w-7xl mx-auto flex items-center h-full"> {children}</div>
    </header>
  );
});

LayoutHeader.displayName = 'LayoutHeader';
