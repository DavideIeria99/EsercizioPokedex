import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { loadTypes } from "./pages/Home";
import Root from "./pages/Root";
// import Types from "./pages/Types";
import Dettaglio, { loadPokeTypes } from "./pages/Dettaglio";
import DettaPoke from "./pages/DettaPoke";
import Preferiti from "./pages/Preferiti";



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
        path: "/Preferiti",
        element: <Preferiti />,
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
