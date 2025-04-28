import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Providers from '@/components/providers.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <div>App</div>
    </Providers>
  </StrictMode>
);
