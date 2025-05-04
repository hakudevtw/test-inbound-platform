import { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { Grid, Flex, Button, Drawer } from 'antd';
import { AiOutlineMenu } from 'react-icons/ai';

const { useBreakpoint } = Grid;

const MENU_ITEMS = [
  {
    key: 'home',
    path: '/',
    label: 'MOVIES',
    icon: '🎬',
  },
  {
    key: 'favorites',
    path: '/favorites',
    label: 'FAVORITES',
    icon: '⭐',
  },
  {
    key: 'readme',
    path: '/readme',
    label: 'README',
    icon: '📖',
  },
];

function HeaderMenu() {
  const location = useLocation();
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);

  const renderMenuItems = (
    <Flex vertical={!screens.md} gap={16}>
      {MENU_ITEMS.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.key}
            to={item.path}
            style={{
              display: 'flex',
              gap: 8,
              padding: '0 16px',
              color: screens.md ? 'white' : 'black',
              fontWeight: isActive ? 'bold' : undefined,
            }}
            onClick={() => setOpen(false)} // Close drawer on click
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
    </Flex>
  );

  return (
    <>
      {screens.md ? (
        <Flex className="container" gap={16} style={{ flex: 1 }}>
          {renderMenuItems}
        </Flex>
      ) : (
        <>
          <Button
            type="text"
            icon={<AiOutlineMenu color="white" />}
            onClick={() => setOpen(true)}
            style={{
              marginLeft: 'auto',
              marginRight: 16,
              fontSize: 24,
            }}
          />
          <Drawer title="Menu" placement="right" onClose={() => setOpen(false)} open={open}>
            {renderMenuItems}
          </Drawer>
        </>
      )}
    </>
  );
}

export default HeaderMenu;
