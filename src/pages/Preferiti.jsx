import { useContext } from "react";
import { Context } from "../contexts/prefer";
import PreferCard from "../components/PreferCard";

export default function Preferiti() {
    const { prefer } = useContext(Context)



    console.log(prefer)









    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {prefer && prefer.map(el => <PreferCard key={el.name} poke={el} />)}
                </div>
            </div>
        </>
    );
}
