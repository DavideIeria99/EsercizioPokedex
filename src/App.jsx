import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { loadTypes } from "./pages/Home";
import Root from "./pages/Root";
// import Types from "./pages/Types";
import Dettaglio, { loadPokeTypes } from "./pages/Dettaglio";
import DettaPoke from "./pages/DettaPoke";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loadTypes,
      },
      {
        path: "/dettaglio/:name",
        element: <Dettaglio />,
        loader: loadPokeTypes,
      },
      {
        path: "/dettaglio/pokemon/:id",
        element: <DettaPoke />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
