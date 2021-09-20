import { FocusEvent, Ref, useCallback, useMemo, useRef, useState } from 'react';

export interface UseInputStateOptions {
  onFocus?(event: FocusEvent<HTMLInputElement>): void;

  onBlur?(event: FocusEvent<HTMLInputElement>): void;
}

export interface UseInputStateResult {
  ref: Ref<HTMLInputElement>;

  focused: boolean;

  blur(): void;

  focus(): void;

  handleFocus(event: FocusEvent<HTMLInputElement>): void;

  handleBlur(event: FocusEvent<HTMLInputElement>): void;
}

export function useInputState({ onFocus, onBlur }: UseInputStateOptions = {}): UseInputStateResult {
  const ref = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      if (onFocus) onFocus(event);
    },
    [onFocus]
  );
  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      if (onBlur) onBlur(event);
    },
    [onBlur]
  );

  const [focus, blur] = useMemo(() => [() => ref.current?.focus(), () => ref.current?.blur()], []);

  return {
    ref,
    blur,
    focus,
    focused,
    handleBlur,
    handleFocus
  };
}
