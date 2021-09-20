import { useStore } from 'effector-react';
import { memo, ReactNode } from 'react';
import { logoutFx } from 'root/layouts/Main/models';
import { Button } from 'root/shared/uikit/Button';
import { LayoutBody, LayoutContainer, LayoutHeader } from 'root/shared/uikit/Layout';

export interface MainLayoutProps {
  children: NonNullable<ReactNode>;
}

const MainLayout = memo(({ children }: MainLayoutProps) => {
  const pending = useStore(logoutFx.pending);

  return (
    <LayoutContainer>
      <LayoutHeader>
        Shit app
        <div className="ml-auto">
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
