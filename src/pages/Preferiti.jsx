import { useContext } from "react";
import { Context } from "../contexts/prefer";
import PreferCard from "../components/PreferCard";

export default function Preferiti() {

    const { prefer } = useContext(Context);
    return (
        <>
            <div className="container vh-100  rounded p-5">
                <div className="row ">
                    {prefer && prefer.map((el) => <PreferCard key={el} poke={el} />)}

                </div>
            </div>
        </>
    );
}
