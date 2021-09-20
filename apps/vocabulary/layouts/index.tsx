import dynamic from 'next/dynamic';
import { Fragment, memo, ReactNode } from 'react';

export interface DynamicLayoutProps {
  type?: keyof typeof LayoutsMap;
  children: NonNullable<ReactNode>;
}

export const DynamicLayout = memo(({ type = 'None', children }: DynamicLayoutProps) => {
  const Component = LayoutsMap[type];

  return <Component>{children}</Component>;
});

DynamicLayout.displayName = 'DynamicLayout';

const LayoutsMap = {
  None: Fragment,
  Main: dynamic(() => import('./Main'))
};
