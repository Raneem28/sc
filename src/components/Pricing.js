import React from 'react'
import switch3 from '../components/switch3.png'
function Pricing() {
  return (
    <div className='gap'>
        <div className='content5'> 
            <br/>
            <div className='light'>Pricing</div>
            <br></br>
            <h1>The Best Pricing Plan</h1>
            <br/>
            <div>Monthly <img src={switch3}/> Yearly</div>
        </div>
        <br/>
        <div className='Pricing'>
            <div className='Basic'>
                <h3>Basic</h3>
                <p>Most Popular</p>
                <div className='price'>
                    <p>$2.46<span className='light'>/mo</span></p>
                    <p>Yearly <span className='light'>15% Off</span></p>
                    <ul className='list'>
                        <li>Unlimited Products</li>
                        <li>Unlimited Products</li>
                        <li>Unlimited Products</li>
                        <li>Unlimited Products</li>
                    </ul>
                    <div>
                        <button className='btn'>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='Standard'>
                    <h3>Standard</h3>
                    <p>Recommend</p>
                    <div className='price'>
                        <p>$5.75<span className='light'>/mo</span></p>
                        <p>Yearly <span className='light'>15% Off</span></p>
                    <ul className='list'>
                        <li>Unlimited Products</li>
                        <li>Unlimited Products</li>
                        <li>Unlimited Products</li>
                        <li>Unlimited Products</li>
                        <li>Unlimited Products</li>
                    </ul>
                    <div>
                        <button className='btn'>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='Premium'>
                <h3>Premium</h3>
                <p>Best Value</p>
                <div className='price'>
                    <p>$10.25<span className='light'>/mo</span></p>
                    <p>Yearly <span className='light'>15% Off</span></p>
                    <ul className='list'>
                        <li>Unlimited Products</li>
                        <li>Unlimited Products</li>
                        <li>Unlimited Products</li>
                        <li>Unlimited Products</li>
                    </ul>
                    <div>
                        <button className='btn'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing