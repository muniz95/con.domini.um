import { createRoot } from 'react-dom/client';
import { AppProvider } from './app/providers/app-provider';
import App from './app/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);

serviceWorker.unregister();
