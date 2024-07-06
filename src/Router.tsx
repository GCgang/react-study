import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Character from './pages/Character';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'character/:id',
        element: <Character />,
      },
    ],
  },
]);
