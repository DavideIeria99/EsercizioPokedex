/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../components/Card/Card";
import TitleName from "../Utilities/Helmets/TitleName";

export default function Dettaglio() {
    const type = useParams()
    const data = useLoaderData();

    return (
        <div className="container">
            <TitleName title={'details'} />

            <div className="my-2 text-light">
                <h1>{type.name}</h1>
                <p>totale:{data.length}</p>
            </div>
            <div className="row">
                {data.length > 0 ? data.map((el) =>
                (<div key={el.pokemon.name} className="col-12 col-md-4 my-1">
                    <Card poke={el.pokemon.name} />
                </div>)

                ) :
                    <div className='col-12   d-flex justify-content-center align-content-center ' >
                        <h1 className="bg-light shadow rounded p-3 mb-5 ">Non ci sono Pokemon🔮</h1>
                    </div>}

            </div>
        </div>
    );

}

export async function loadPokeTypes({ params }) {
    const data = await fetch(`https://pokeapi.co/api/v2/type/${params.name}`)
        .then((r) => r.json());
    return data.pokemon;
}
