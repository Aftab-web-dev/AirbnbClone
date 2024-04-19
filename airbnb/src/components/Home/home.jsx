import React from 'react'
import Navbar from '../navbar/navbar'
import Logoslider from '../logoslider/logoslider'
import Cardcomponent from '../cardcomponents/Cardcomponent'
import Footer from '../navbar/pages/Homepage/footer/footer'

const Home = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Logoslider/>
        <Cardcomponent/>
        <Footer/>
      </div>
    </>
  )
}

export default Home