import styles from './css-icons.module.css';
import clsx from 'clsx';
import { memo } from 'react';

export interface KeyboardArrowIconProps {
  direction?: 'bottom' | 'right';
  inverse?: boolean;
  className?: string;
}

export const KeyboardArrowIcon = memo(
  ({ inverse, direction = 'bottom', className }: KeyboardArrowIconProps) => (
    <span
      className={clsx(
        'transition-all border-current w-3 h-3',
        styles.BorderColorCurrent,
        directionClassNames[direction].base,
        directionClassNames[direction].inverse[inverse ? 'on' : 'off'],
        className
      )}
    />
  )
);

KeyboardArrowIcon.displayName = 'KeyboardArrowIcon';

const directionClassNames = {
  bottom: {
    base: 'border-l-2 border-b-2',
    inverse: {
      on: 'rotate-[135deg] -translate-y-0',
      off: '-rotate-45 -translate-y-0.5'
    }
  },
  right: {
    base: 'border-b-2 border-r-2',
    inverse: {
      on: 'rotate-45',
      off: '-rotate-45'
    }
  }
};
