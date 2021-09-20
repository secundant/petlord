import clsx from 'clsx';
import { memo, useMemo } from 'react';

export interface AvatarProps {
  firstName?: string;
  lastName?: string;
  size?: 'small' | 'large' | 'default';
}

export const Avatar = memo(({ lastName, firstName, size = 'default' }: AvatarProps) => {
  const initials = useMemo(
    () => [firstName ? firstName[0] : '?', lastName ? lastName[0] : ''].join(' '),
    []
  );

  return (
    <div
      className={clsx(
        'border-gray-300 bg-gray-100 text-purple-500 font-bold tracking-wider uppercase',
        `flex justify-center items-center rounded-full border-2`,
        sizeClasses[size]
      )}
    >
      {initials}
    </div>
  );
});

Avatar.displayName = 'Avatar';

const sizeClasses = {
  large: 'w-16 h-16 text-lg',
  default: 'w-12 h-12 text-lg',
  small: 'w-8 h-8 text-md'
};
