import { Outlet } from "react-router-dom";

import { ContextProvider } from "../contexts/prefer";
import Navbars from "../components/Navbars/Navbars";
import Footer from "../components/Footer/Footer";
export default function Root() {
  return (
    <ContextProvider>
      <Navbars />
      <Outlet />
      <Footer />
    </ContextProvider>
  )
}
