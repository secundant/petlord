import clsx from 'clsx';
import { forwardRef, memo, ReactNode, Ref } from 'react';
import { InputBase, InputBaseProps } from 'root/shared/uikit/Input/Base';
import { InputContainer } from 'root/shared/uikit/Input/Container';
import { useInputState } from 'root/shared/uikit/Input/hooks/useInputState';

export interface InputProps extends InputBaseProps {
  invalid?: boolean;
  inputClassName?: string;
  startNode?: ReactNode;
  endNode?: ReactNode;
}

export const Input = memo(
  forwardRef(
    (
      {
        invalid,
        className,
        inputClassName,
        onFocus,
        onBlur,
        disabled,
        startNode,
        endNode,
        ...props
      }: InputProps,
      ref: Ref<HTMLInputElement>
    ) => {
      const { focused, handleBlur, handleFocus } = useInputState({ onFocus, onBlur });

      return (
        <InputContainer
          focused={focused}
          invalid={invalid}
          disabled={disabled}
          className={className}
        >
          {startNode && (
            <div className="mr-auto self-stretch inline-flex flex-row items-center">
              {startNode}
            </div>
          )}
          <InputBase
            className={clsx('flex-grow-1', inputClassName)}
            ref={ref}
            disabled={disabled}
            onBlur={handleBlur}
            onFocus={handleFocus}
            {...props}
          />
          {endNode && (
            <div className="ml-auto self-stretch inline-flex flex-row items-center">{endNode}</div>
          )}
        </InputContainer>
      );
    }
  )
);

Input.displayName = 'Input';
