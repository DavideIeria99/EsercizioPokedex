/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DettaPoke() {
    // const [data, setdata] = useState()
    const [evo, setEvo] = useState()

    const { id } = useParams()

    // useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //         .then(r => r.json())
    //         .then(r => setdata(() => r))
    // }, [])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
            .then(r => r.json())
            .then(r => setEvo(() => r))
    }, [])
    return (
        <>
            <pre>{evo && JSON.stringify(evo, null, 4)}</pre>
            {/* <pre>{data && JSON.stringify(data, null, 4)}</pre> */}
        </>

    )

}
