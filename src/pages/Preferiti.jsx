import { useContext } from "react";
import { Context } from "../contexts/prefer";
import TitleName from "../Utilities/Helmets/TitleName";
import Card from "../components/Card/Card";


export default function Preferiti() {
    const { prefer } = useContext(Context);
    return (
        <>
            <div className="container vh-100  rounded my-5 p-5 ">
                <TitleName title={'preferiti'} />

                <div className="row justify-content-center align-items-center">
                    {prefer.length > 0 ? prefer.map((el) => (
                        <div key={el} className="col-12 col-md-4">
                            <Card poke={el} />
                        </div>
                    )) :
                        <div className='col-10 bg-light rounded d-flex justify-content-center align-content-center shadow' >
                            <h1>Non ci sono Preferiti</h1>
                        </div>
                    }

                </div>
            </div>
        </>
    );
}
