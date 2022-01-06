import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Planet from './Planet'
// import MediaCard from './MediaCard'   <MediaCard />

import '../styles/Home.css'

export default function Home(props) {

    let [searchedPlanet, setsearchedPlanet] = useState('')
    let [searchResults, setsearchResults] = useState([])


    function handleInput(e) {
        setsearchedPlanet(e.target.value)
    }

    function searchResultsFunction() {
        console.log(searchedPlanet);
        fetch(`http://localhost:4000/planets/${searchedPlanet}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setsearchResults(data)
            })
    }

    return (
        <div className="Home">
            Search
           

            <br /><br />
            <input type="text" placeholder='search' onChange={handleInput} />
            <button onClick={searchResultsFunction}>Search</button>
            <br /><br />
            <div>
                {
                    searchResults.map(p => {
                        return <Planet planet={p} />
                    })
                }
            </div>

        </div>
    )
}




