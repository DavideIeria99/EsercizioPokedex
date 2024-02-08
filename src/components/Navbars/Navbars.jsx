import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

export default function Navbars() {
  const [data, setData] = useState("");
  const [title, setTitle] = useState('');


  useEffect(() => {
    setInterval(() => {
      setTitle(document.title)
    }, 10);

    fetch(`https://pokeapi.co/api/v2/type/`)
      .then((r) => r.json())
      .then((data) => setData(data.results.splice(0, 18)))
  }, [])

  return (

    <nav className="navbar justify-content-evenly gradientNav ">
      <div className="container-fluid">
        <span className="navbar-brand" >
          <img src="./../../Media/pokemon.png" alt="Logo" width="25" height="25" className="d-inline-block align-text-top rounded me-1" />
          Pokemon
        </span>
        <div className="nav mx-auto d-flex justify-between">
          <Link to="/" className="nav-link  fw-bold text-decoration-none text-dark" >
            <h6>
              HOME
            </h6>
          </Link>

          <Link to="/Preferiti" className=" nav-link fw-bold text-decoration-none text-dark" >
            <h6>
              FAVORITE
            </h6>
          </Link>
          {title !== 'pokemon' ? (
            <div className="nav-link dropdown fw-bold text-decoration-none text-dark">
              <h6 className=" dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                TYPE
              </h6>
              <ul className="dropdown-menu gradientNav overflowCustom px-2 " >
                {
                  data && data.map((type) => (
                    <Link to={`/dettaglio/${type.name}`} key={type.name} className="p-1 m-1 text-decoration-none">
                      <Button type={type.name} />
                    </Link>
                  ))
                }
              </ul>
            </div>

          ) : ""}
        </div>
      </div>
    </nav>
  );
}



