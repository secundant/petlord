import { memo, ReactNode } from 'react';
import { FormControlOuter } from 'root/shared/uikit/FormControl/ControlOuter';
import { FormControlDescription } from 'root/shared/uikit/FormControl/Description';
import { FormControlLabel } from 'root/shared/uikit/FormControl/Label';

export interface FormControlProps {
  id?: string;
  name?: string;
  label?: ReactNode;
  error?: ReactNode;
  description?: ReactNode;
  children: NonNullable<ReactNode>;
}

export const FormControl = memo(
  ({ name, description, error, children, label, id }: FormControlProps) => (
    <FormControlOuter>
      {label && (
        <FormControlLabel htmlFor={name} id={id ? `${id}_label` : void 0}>
          {label}
        </FormControlLabel>
      )}
      {children}
      {description && <FormControlDescription>{description}</FormControlDescription>}
      {error && <FormControlDescription invalid>{error}</FormControlDescription>}
    </FormControlOuter>
  )
);

FormControl.displayName = 'FormControl';
