import { memo, ReactNode } from 'react';
import { Card } from 'root/shared/uikit/Card';

export interface CardsStackProps {
  children: NonNullable<ReactNode>;
}

export const CardsStack = memo(({ children }: CardsStackProps) => (
  <div className="relative mx-auto">
    <Card className="z-30 relative">
      <div className="flex flex-col justify-center items-center min-h-full">{children}</div>
    </Card>
    <Card className="transform rotate-3 absolute top-0 left-0 z-20 opacity-90" />
    <Card className="transform rotate-[6deg] absolute top-0 left-0 z-10 opacity-80" />
    <Card className="transform rotate-[9deg] absolute top-0 left-0 z-0 opacity-70" />
  </div>
));

CardsStack.displayName = 'CardsStack';
