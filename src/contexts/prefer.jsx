/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";

export const Context = createContext()
export function ContextProvider(props) {
    const [color, setColor] = useState('#f00');
    const HandleTheme = () => {
        if (color === '#000') {
            setColor(() => '#fff')
        } else {
            setColor(() => '#000')
        }
    }
    return (
        <Context.Provider value={{ color, HandleTheme }}>{props.children}</Context.Provider>
    );
}