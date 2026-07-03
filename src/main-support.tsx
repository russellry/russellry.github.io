import {createRoot} from 'react-dom/client';
import {SiteChrome} from './components/SiteChrome';
import {SupportPage} from './pages/SupportPage';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <SiteChrome page="support">
    <SupportPage />
  </SiteChrome>,
);
