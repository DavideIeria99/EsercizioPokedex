import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/prefer";

export default function Preferiti() {
    const { prefer } = useContext(Context)
    const [Poke, setPoke] = useState()



    useEffect(() => {
        prefer.map((el) => fetch(`https://pokeapi.co/api/v2/pokemon/${el}`)
            .then(r => r.json())
            .then(r => setPoke(() => r)))

    }, [])
    console.log(Poke)









    return (
        <>
            <div>
                ciao
            </div>
        </>
    );
}
