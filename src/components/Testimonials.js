import React from 'react'
import test1 from '../components/test1.png'
import test2 from '../components/test2.png'
import test3 from '../components/test3.png'
function Testimonials() {
  return (
    <div className='color'>
        <div className='content4'>
            <div className='text-section'>
                <div className='light'>Testimonials</div>
                <div><h1>Customers Talk About Us</h1></div>
                <p className='bd'>Customer support represents the resources withing your company that provide technical assistance to consumers after they purchase a or service</p>
                <div className='pictures'>
                    <img src={test1} alt='testimonials'></img>
                    <img src={test2} alt='testimonials'></img>
                    <img src={test3} alt='testimonials'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials