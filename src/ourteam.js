import React from 'react';
import MahbuburRahman from './components/MahbuburRahman.png';
import TanvirAhmed from './components/TanvirAhmed.png';
import SakibSharier from './components/SakibSharier.png';
import RifatShikder from './components/RifatShikder.png';

function OurTeam() {
  return (
    <div>
      <div className='intro'>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Team <div><h1>Our Team</h1></div></p>
      </div>
      <div className='images3'>
        <div><img className='image' src={MahbuburRahman} alt='Mahbubur Rahman'  /><div className='name'>Mahbubur Rahman</div> <div>Front End Developer</div>  </div> 
        <div><img className='image' src={TanvirAhmed} alt='Tanvir Ahmed' /><div className='name'> Tanvir Ahmed </div> <div>Product Designer</div>  </div>
        <div><img className='image' src={SakibSharier} alt='Sakib Sharier' /> <div className='name'>Sakib Sharier</div> <div>Webflow Developer</div>   </div>
        <div><img className='image' src={RifatShikder} alt='Rifat Shikder' /> <div className='name'>Rifat Shikder</div> <div>WP Developer</div>   </div>
        <div><img className='image' src={MahbuburRahman} alt='Mahbubur Rahman'  /><div className='name'>Mahbubur Rahman</div> <div>Front End Developer</div>  </div> 
        <div><img className='image' src={TanvirAhmed} alt='Tanvir Ahmed' /><div className='name'> Tanvir Ahmed </div> <div>Product Designer</div>  </div>
        <div><img className='image' src={SakibSharier} alt='Sakib Sharier' /> <div className='name'>Sakib Sharier</div> <div>Webflow Developer</div>   </div>
        <div><img className='image' src={RifatShikder} alt='Rifat Shikder' /> <div className='name'>Rifat Shikder</div> <div>WP Developer</div>   </div>
      </div>
    </div>
  );
}

export default OurTeam;
