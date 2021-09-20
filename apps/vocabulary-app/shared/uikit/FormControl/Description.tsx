import clsx from 'clsx';
import { memo, ReactNode } from 'react';

export interface FormControlDescriptionProps {
  invalid?: boolean;
  children: NonNullable<ReactNode>;
}

export const FormControlDescription = memo(({ invalid, children }: FormControlDescriptionProps) => (
  <div className={clsx('block text-xs my-1', invalid ? 'text-red-400' : 'text-gray-500')}>
    {children}
  </div>
));

FormControlDescription.displayName = 'FormControlDescription';
