import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import Favourites from './components/Favourites'


import './App.css';

// https://api.nasa.gov/planetary/apod?api_key=fznrFeVMEkusRzBlWZYIbach1IBCs2iBgzTu34JV


const axios = require('axios')


function App() {

  let [homeData, sethomeData] = useState({ title: '', url: '', explanation: '' })

  useEffect(() => {
    fetch('http://localhost:4000/planets', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        sethomeData(data)
      })
  },[])

  return (
    <Router>
      <div className="App">

        <div className='head'>
          <div>
            <Link className='link' to="/">Home</Link>
          </div>
          <div>
            <Link className='link' to="/Search">Search</Link>
          </div>
          <div>
            <Link className='link' to="/Favourites">Favourites</Link>
          </div>
        </div>

        <br />

        <Route exact path="/" render={() => <Home homeData={homeData} />} />

        <Route exact path="/Search" render={()=> <Search/>}/>
        <Route exact path="/Favourites" render={()=><Favourites/>}/>


        {/* <Route exact path="/Operations" render={() => <Operations addTransaction={this.addTransaction} />} />
          <Route exact path="/Breakdown" render={() => <Breakdown />} /> */}

      </div>
    </Router>
  );

}

export default App;


