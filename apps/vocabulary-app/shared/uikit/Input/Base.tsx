import styles from './Input.module.css';
import clsx from 'clsx';
import { ChangeEvent, FocusEvent, forwardRef, Ref } from 'react';

export interface InputBaseProps {
  id?: string;
  name?: string;
  type?: 'string' | 'email' | 'password' | 'tel';
  value?: string;
  className?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  autoComplete?: 'on' | 'off';
  placeholder?: string;

  onBlur?(event: FocusEvent<HTMLInputElement>): void;

  onFocus?(event: FocusEvent<HTMLInputElement>): void;

  onChange?(event: ChangeEvent<HTMLInputElement>): void;
}

export const InputBase = forwardRef(
  ({ disabled, className, ...props }: InputBaseProps, ref: Ref<HTMLInputElement>) => {
    return (
      <input
        className={clsx(
          'w-full h-full outline-none placeholder-gray-400 box-border border-none',
          styles.Base,
          className
        )}
        ref={ref}
        disabled={disabled}
        readOnly={disabled}
        {...props}
      />
    );
  }
);

InputBase.displayName = 'InputBase';
