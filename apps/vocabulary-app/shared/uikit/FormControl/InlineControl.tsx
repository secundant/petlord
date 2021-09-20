import clsx from 'clsx';
import { memo, ReactNode } from 'react';
import { FormControlDescription } from 'root/shared/uikit/FormControl/Description';
import { Text } from 'root/shared/uikit/Text';

export interface FormInlineControlProps {
  id?: string;
  name?: string;
  label?: ReactNode;
  error?: ReactNode;
  className?: string;
  spacingBottom?: boolean;
  children: NonNullable<ReactNode>;
}

export const FormInlineControl = memo(
  ({ name, error, className, children, label, id, spacingBottom }: FormInlineControlProps) => (
    <div
      className={clsx(
        'w-auto flex flex-row items-center',
        spacingBottom && 'mb-3 sm:mb-4',
        className
      )}
    >
      {label && (
        <Text type="label" htmlFor={name} id={id ? `${id}_label` : void 0} className="mr-2">
          {label}
        </Text>
      )}
      {children}
      {error && <FormControlDescription invalid>{error}</FormControlDescription>}
    </div>
  )
);

FormInlineControl.displayName = 'FormInlineControl';
