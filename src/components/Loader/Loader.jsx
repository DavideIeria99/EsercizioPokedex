import image from './../../Media/pokemon.png';
import classes from './Loader.module.css'

export default function Loader() {
    return (
        <div className="min-vh-100  row justify-content-center align-items-center">
            <div className="col-1 transition_circle ">
                <img src={image} alt="loader" className={'img-fluid rounded-circle  ' + classes.transition_circle} />
            </div>
        </div>
    )
}
