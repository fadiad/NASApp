import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import '../styles/Home.css'



export default function Home(props) {
    function addToFavorites() {
        fetch("http://localhost:4000/favorites", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "title": props.planet.title,
                "href": props.planet.href
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // ---------------
            })
    }

    function removeFromFavorites() {
        props.removeFromFavorites(props.planet._id)
    }



    return (
        <div>
            <div>
                {props.planet.title}
            </div>
            <div>
                {
                    props.planet.href.match(/\.(jpeg|jpg|gif|png)$/) ?
                        <img src={props.planet.href} alt="Italian Trulli" height={'200px'}></img> :
                        <ReactPlayer url={`${props.planet.href}`} />
                }
            </div>
            <div>
                {
                    props.planet.isFavorite === true ?
                        <AiFillDislike onClick={removeFromFavorites} />
                        : <AiFillLike onClick={addToFavorites} />
                }
            </div>
            <br /><br />
        </div>
    )
}




