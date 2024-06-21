import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Details from './pages/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/movies/:movieId",
    element: <Details />,
  },
]);

export default function () {
  return <RouterProvider router={router} />;
}
