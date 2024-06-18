import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/App/App';
import { HomePage } from '@/components/pages/HomePage';
import { AccountPages } from '@/components/pages/AccountPages';
import { PATHS } from '@/helpers/constants';

const routes = [
  {
    path: PATHS.HOME,
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: PATHS.ACCOUNT,
        element: <AccountPages />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
