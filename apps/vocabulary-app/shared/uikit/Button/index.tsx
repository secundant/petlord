import styles from './Button.module.css';
import { memo, MouseEvent, ReactNode } from 'react';
import { CircularProgress } from 'root/shared/uikit/CircularProgress';

export interface ButtonProps {
  id?: string;
  type?: 'submit' | 'button' | 'reset';
  color?: 'primary' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
  children: NonNullable<ReactNode>;

  onClick?(event: MouseEvent<HTMLButtonElement>): void;
}

export const Button = memo(({ loading, children, ...props }: ButtonProps) => (
  <button className={styles.Button} {...props}>
    {loading && (
      <div className={styles.Before}>
        <CircularProgress size="small" />
      </div>
    )}
    {children}
  </button>
));

Button.displayName = 'Button';
