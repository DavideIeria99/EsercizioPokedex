import { Link } from "react-router-dom";

export default function Navbars() {
  return (
    <nav className="nav justify-content-center bg-danger ">
      <Link to="/dettaglio" className=" btn">
        dettaglio
      </Link>
      <Link to="/" className=" btn" >
        home
      </Link>
    </nav>
  );
}


