/* eslint-disable react-refresh/only-export-components */

import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";

export default function Home() {
  const data = useLoaderData();


  return (
    <>
      <div className="container-fluid">
        <Header />
        <Dropdown type={data} />
      </div >
    </>
  )
}

export async function loadTypes() {
  const data = await fetch(`https://pokeapi.co/api/v2/type/`)
    .then((r) => r.json());
  return data.results;
}