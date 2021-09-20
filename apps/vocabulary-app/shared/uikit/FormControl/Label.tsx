import clsx from 'clsx';
import { memo, ReactNode } from 'react';

export interface FormControlLabelProps {
  id?: string;
  htmlFor?: string;
  className?: string;
  children: NonNullable<ReactNode>;
}

export const FormControlLabel = memo(({ className, ...props }: FormControlLabelProps) => (
  <label
    {...props}
    className={clsx('block text-sm text-gray-400 mb-2 md:mb-2.5 sm:mb-3', className)}
  />
));

FormControlLabel.displayName = 'FormControlLabel';
