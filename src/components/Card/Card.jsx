/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
import { Context } from "../../contexts/prefer"
import Button from "../Button/Button"

/* eslint-disable react/prop-types */
export default function Card({ poke }) {
    const [data, setdata] = useState()
    const { prefer } = useContext(Context)
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
            .then(r => r.json())
            .then(r => setdata(() => r))
    }, [])

    console.log(poke);
    return (
        <div className="col-12 col-md-4 my-1">
            <div className="card text-start">
                <div className={prefer.includes(poke.name) ? "card-body bg-warning" : "card-body"}>
                    <h4 className="card-title">{poke.name}</h4>
                    <div className="d-flex justify-content-center">
                        {data && <LazyLoadImage src={data.sprites.front_default} />}
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <div className="d-flex justify-content-evenly my-2">
                            {data && data.types.map((el, i) =>
                                <Link to={`/dettaglio/${el.type.name}`} className="badge  text-decoration-none mx-1" key={i}>
                                    <Button type={el.type.name} />
                                </Link>
                            )}
                        </div>
                        {/* <Link to={`/dettaglio/pokemon/${poke.url.split('pokemon/')[1].split('/')[0]}`} className="btn btn-success">dettaglio</Link> */}
                        <Link to={`/dettaglio/pokemon/${poke.name}`} className="btn btn-success">dettaglio</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}





