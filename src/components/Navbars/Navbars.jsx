import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Search from "../Search/Search";

export default function Navbars() {
  const [data, setData] = useState("");
  const [region, setRegion] = useState("");
  const [title, setTitle] = useState('');


  useEffect(() => {
    setInterval(() => {
      setTitle(document.title)
    }, 10);
    //fetch type
    fetch(`https://pokeapi.co/api/v2/type/`)
      .then((r) => r.json())
      .then((data) => setData(data.results.splice(0, 18)))
    //fech region
    fetch(`https://pokeapi.co/api/v2/region`)
      .then((r) => r.json())
      .then((data) => setRegion(data.results))
  }, [])

  return (

    <nav className="gradientNav container-fluid sticky-top ">
      <div className="row justify-content-between ">
        <span className="navbar-brand col-3 p-3" >
          <img src="./../../Media/pokemon.png" alt="Logo" width="25" height="25" className="d-inline-block align-text-top rounded me-1" />
          Pokemon
        </span>
        <div className="d-flex justify-content-evenly col-5 pt-4 ">
          {title !== 'pokemon' ? (
            <div className="nav-link dropdown fw-bold text-decoration-none text-dark">
              <h6 className=" dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                REGION
              </h6>
              <ul className="dropdown-menu gradientNav overflowCustom px-2 " >
                {
                  region && region.map((region) => (
                    <Link to={`/region/${region.name}`} key={region.name} className="p-1 m-1 text-decoration-none">
                      <Button type={region.name} />
                    </Link>
                  ))
                }
              </ul>
            </div>

          ) : ""}
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
        <div className="col-3">
          <Search />
        </div>
      </div>
    </nav>
  );
}



