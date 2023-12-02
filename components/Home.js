import React from 'react'
import Top from './Home/Top'
import Menu from './Home/Menu'
import Info from './Home/Info'
import Support from './Home/Support'
import Saying from './Home/Saying'
import Footer from './Common/Footer'
import LoadData from './LoadData'

const Home = () => {
  return (
    <>
        <LoadData/>
        <Top/>
        <Menu/>
        <Info/>
        <Support/>
        <Saying/>
        <Footer/>
    </>
  )
}

export default Home