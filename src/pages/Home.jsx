/* eslint-disable react-refresh/only-export-components */

import Dropdown from "../components/Dropdown/Dropdown";
import Header from "../components/Header/Header";



export default function Home() {


  return (
    <>
      <div className='container-fluid my-5'>
        <Header />
      </div>
      <div className="container rounded py-3 mt-5 bg-warning">
        <Dropdown />
      </div >

    </>
  )

}


