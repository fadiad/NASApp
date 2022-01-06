import React from 'react'
import ReactPlayer from 'react-player'
import '../styles/Home.css'

export default function Home(props) {

    return (
        <div className="Home">
            <h1>{props.homeData.title}</h1>
            {
                props.homeData.url.match(/\.(jpeg|jpg|gif|png)$/) ?
                    <img src={props.homeData.url} alt="Italian Trulli" height={'300px'}></img> :
                    <ReactPlayer url={`${props.homeData.url}`} />
            }
            <br /><br /><br />
            <div>
                {props.homeData.explanation}
            </div>
        </div>
    )
}




