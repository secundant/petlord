import clsx from 'clsx';
import { memo, ReactNode } from 'react';

export interface TextProps {
  id?: string;
  spacingBottom?: boolean;
  className?: string;
  type?: TextType;
  component?: TextComponentType;
  children?: ReactNode;

  htmlFor?: string;
}

export type TextComponentType = keyof JSX.IntrinsicElements;
export type TextType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'label'
  | 'body-description';

export const Text = memo(
  ({
    type = 'h1',
    component: Component = typeToComponent[type],
    className,
    spacingBottom,
    ...props
  }: TextProps) => (
    <Component
      {...props}
      className={clsx(
        componentClasses[type].base,
        spacingBottom && componentClasses[type].spacing.default,
        className
      )}
    />
  )
);

Text.displayName = 'Text';

const typeToComponent: Record<TextType, TextComponentType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'span',
  'body-description': 'span',
  label: 'label'
};
const componentClasses = {
  h1: {
    base: 'text-gray-900 font-semibold text-4xl leading-7 sm:text-5xl md:text-6xl',
    spacing: {
      default: 'mb-8 md:mb-10 sm:mb-12'
    }
  },
  h2: {
    base: 'text-gray-900 font-semibold text-3xl leading-7 sm:text-4xl md:text-5xl',
    spacing: {
      default: 'mb-6 md:mb-8 sm:mb-10'
    }
  },
  h3: {
    base: 'text-gray-800 font-bold text-2xl leading-6 sm:text-3xl md:text-4xl',
    spacing: {
      default: 'mb-6 md:mb-8 sm:mb-10'
    }
  },
  h4: {
    base: 'text-gray-800 font-bold text-xl leading-6 sm:text-2xl md:text-3xl',
    spacing: {
      default: 'mb-5 md:mb-7 sm:mb-9'
    }
  },
  h5: {
    base: 'text-gray-700 font-bold text-lg leading-5 sm:text-xl md:text-2xl',
    spacing: {
      default: 'mb-5 md:mb-6 sm:mb-8'
    }
  },
  h6: {
    base: 'text-gray-600 font-black uppercase text-md leading-4 sm:text-lg md:text-xl',
    spacing: {
      default: 'mb-4 md:mb-5 sm:mb-6'
    }
  },
  body: {
    base: 'text-gray-800 text-base leading-3',
    spacing: {
      default: 'mb-2 md:mb-3 sm:mb-4'
    }
  },
  'body-description': {
    base: 'text-gray-700 text-sm leading-3',
    spacing: {
      default: 'mb-1 md:mb-2 sm:mb-3'
    }
  },
  label: {
    base: 'text-gray-400 text-sm leading-3',
    spacing: {
      default: 'mb-2 md:mb-3 sm:mb-4'
    }
  }
};
