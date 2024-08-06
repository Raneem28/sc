import React from 'react'
import './App.css';
import Navbar from './components/navbar'
import Welcome from './components/welcome';
import Boxes from './components/Boxes';
import AboutUs from './components/AboutUs';
import OurTeam from './ourteam';
import Portfolio from './portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FinalImages from './components/FinalImages';
import Subscribe from './components/subscribe';
import End from './components/End';
function App() {
  return (
    <div>
        <Navbar />
        <Welcome />
        <Boxes />
        <AboutUs/>
        <OurTeam/>
        <Portfolio/>
        <Testimonials/>
        <Pricing/>
        <FinalImages/>
        <Subscribe/>
        <End/>
    </div>
  )
}

export default App