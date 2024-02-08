import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
// import Types from "./pages/Types";
import Dettaglio, { loadPokeTypes } from "./pages/Dettaglio";
import DettaPoke from "./pages/DettaPoke";
import Preferiti from "./pages/Preferiti";
import { HelmetProvider } from "react-helmet-async";
import Regions, { loadPokeRegion } from "./pages/Regions";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <Error />,
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
        path: "/dettaglio/pokemon/:id",
        element: <DettaPoke />,
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
