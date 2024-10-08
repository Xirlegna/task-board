import * as ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './ui/App';

import './ui/sass/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
