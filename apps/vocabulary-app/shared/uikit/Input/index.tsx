import styles from './Input.module.css';
import clsx from 'clsx';
import { ChangeEvent, forwardRef, memo, Ref } from 'react';

export interface InputProps {
  id?: string;
  name?: string;
  type?: 'string' | 'email' | 'password' | 'tel';
  value?: string;
  invalid?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  autoComplete?: 'on' | 'off';
  placeholder?: string;

  onChange?(event: ChangeEvent<HTMLInputElement>): void;
}

export const Input = memo(
  forwardRef(({ disabled, invalid, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <input
        className={clsx(styles.Input, invalid && styles.Invalid)}
        ref={ref}
        disabled={disabled}
        readOnly={disabled}
        {...props}
      />
    );
  })
);

Input.displayName = 'Input';
