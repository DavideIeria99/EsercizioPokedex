/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
export default function Card({ poke }) {
    const [data, setdata] = useState()
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
            .then(r => r.json())
            .then(r => setdata(() => r))
    }, [])
    return (
        <div className="card text-start">
            <div className="card-body">
                <h4 className="card-title">{poke.name}</h4>
                {
                    data && <LazyLoadImage src={data.sprites.front_default} />
                }
                <div>
                    {data && data.types.map((el, i) => <Link to={`/dettaglio/${el.type.name}`} className="badge rounded-pill text-bg-dark" key={i}>{el.type.name}</Link>)}
                </div>
                <Link to={`/dettaglio/pokemon/${poke.url.split('pokemon/')[1].split('/')[0]}`}>dettaglio</Link>
            </div>
        </div>
    )
}





