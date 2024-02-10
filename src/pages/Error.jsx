import { Link } from "react-router-dom";


export default function Error() {
    return (
        <div className='container '>
            <div className="row min-vh-100">
                <div className="col-12 col-md-5">
                    <h1>Error 404,
                        non ci sono pokemon qui...
                    </h1>
                    <Link to="/" className="btn btn-success">
                        home
                    </Link>
                </div>
            </div>
        </div>
    )
}
