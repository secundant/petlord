import { memo } from 'react';
import { Button } from 'root/shared/uikit/Button';
import { CardsStack } from 'root/shared/uikit/CardsStack';
import { Text } from 'root/shared/uikit/Text';

export const NoCards = memo(() => (
  <div className="flex pt-6">
    <CardsStack>
      <Text component="h4" className="block self-stretch text-center">
        Пока ничего нет :(
      </Text>
      <Button>Создать</Button>
    </CardsStack>
  </div>
));

NoCards.displayName = 'NoCards';
