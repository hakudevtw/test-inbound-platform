import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Providers from '@/components/providers.tsx';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './index.css';

const router = createRouter({ routeTree });

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </StrictMode>
  );
}
