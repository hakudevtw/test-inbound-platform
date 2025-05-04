import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Link } from '@tanstack/react-router';
import { Layout, Flex } from 'antd';

const MENU_ITEMS = [
  {
    key: 'home',
    path: '/',
    label: 'MOVIES',
    icon: '🎬',
  },
  {
    key: 'readme',
    path: '/readme',
    label: 'README',
    icon: '📖',
  },
];

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Layout.Header style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
          <Flex className="container" gap={16} style={{ flex: 1 }}>
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                style={{ display: 'flex', gap: 8, padding: '0 16px' }}
                activeProps={{
                  style: { color: 'white', fontWeight: 'bold' },
                }}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </Flex>
        </Layout.Header>
        <Layout.Content className="container" style={{ padding: 16, paddingBottom: 32 }}>
          <Outlet />
        </Layout.Content>
      </Layout>
      <TanStackRouterDevtools />
    </>
  );
}
