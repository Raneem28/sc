import React from 'react'
import image1 from '../components/image1.png'
import image2and3 from '../components/image2and3.png'
import image3 from '../components/image3.png'
import image4 from '../components/image4.png'
import image5 from '../components/image5.png'
import image6 from '../components/image6.png'
function FinalImages() {
  return (
    <div className='container1'>
        <div className='first'>
            <img className='Large-image' src={image1} alt='image'/>
            <img className='small-image '  src={image2and3} alt='image'/>
        </div>
        <div className='second'>
            <img className='small-image ' src={image4} alt='image'/>
            <img className='small-image ' src={image5} alt='image'/>
            <img className='small-image ' src={image6} alt='image'/>
        </div>
    </div>
  )
}

export default FinalImages