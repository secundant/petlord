import styles from './CircularProgress.module.css';
import clsx from 'clsx';
import { memo } from 'react';

export interface CircularProgressProps {
  size?: 'small' | 'default';
}

export const CircularProgress = memo(({ size = 'default' }: CircularProgressProps) => (
  <div className={clsx(styles.CircularProgress, styles[`Size_${size}`])} />
));

CircularProgress.displayName = 'CircularProgress';
