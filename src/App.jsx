import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";

import Dettaglio, { loadPokeTypes } from "./pages/Dettaglio";
import DettaPoke, { loadSearch } from "./pages/DettaPoke";
import Preferiti from "./pages/Preferiti";
import { HelmetProvider } from "react-helmet-async";
import Regions, { loadPokeRegion } from "./pages/Regions";

import Error from "./pages/Error";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
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
        path: "/dettaglio/pokemon/:name",
        element: <DettaPoke />,
        loader: loadSearch,

      },
      {
        path: "/region/:name",
        element: <Regions />,
        loader: loadPokeRegion,
      },


    ],
  },
]);

export default function App() {

  return (
    <HelmetProvider>
      < RouterProvider router={router} />
    </HelmetProvider>

  )
}
