import { Link } from "react-router-dom";

export default function Navbars() {
  return (

    <nav className="navbar justify-content-evenly ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="./../../Media/pokemon.png" alt="Logo" width="25" height="25" className="d-inline-block align-text-top rounded me-1" />
          Pokemon
        </a>
        <div className="nav mx-auto d-flex justify-between">
          <Link to="/" className="nav-link  fw-bold text-decoration-none text-dark" >
            <p>
              HOME
            </p>
          </Link>

          <Link to="/Preferiti" className=" nav-link fw-bold text-decoration-none text-dark" >
            <p>
              PREFERITI
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}


