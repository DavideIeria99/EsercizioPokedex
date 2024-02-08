/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";
import { Context } from "../contexts/prefer";
import Button from "../components/Button/Button";
import TitleName from "../Utilities/Helmets/TitleName";

export default function DettaPoke() {
    const [data, setdata] = useState()
    const { id } = useParams()
    const { Heats, prefer } = useContext(Context)
    const [img, setImg] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(r => r.json())
            .then(r => {
                setdata(r);
                setImg(r.sprites.other.dream_world.front_default);

            }
            )
    }, [])
    return (
        <>
            {/* <pre>{evo && JSON.stringify(evo, null, 4)}</pre> */}
            <div className="container my-5 shadow bg-light rounded">
                <TitleName title={data && data.name} />
                <div className="row ">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-5">
                        {data && <LazyLoadImage className="img-fluid w-50" src={img ?? data.sprites.front_default} />}
                    </div>
                    <div className="col-12 col-md-6 p-5">
                        {
                            data && <>
                                <section className="row">
                                    <div className="col-12">
                                        <h2>Name: {data.name}</h2>
                                        <h3>Height:{data.height * 10} cm</h3>
                                        <h4>Weight: {data.weight / 10} kg</h4>

                                        <div className="my-3">
                                            <span>
                                                <button onClick={() => Heats(data.name)} className="btn btn-info mx-2">Favorite</button>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={prefer.includes(data.name) ? '#f00' : '#F8F9FA'} className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-5">
                                        <h5>type</h5>
                                        {data && data.types.map((el, i) =>

                                            <Link key={i} className="badge text-decoration-none" to={`/dettaglio/${el.type.name}`}>
                                                < Button type={el.type.name} />

                                            </Link>


                                        )
                                        }
                                    </div>
                                    <div className="col-12 col-md-3 mt-5">
                                        <h5>Ability</h5>
                                        {data.abilities.map((el, i) =>
                                            <ul key={i}>
                                                <li>
                                                    {el.ability.name}
                                                </li>
                                            </ul>)}
                                    </div>
                                    <div className="col-12 col-md-6 mt-5 text-uppercase">
                                        <h5>statistics</h5>
                                        {data.stats.map((el, i) =>
                                            <ul key={i}>
                                                <li>
                                                    {el.stat.name}: {el.base_stat}
                                                </li>
                                            </ul>)}
                                    </div>
                                </section>

                            </>
                        }
                    </div>
                </div>
            </div >
        </>
    )
}


