import styles from './FormControl.module.css';
import clsx from 'clsx';
import { memo, ReactNode } from 'react';

export interface FormControlOuterProps {
  className?: string;
  children: NonNullable<ReactNode>;
}

export const FormControlOuter = memo(({ children, className }: FormControlOuterProps) => (
  <div className={clsx(styles.Control, className)}>{children}</div>
));

FormControlOuter.displayName = 'FormControl';
