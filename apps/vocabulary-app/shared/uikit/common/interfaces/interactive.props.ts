import { FocusEvent, MouseEvent } from 'react';

export interface InteractiveProps<Element> {
  disabled?: boolean;

  onClick?(event: MouseEvent<Element>): any;

  onMouseDown?(event: MouseEvent<Element>): any;

  onMouseUp?(event: MouseEvent<Element>): any;

  onFocus?(event: FocusEvent<Element>): any;

  onBlur?(event: FocusEvent<Element>): any;
}
