/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";

export default function Dropdown({ type }) {
    return (
        <div className="row shadow justify-content-evenly ">
            {
                type.map(el => (<div className=" col-12 col-md-2 shadow text-center m-1 bg-light rounded " key={el.name}><Link className="fw-bold text-decoration-none   " to={`/dettaglio/${el.name}`}>{el.name}</Link></div>))
            }
        </div>
    )
}