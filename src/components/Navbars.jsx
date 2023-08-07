import { Link } from "react-router-dom";

export default function Navbars() {
  return (
    <nav className="nav justify-content-evenly bg-danger ">
      <Link to="/" className=" fs-6 fw-bold text-decoration-none text-dark" >
        HOME
      </Link>
      <Link to="/Preferiti" className=" fs-6 fw-bold text-decoration-none text-dark" >
        PREFERITI
      </Link>
    </nav>
  );
}


