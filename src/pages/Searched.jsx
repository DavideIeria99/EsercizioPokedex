import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import Card from "../components/Card/Card";
import Loader from "../components/Loader/Loader";


export default function Searched() {
    const name = useParams();
    const [poke, setPoke] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setPoke('');
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=1300&offset=130')
            .then(r => r.json())
            .then(
                // data => console.log(data.results))
                (data) => setPoke(data.results.filter((poke) => poke.name.includes(name.name))))
        setTimeout(() => setLoading(false), 1000);

    }, [name])

    console.log(poke);
    console.log(name);

    return (
        <div className="container">
            <h1 className="text-light">Ricerca</h1>
            <h6>Result:{poke && poke.length}</h6>
            <div className="row min-vh-100 ">
                {

                    loading ? <Loader />
                        :
                        (
                            poke && poke.map((el) => {
                                return (
                                    <div key={el.name} className="col-12 col-md-3 my-5">
                                        <Card poke={el.name} />
                                    </div>

                                )
                            })
                        )
                }
            </div>

        </div>
    )
}
