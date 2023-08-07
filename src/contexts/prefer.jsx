/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";

export const Context = createContext()

export function ContextProvider(props) {
    //controllare che sia salvato qualcosa sul local strorage
    let saved = localStorage.getItem("prefer") ? (localStorage.getItem("prefer") ? localStorage.getItem("prefer") > 0 : null) : null
    //salvarlo sul local storage
    const [prefer, setPrefer] = useState(saved ? JSON.parse("prefer") : [])
    //gestione colore cuore

    useEffect(() => {
        if (localStorage.getItem("prefer")) {
            setPrefer(() => JSON.parse(localStorage.getItem("prefer")))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("prefer", JSON.stringify("prefer"))
    })




    const Heats = (id) => {

        const isInArray = prefer.findIndex((el) => el === id)

        if (isInArray === -1) {
            setPrefer((prev) => [...prev, id])
        } else {
            setPrefer(prev => prev.toSpliced(isInArray, 1))

        }
        localStorage.setItem("prefered", JSON.stringify(prefer))
    }

    //riprendere il valore dal localStorage

    return (
        <Context.Provider value={{ Heats, prefer }}>{props.children}</Context.Provider>
    );
}