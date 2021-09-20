import clsx from 'clsx';
import { memo, ReactNode } from 'react';

export interface InputContainerProps {
  id?: string;
  className?: string;
  component?: keyof JSX.IntrinsicElements;
  focused?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  children: NonNullable<ReactNode>;
}

export const InputContainer = memo(
  ({
    component: Component = 'div',
    disabled,
    focused,
    invalid,
    className,
    ...props
  }: InputContainerProps) => (
    <Component
      className={clsx(
        'transition-colors duration-100 border-2 rounded-lg flex flex-row items-center h-10 sm:h-11 md:h-12 box-border overflow-hidden',
        !invalid && 'border-gray-200',
        !invalid && !focused && 'hover:border-gray-300',
        !invalid && focused && 'border-purple-600',
        invalid && 'border-red-600',
        className
      )}
      {...props}
    />
  )
);

InputContainer.displayName = 'InputContainer';
