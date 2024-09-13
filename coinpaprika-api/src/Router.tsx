import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Coins from './screens/Coins';
import Coin from './screens/Coin';
import Chart from './screens/Chart';
import Price from './screens/Price';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Coins />,
      },
      {
        path: ':id',
        element: <Coin />,
        children: [
          {
            path: 'chart',
            element: <Chart />,
          },
          {
            path: 'price',
            element: <Price />,
          },
        ],
      },
    ],
  },
]);

export default router;
