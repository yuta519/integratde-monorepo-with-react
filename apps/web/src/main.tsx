import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { Header } from '@integratde-monorepo-with-react/shared-ui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
