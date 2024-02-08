/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
import { Context } from "../../contexts/prefer"
import Button from "../Button/Button"

/* eslint-disable react/prop-types */
export default function Card({ poke }) {
    const [data, setdata] = useState();
    const [img, setImg] = useState();
    const { prefer } = useContext(Context)
    const backGround = prefer.includes(poke) ? "bg-warning card-body" : "card-body";
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
            .then(r => r.json())
            .then(r => {
                setdata(r);
                setImg(r.sprites.other.dream_world.front_default);
            })
    }, [])
    return (
        <div className={"container card " + backGround} style={{ height: "22rem" }}>
            <div className="row ">
                <section className="col-12">
                    <h4 >{poke}</h4>
                </section>
                <section className="col-12 d-flex justify-content-center " style={{ height: "10rem" }}>
                    {data && <LazyLoadImage className="img-fluid" src={img ?? data.sprites.front_default} />}
                </section>
                <section className="col-12 d-flex justify-content-evenly my-2 ">
                    {data && data.types.map((el, i) =>
                        <Link to={`/dettaglio/${el.type.name}`} className="badge  text-decoration-none mx-1" key={i}>
                            <Button type={el.type.name} />
                        </Link>
                    )}
                </section>
                <section className="col-12">
                    {/* <Link to={`/dettaglio/pokemon/${poke.url.split('pokemon/')[1].split('/')[0]}`} className="btn btn-success">dettaglio</Link> */}
                    <Link to={`/dettaglio/pokemon/${poke}`} className=" d-block btn btn-success">dettaglio</Link>
                </section>
            </div>
        </div >
    )
}





