import React from 'react'
import pic1 from './components/pic1.png'
import pic2 from './components/pic2.png'
import pic3 from './components/pic3.png'
import pic4 from './components/pic4.png'
import pic5 from './components/pic5.png'
import pic6 from './components/pic6.png'
function Portfolio() {
  return (
    <div className='port'>
        <div className='content3' >
            <div className='text-section'>
                <div className='light'>Portfolio</div>
                <h1 >The Best Folio.</h1>
                <p className='inside'>Let our experts prepare a free home analysis for you! Just fill out our form. Surround yourself with the luxury and quality of one of Saskatoon's premier home builder</p>
                <div className='learn'>Learn More</div>
            </div>
            </div>
            <div className='img'>
                <img src={pic1} alt="pictures"></img>
                <img src={pic2} alt="pictures"></img>
                <img src={pic3} alt="pictures"></img>
                <img src={pic4} alt="pictures"></img>
                <img src={pic5} alt="pictures"></img>
                <img src={pic6} alt="pictures"></img>
            </div>
    </div>
  )
}

export default Portfolio