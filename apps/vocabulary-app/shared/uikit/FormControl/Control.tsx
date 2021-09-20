import clsx from 'clsx';
import { memo, ReactNode } from 'react';
import { FormControlDescription } from 'root/shared/uikit/FormControl/Description';
import { Text } from 'root/shared/uikit/Text';

export interface FormControlProps {
  id?: string;
  name?: string;
  label?: ReactNode;
  error?: ReactNode;
  className?: string;
  description?: ReactNode;
  children: NonNullable<ReactNode>;
}

export const FormControl = memo(
  ({ name, className, description, error, children, label, id }: FormControlProps) => (
    <div className={clsx('w-auto mb-3 sm:mb-4', className)}>
      {label && (
        <Text
          htmlFor={name}
          id={id ? `${id}_label` : void 0}
          type="label"
          spacingBottom
          className="block"
        >
          {label}
        </Text>
      )}
      {children}
      {description && <FormControlDescription>{description}</FormControlDescription>}
      {error && <FormControlDescription invalid>{error}</FormControlDescription>}
    </div>
  )
);

FormControl.displayName = 'FormControl';
