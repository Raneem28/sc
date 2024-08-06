import React from 'react'
import businessstrategy from '../components/businessstrategy.png'
import uiux from '../components/uiux.png'
import dev from '../components/dev.png'
function Boxes() {
  return (
    <div className='grid'>
        <img height='350px' src={businessstrategy}></img>
        <img height='350px' src={uiux}></img>
        <img height='350px' src={dev}></img>
        <img height='350px' src={businessstrategy}></img>
        <img height='350px' src={uiux}></img>
        <img height='350px' src={dev}></img>

    </div>
  )
}

export default Boxes