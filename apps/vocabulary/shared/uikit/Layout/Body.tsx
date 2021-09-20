import { memo, ReactNode } from 'react';

export interface LayoutBodyProps {
  children: NonNullable<ReactNode>;
}

export const LayoutBody = memo(({ children }: LayoutBodyProps) => (
  <main className="px-4 pt-8 pb-4 md:px-6 md:pt-10 md:pb-6 lg:px-8 lg:pt-12 lg:pb-8 min-h-full max-w-7xl mx-auto">
    {children}
  </main>
));

LayoutBody.displayName = 'LayoutBody';
