/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import { Context } from "../contexts/prefer";



export default function DettaPoke() {
    const [data, setdata] = useState()
    const { id } = useParams()
    const { Heats, prefer } = useContext(Context)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(r => r.json())
            .then(r => setdata(() => r))
    }, [])
    return (
        <>
            {/* <pre>{evo && JSON.stringify(evo, null, 4)}</pre> */}
            <div className="container mt-5 shadow">
                <div className="row ">
                    <div className="col-12 col-md-6">
                        {data && <LazyLoadImage className="img-fluid w-50" src={data.sprites.front_default} />}
                    </div>
                    <div className="col-12 col-md-6  p-5">
                        {
                            data && <>
                                <h2>Nome: {data.name}</h2>
                                <h3>Altezza:{data.height}0 Cm</h3>
                                <h4>Peso: {data.weight} Hg</h4>
                                <div className=" mt-5">
                                    <h5>type</h5>
                                    {data && data.types.map((el, i) =>
                                        <ul key={i}>
                                            <li>
                                                {el.type.name}
                                            </li>
                                        </ul>)}
                                </div>
                                <div>
                                    <span>
                                        <button onClick={() => Heats(data.name)} className="btn btn-success mx-2">preferiti</button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={prefer.includes(data.name) ? '#f00' : '#fff'} className="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                        </svg>
                                    </span>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div >
        </>
    )
}


