/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";



export default function Button({ type }) {
    const [color, setColor] = useState("")

    useEffect(() => {
        switch (type) {
            case "normal":
                setColor('#A8A878')
                break;
            case "fighting":
                setColor('#C03028')
                break;
            case "flying":
                setColor('#A890F0')
                break;
            case "poison":
                setColor('#A040A0')
                break;
            case "ground":
                setColor('#E0C068')
                break;
            case "rock":
                setColor('#B8A038')
                break;
            case "bug":
                setColor('#A8B820')
                break;
            case "ghost":
                setColor('#705898')
                break;
            case "steel":
                setColor('#B8B8D0')
                break;
            case "fire":
                setColor('#F08030')
                break;
            case "water":
                setColor('#6890F0')
                break;
            case "grass":
                setColor('#78C850')
                break;
            case "electric":
                setColor('#F8D030')
                break;
            case "psychic":
                setColor('#F85888')
                break;
            case "ice":
                setColor('#98D8D8')
                break;
            case "dragon":
                setColor('#7038F8')
                break;
            case "dark":
                setColor('#705848')
                break;
            case "fairy":
                setColor('#F0B6BC')
                break;
            default:
                setColor("")
                break;
        }
    }, [])


    return (
        <div style={{ background: color }}
            className="button shadow text-center p-3  rounded  text-white">
            <p className="fw-bold m-0">{type}</p>
        </div>
    )
}
