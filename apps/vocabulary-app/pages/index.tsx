import { GetStaticPropsContext } from 'next';
import { AuthLoginForm } from 'root/features/auth-login-form';
import { serverSideTranslations } from 'root/shared/translations';

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return {
    props: await serverSideTranslations.getStaticProps(['AuthLoginForm'], ctx)
  };
}

export default function IndexPage() {
  return <AuthLoginForm />;
}
