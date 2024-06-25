import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import Hero14 from '../components/hero14'
import Features23 from '../components/features23'
import Contact1 from '../components/contact1'
import Footer14 from '../components/footer14'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Handsome Aware Coyote</title>
        <meta property="og:title" content="Handsome Aware Coyote" />
      </Helmet>
      <Navbar3></Navbar3>
      <Hero14></Hero14>
      <Features23></Features23>
      <Contact1></Contact1>
      <Footer14></Footer14>
    </div>
  )
}

export default Home
