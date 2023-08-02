/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";

export default function Dropdown({ type }) {
    return (

        <div className="row justify-content-center justify-align-center bg-dark">
            <div className="col-12 col-md-1">
                <div className="dropdown">
                    <button className="btn btn-secondary caret dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Type
                    </button>
                    <ul className="dropdown-menu  ">
                        {
                            type.map(el => (<li className=" dropdown-item " key={el.name}><Link className="fw-bold text-decoration-none text-dark" to={`/dettaglio/${el.name}`}>{el.name}</Link></li>))
                        }
                    </ul>
                </div>
            </div >
        </div >
    );
}