import { useStore } from 'effector-react';
import { memo, ReactNode } from 'react';
import { languageModel } from 'root/entities/language';
import { useCurrentUser } from 'root/entities/user';
import { logoutFx } from 'root/layouts/Main/models';
import { Autocomplete } from 'root/shared/uikit/Autocomplete';
import { Avatar } from 'root/shared/uikit/Avatar';
import { Button } from 'root/shared/uikit/Button';
import { LayoutBody, LayoutContainer, LayoutHeader } from 'root/shared/uikit/Layout';
import { Text } from 'root/shared/uikit/Text';

export interface MainLayoutProps {
  children: NonNullable<ReactNode>;
}

const MainLayout = memo(({ children }: MainLayoutProps) => {
  const language = useStore(languageModel.$currentLanguageId);
  const pending = useStore(logoutFx.pending);
  const user = useCurrentUser();

  return (
    <LayoutContainer>
      <LayoutHeader>
        <Text type="h5" className="mr-4">
          Shit app
        </Text>
        <Autocomplete
          placeholder="Select language"
          value={language}
          onChange={languageModel.currentLanguageIdChanged}
          options={[
            {
              value: 'ru',
              label: 'Русский'
            },
            {
              value: 'en',
              label: 'English'
            }
          ]}
        />
        <div className="ml-auto flex flex-row items-center">
          <div className="mr-4">
            <Avatar firstName={user?.firstName} lastName={user?.lastName} />
          </div>
          <Button onClick={logoutFx as () => void} disabled={pending} loading={pending}>
            Logout
          </Button>
        </div>
      </LayoutHeader>
      <LayoutBody>{children}</LayoutBody>
    </LayoutContainer>
  );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;
