import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/jua';
import { App } from './App';
import './styles.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
