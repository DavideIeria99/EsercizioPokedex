import { Outlet } from "react-router-dom";
import Navbars from "../components/Navbars";
export default function Root() {
  return (
    <>
      <Navbars />
      <Outlet />
    </>
  );
}
