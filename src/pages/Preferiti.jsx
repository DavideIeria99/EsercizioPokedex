import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/prefer";
import PreferCard from "../components/PreferCard";

export default function Preferiti() {
    const { prefer } = useContext(Context)
    const [data, setdata] = useState()
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
            .then(r => r.json())
            .then(r => setdata(() => r.results))
    }, [])


    console.log(prefer)









    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {prefer && prefer.map((el) => <PreferCard poke={el} />)}
                </div>
            </div>
        </>
    );
}
{/*  */ }