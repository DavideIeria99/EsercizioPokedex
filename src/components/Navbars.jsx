import { Link } from "react-router-dom";

export default function Navbars() {
  return (
    <nav className="nav justify-content-center bg-danger ">
      <Link to="/" className=" fs-6 fw-bold text-decoration-none text-dark" >
        HOME
      </Link>
    </nav>
  );
}


