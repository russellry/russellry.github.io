import {createRoot} from 'react-dom/client';
import {SiteChrome} from './components/SiteChrome';
import {HomePage} from './pages/HomePage';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <SiteChrome page="home">
    <HomePage />
  </SiteChrome>,
);
