import { NoCards } from 'root/features/cards-list';
import { Text } from 'root/shared/uikit/Text';

export function getStaticProps() {
  return {
    props: {
      layoutType: 'Main'
    }
  };
}

export default function CardsPage() {
  return (
    <>
      <Text>Ссаные карточки</Text>
      <NoCards />
    </>
  );
}
