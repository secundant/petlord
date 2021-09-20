import clsx from 'clsx';
import { memo, ReactNode } from 'react';

export interface TextProps {
  id?: string;
  spacing?: boolean;
  className?: string;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: ReactNode;
}

export const Text = memo(
  ({ component: Component = 'h1', className, spacing = true, ...props }: TextProps) => (
    <Component
      {...props}
      className={clsx(
        'text-gray-900 w-auto',
        componentClasses[Component].base,
        spacing && componentClasses[Component].spacing.default,
        className
      )}
    />
  )
);

Text.displayName = 'Text';

const componentClasses = {
  h1: {
    base: 'font-semibold text-4xl leading-7 sm:5xl md:text-6xl',
    spacing: {
      default: 'mb-8 md:mb-10 sm:mb-12'
    }
  },
  h2: {
    base: 'font-semibold text-3xl leading-7 sm:4xl md:text-5xl',
    spacing: {
      default: 'mb-6 md:mb-8 sm:mb-10'
    }
  },
  h3: {
    base: 'font-bold text-2xl leading-6 sm:3xl md:text-4xl',
    spacing: {
      default: 'mb-6 md:mb-8 sm:mb-10'
    }
  },
  h4: {
    base: 'font-bold text-xl leading-6 sm:2xl md:text-3xl',
    spacing: {
      default: 'mb-5 md:mb-7 sm:mb-9'
    }
  },
  h5: {
    base: 'font-bold text-lg leading-5 sm:xl md:text-2xl',
    spacing: {
      default: 'mb-5 md:mb-6 sm:mb-8'
    }
  },
  h6: {
    base: 'font-black uppercase text-md leading-4 sm:lg md:text-xl',
    spacing: {
      default: 'mb-4 md:mb-5 sm:mb-6'
    }
  }
};
