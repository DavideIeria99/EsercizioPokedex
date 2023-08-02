/* eslint-disable react-refresh/only-export-components */

import { Link, useLoaderData } from "react-router-dom";

export default function Home() {
  const data = useLoaderData();
  console.log(data);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center bg-info">Main</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="dropdown">
              <button className="btn btn-secondary caret dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul className="dropdown-menu ">
                {
                  data.map(el => (<li className=" dropdown-item" key={el.name}><Link to={`/dettaglio/${el.name}`}>{el.name}</Link></li>))
                }
              </ul>
            </div>
          </div >
        </div >
      </div >
    </>
  )
}

export async function loadTypes() {
  const data = await fetch(`https://pokeapi.co/api/v2/type/`)
    .then((r) => r.json());
  return data.results;
}
