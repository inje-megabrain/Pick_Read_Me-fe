import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind.css';
import AppRouter from './Router/AppRouter';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <CookiesProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </CookiesProvider>
  </QueryClientProvider>
);
