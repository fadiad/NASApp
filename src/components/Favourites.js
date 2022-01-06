import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Planet from './Planet'
import '../styles/Home.css'



// import { AiFillDislike, AiFillLike } from "react-icons/ai";

export default function Home(props) {
    let [favorites, setfavorites] = useState([])

    function removeFromFavorites(id) {
        fetch("http://localhost:4000/favorites", {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "id": id
            })
        })
            .then(res => res.json())
            .then(data => {
                // setfavorites(data)
                console.log(data);
                // ---------------
            })
    }



    useEffect(() => {
        fetch("http://localhost:4000/favorites", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                let favorites = data.map(e => ({ ...e, isFavorite: true }))
                setfavorites(favorites)
            })
    })

    return (
        <div className="Home">
            {
                favorites.map(p => {
                    return (
                        <Planet planet={p} removeFromFavorites={removeFromFavorites} />
                    )
                })
            }
        </div>
    )
}




