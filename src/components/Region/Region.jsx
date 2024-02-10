/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

export default function Region() {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/region`)
            .then((r) => r.json())
            .then((data) => setData(data.results))
    }, [])

    return (
        <div className="row justify-content-evenly bg-info  rounded py-3 my-3">
            <h2 className="text-center text-light">Region</h2>
            {data &&
                data.map(el => (
                    <Link className=" col-12 col-md-4 text-decoration-none m-1" key={el.name} to={`/region/${el.name}`}>
                        <Button type={el.name} />
                    </Link>
                ))
            }
        </div>
    )
}

