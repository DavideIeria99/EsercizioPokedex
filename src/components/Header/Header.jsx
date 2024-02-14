import classes from './Header.module.css'

export default function Header() {
    return (
        <>
            <div className="row my-5 p-5 justify-content-center" >
                <header className={"col-8 m-0 bg-info rounded animate__animated animate__flipInX   " + classes.header} >
                    <h1>POKEMON</h1>
                </header>
            </div >
        </>
    );
}