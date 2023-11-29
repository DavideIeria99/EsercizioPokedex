/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";

export default function Dropdown({ type }) {

    return (
        <div className="row  justify-content-evenly">
            {type &&
                type.map(el => (
                    <Link className=" col-12 col-md-2 shadow p-2
                    bg-light text-center  m-1 rounded text-decoration-none" key={el.name} to={`/dettaglio/${el.name}`}>
                        <div className="">
                            <p className="fw-bold m-0">{el.name}</p>
                        </div>
                    </Link>
                ))
            }

        </div>
    )
}