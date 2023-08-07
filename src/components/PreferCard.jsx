/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
export default function PreferCard({ poke }) {
    const [data, setdata] = useState()
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
            .then(r => r.json())
            .then(r => setdata(() => r))
    }, [])
    return (
        <div className="col-12 col-md-4 my-1">
            <div className="card text-start">
                <div className="card-body">
                    <h4 className="card-title">{poke.name}</h4>
                    <div className="d-flex justify-content-center">
                        {data && <LazyLoadImage src={data.sprites.front_default} />}
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <div className="d-flex justify-content-evenly my-2">
                            {data && data.types.map((el, i) => <Link to={`/dettaglio/${el.type.name}`} className="badge rounded-pill text-bg-dark text-decoration-none mx-1" key={i}>{el.type.name}</Link>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





