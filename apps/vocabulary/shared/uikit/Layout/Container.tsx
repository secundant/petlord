import { memo, ReactNode } from 'react';

export interface LayoutContainerProps {
  children: NonNullable<ReactNode>;
}

export const LayoutContainer = memo(({ children }: LayoutContainerProps) => {
  return <div className="w-screen min-h-screen">{children}</div>;
});

LayoutContainer.displayName = 'LayoutContainer';
