import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/prefer";
import PreferCard from "../components/PreferCard";

export default function Preferiti() {


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