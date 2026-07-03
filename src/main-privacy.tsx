import {createRoot} from 'react-dom/client';
import {SiteChrome} from './components/SiteChrome';
import {PrivacyPage} from './pages/PrivacyPage';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <SiteChrome page="privacy">
    <PrivacyPage />
  </SiteChrome>,
);
