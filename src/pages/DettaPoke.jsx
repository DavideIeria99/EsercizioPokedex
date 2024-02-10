/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useLoaderData } from "react-router-dom";
import { Context } from "../contexts/prefer";
import Button from "../components/Button/Button";
import TitleName from "../Utilities/Helmets/TitleName";

export default function DettaPoke() {
    const data = useLoaderData();
    const [poke, setPoke] = useState('');
    const [loading, setloading] = useState(false);
    const { Heats, prefer } = useContext(Context)
    const [img, setImg] = useState();

    useEffect(() => {
        setloading(true);
        setPoke('')
        setImg('')
        setPoke(data)
        setPoke(data);
        setImg(data.sprites.other.dream_world.front_default);
        setloading(false);
    })

    return (
        <>
            {/* <pre>{evo && JSON.stringify(evo, null, 4)}</pre> */}
            <div className="container my-5 shadow bg-light rounded">
                <TitleName title={poke && poke.name} />
                <div className="row min-vh-100">
                    {
                        loading ? <h1>loading...</h1>
                            :
                            (
                                <>
                                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-5">
                                        {poke && <LazyLoadImage className="img-fluid w-50" src={img ?? poke.sprites.front_default} />}
                                    </div>
                                    <div className="col-12 col-md-6 p-5">
                                        {
                                            poke && <>
                                                <section className="row">
                                                    <div className="col-12 mb-5">
                                                        <h2>Name: {poke.name}</h2>
                                                        <h3>Height:{poke.height * 10} cm</h3>
                                                        <h4>Weight: {poke.weight / 10} kg</h4>
                                                        <div className="my-3">
                                                            <span>
                                                                <button onClick={() => Heats(poke.name)} className="btn btn-info mx-2">Favorite</button>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={prefer.includes(poke.name) ? '#f00' : '#F8F9FA'} className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-md-6 row ">
                                                        <h5>type</h5>
                                                        {poke && poke.types.map((el, i) =>
                                                            <Link key={i} className="col-5 badge text-decoration-none" to={`/dettaglio/${el.type.name}`}>
                                                                < Button type={el.type.name} />
                                                            </Link>
                                                        )
                                                        }
                                                    </div>
                                                    <div className="col-12 col-md-6  shadow rounded p-3 bg-info text-uppercase  fw-bold">
                                                        <h5>Ability</h5>
                                                        {poke.abilities.map((el, i) =>
                                                            <ul key={i}>
                                                                <li>
                                                                    {el.ability.name}
                                                                </li>
                                                            </ul>)}
                                                    </div>
                                                    <div className="col-12  m-1  text-uppercase shadow rounded p-3 bg-primary bg-gradient text-light fw-bold  ">
                                                        <h5>statistics</h5>
                                                        {poke.stats.map((el, i) =>
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
                                </>
                            )
                    }
                </div>
            </div >
        </>
    )
}

export async function loadSearch({ params }) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
        .then((r) => r.json());
    return data;
}

