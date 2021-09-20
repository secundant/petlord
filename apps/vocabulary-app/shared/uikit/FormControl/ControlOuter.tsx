import clsx from 'clsx';
import { memo, ReactNode } from 'react';

export interface FormControlOuterProps {
  className?: string;
  children: NonNullable<ReactNode>;
}

export const FormControlOuter = memo(({ children, className }: FormControlOuterProps) => (
  <div className={clsx('w-auto mb-3 sm:mb-4', className)}>{children}</div>
));

FormControlOuter.displayName = 'FormControl';
