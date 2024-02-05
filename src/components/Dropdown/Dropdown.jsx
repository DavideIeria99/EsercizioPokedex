/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

export default function Dropdown() {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/`)
            .then((r) => r.json())
            .then((data) => setData(data.results.splice(0, 18)))
    }, [])
    console.log(data);
    return (
        <div className="row  justify-content-evenly">
            {data &&
                data.map(el => (
                    <Link className=" col-12 col-md-3 text-decoration-none m-1  " key={el.name} to={`/dettaglio/${el.name}`}>
                        <Button key={el.name} type={el.name} />

                    </Link>
                ))
            }
        </div>
    )
}

