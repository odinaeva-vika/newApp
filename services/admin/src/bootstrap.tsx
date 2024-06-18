import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { router } from '@/router/Router';

import './styles/reset.scss';
import './styles/global.scss';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
