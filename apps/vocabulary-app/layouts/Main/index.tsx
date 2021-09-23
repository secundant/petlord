import { useStore } from 'effector-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { memo, ReactNode, useCallback } from 'react';
import { useCurrentUser } from 'root/entities/user';
import { logoutFx } from 'root/layouts/Main/models';
import { Autocomplete } from 'root/shared/uikit/Autocomplete';
import { Avatar } from 'root/shared/uikit/Avatar';
import { Button } from 'root/shared/uikit/Button';
import { LayoutBody, LayoutContainer, LayoutHeader } from 'root/shared/uikit/Layout';

export interface MainLayoutProps {
  children: NonNullable<ReactNode>;
}

const MainLayout = memo(({ children }: MainLayoutProps) => {
  const pending = useStore(logoutFx.pending);
  const user = useCurrentUser();
  const router = useRouter();
  const t = useTranslations();

  const handleLanguageChange = useCallback(
    locale => {
      router.push(
        {
          pathname: router.pathname,
          query: router.query
        },
        void 0,
        {
          locale
        }
      );
    },
    [router]
  );

  return (
    <LayoutContainer>
      <LayoutHeader>
        <Autocomplete
          placeholder={t('MainLayout.selectLanguage.placeholder')}
          value={router.locale ?? router.defaultLocale ?? null}
          onChange={handleLanguageChange}
          options={[
            {
              value: 'ru',
              label: 'Русский'
            },
            {
              value: 'en-US',
              label: 'English'
            }
          ]}
        />
        <div className="ml-auto flex flex-row items-center">
          <div className="mr-4">
            <Avatar firstName={user?.firstName} lastName={user?.lastName} />
          </div>
          <Button onClick={logoutFx as () => void} disabled={pending} loading={pending}>
            {t('MainLayout.logout')}
          </Button>
        </div>
      </LayoutHeader>
      <LayoutBody>{children}</LayoutBody>
    </LayoutContainer>
  );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;
