import { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import TitleName from '../Utilities/Helmets/TitleName';

export default function Regions() {
    const { name } = useParams();
    const data = useLoaderData();
    const [poke, setPoke] = useState("");
    const [loading, setLoading] = useState(false);

    const Pokedex = async (url) => {
        setLoading(true)
        setPoke('');
        await fetch(`${url}`)
            .then((r) => r.json())
            .then((data) => setPoke(data.pokemon_entries))
        setLoading(false)
    }
    return (
        <div className='container min-vh-100'>
            <TitleName title={name} />

            <h1>{name}</h1>
            <section className='row bg-info justify-content-around p-4 rounded shadow'>
                {data && data.map((el) => (
                    <div onClick={() => Pokedex(el.url)} className='col-12 col-md-3' key={el.name}>
                        <Button type={el.name} />
                    </div>
                ))}
            </section>
            {
                loading ? (<h1>Loading...</h1>)
                    :
                    (
                        <section className='row my-3'>
                            <h3 className='text-light'>total:{poke.length}</h3>
                            {poke && poke.map((el) => (
                                <>
                                    <div key={el.name} className='col-12 col-md-3 my-2'>
                                        <Card poke={el.pokemon_species.name} />
                                    </div>
                                </>
                            ))}
                        </section>
                    )
            }
        </div >
    )
}

export async function loadPokeRegion({ params }) {

    const data = await fetch(`https://pokeapi.co/api/v2/region/${params.name}`)
        .then((r) => r.json());
    return data.pokedexes;
}