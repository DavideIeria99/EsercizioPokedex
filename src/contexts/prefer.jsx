/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";

export const Context = createContext()

export function ContextProvider(props) {
    //controllare che sia salvato qualcosa sul local strorage
    let saved = localStorage.getItem("prefer") ? (localStorage.getItem("prefer").length > 0 ? localStorage.getItem("prefer") : null) : null //! errore 1 doveva essere messo il comparativo all'inizio non dopo non contava niente
    //salvarlo sul local storage
    const [prefer, setPrefer] = useState(saved ? JSON.parse(saved) : [])//!errore2: doveva passare la costante saved altrimenti non ti fa l'array
    //gestione colore cuore

    useEffect(() => {
        if (localStorage.getItem("prefer")) {
            setPrefer(() => JSON.parse(localStorage.getItem("prefer")))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("prefer", JSON.stringify(prefer)) //!errore 3: doveva passare una variabile
    })




    const Heats = (id) => {

        const isInArray = prefer.findIndex((el) => el === id)


        if (isInArray === -1) {
            setPrefer((prev) => [...prev, id])
        } else {
            setPrefer(prev => prev.toSpliced(isInArray, 1))
        }
        localStorage.setItem("prefer", JSON.stringify(prefer))
    }
    //riprendere il valore dal localStorage

    return (
        <Context.Provider value={{ Heats, prefer }}>{props.children}</Context.Provider>
    );
}