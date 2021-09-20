import styles from './FormControl.module.css';
import clsx from 'clsx';
import { memo, ReactNode } from 'react';

export interface FormControlDescriptionProps {
  invalid?: boolean;
  children: NonNullable<ReactNode>;
}

export const FormControlDescription = memo(({ invalid, children }: FormControlDescriptionProps) => (
  <div className={clsx(styles.Description, invalid && styles.Description_Error)}>{children}</div>
));

FormControlDescription.displayName = 'FormControlDescription';
