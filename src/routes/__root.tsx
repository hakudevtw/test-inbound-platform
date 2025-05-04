import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Layout } from 'antd';
import HeaderMenu from '@/components/header-menu';

import type { QueryClient } from '@tanstack/react-query';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: Root,
});

function Root() {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Header
          style={{ display: 'flex', alignItems: 'center', padding: 0, background: '#124763' }}
        >
          <HeaderMenu />
        </Layout.Header>
        <Layout.Content className="container" style={{ padding: 16, paddingBottom: 32 }}>
          <Outlet />
        </Layout.Content>
      </Layout>
      <TanStackRouterDevtools />
    </>
  );
}
