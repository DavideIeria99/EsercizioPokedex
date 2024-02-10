import { useState } from "react"
import { Link } from "react-router-dom";


export default function Search() {
    const [search, setSearch] = useState('');

    return (
        <div className="d-flex p-3 ">
            <input
                type="text"
                className="form-control bg-transparent border-0 border-bottom"
                placeholder="search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {search ? (
                <Link to={`/dettaglio/pokemon/${search.toLowerCase()}`} className="text-decoration-none ms-2" >
                    <button type="submit" className="btn btn-outline-success" onClick={() => setSearch('')}>
                        Search
                    </button>
                </Link>
            ) :
                (
                    <button type="submit" className="btn btn-outline-success" disabled>
                        Search
                    </button>
                )}
        </div>
    )
}
