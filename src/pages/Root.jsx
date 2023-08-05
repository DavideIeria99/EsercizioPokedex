import { Outlet } from "react-router-dom";
import Navbars from "../components/Navbars";
import { ContextProvider } from "../contexts/prefer";
export default function Root() {
  return (
    <ContextProvider>
      <Navbars />
      <Outlet />
    </ContextProvider>
  );
}
