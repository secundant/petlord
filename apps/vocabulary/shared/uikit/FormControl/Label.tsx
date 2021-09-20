import styles from './FormControl.module.css';
import { memo, ReactNode } from 'react';

export interface FormControlLabelProps {
  id?: string;
  htmlFor?: string;
  children: NonNullable<ReactNode>;
}

export const FormControlLabel = memo(({ ...props }: FormControlLabelProps) => (
  <label {...props} className={styles.Label} />
));

FormControlLabel.displayName = 'FormControlLabel';
