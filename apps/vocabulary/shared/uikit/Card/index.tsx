import clsx from 'clsx';
import { memo, ReactNode } from 'react';

export interface CardProps {
  className?: string;
  children?: ReactNode;
}

export const Card = memo(({ children, className }: CardProps) => (
  <div
    className={clsx(
      'p-3 rounded-3xl shadow-lg border-2 border-gray-100 w-[400px] h-[600px] bg-white',
      className
    )}
  >
    {children}
  </div>
));

Card.displayName = 'Card';
