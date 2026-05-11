import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CobaltProvider } from '@q-labs/cobalt';
import '@q-labs/cobalt/styles.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CobaltProvider theme="dark">
      <App />
    </CobaltProvider>
  </StrictMode>
);
