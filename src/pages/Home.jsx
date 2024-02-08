/* eslint-disable react-refresh/only-export-components */

import TitleName from "../Utilities/Helmets/TitleName";
import Type from "../components/Type/Type";
import Header from "../components/Header/Header";
import Region from "../components/Region/Region";



export default function Home() {


  return (
    <>
      <TitleName title={'pokemon'} />
      <div className='container-fluid'>
        <Header />
      </div>
      <div className="container rounded py-3  bg-warning">
        <Type />
      </div >
      <div className="container rounded py-3 my-3  bg-info">

        <Region />
      </div >
    </>
  )

}


