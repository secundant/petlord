import { GetStaticPropsContext } from 'next';
import { NoCards } from 'root/features/cards-list';
import { serverSideTranslations } from 'root/shared/translations';

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return {
    props: {
      layoutType: 'Main',
      ...(await serverSideTranslations.getStaticProps(['MainLayout'], ctx))
    }
  };
}

export default function CardsPage() {
  return <NoCards />;
}
