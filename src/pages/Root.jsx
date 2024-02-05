import { Outlet } from "react-router-dom";

import { ContextProvider } from "../contexts/prefer";
import Navbars from "../components/Navbars/Navbars";
export default function Root() {
  return (
    <ContextProvider>
      <Navbars />
      <Outlet />
    </ContextProvider>
  );
}
