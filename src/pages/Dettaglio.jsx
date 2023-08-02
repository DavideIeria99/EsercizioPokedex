/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
export default function Dettaglio() {
    const data = useLoaderData();
    return (
        <div>
            {
                data.map(el => <Card key={el.pokemon.name} poke={el.pokemon} />)
            }
        </div>
    );

}

export async function loadPokeTypes({ params }) {
    const data = await fetch(`https://pokeapi.co/api/v2/type/${params.name}`)
        .then((r) => r.json());
    return data.pokemon;
}
