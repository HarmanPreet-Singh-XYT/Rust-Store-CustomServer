import React from 'react'
import Navbar from '../Common/Navbar'

const Mtop = () => {
  return (
    <div style={{minHeight:'35vh'}} className="hero_area">
        <div className="bg-box">
        <img src="trio_players.jpg" alt=""/>
        </div>
        <header className="header_section">
            <Navbar/>
        </header>
    </div>
  )
}

export default Mtop