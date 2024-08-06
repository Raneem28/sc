import React from 'react';
import threepics from '../components/threepics.png'; // Ensure this path is correct relative to your current file
function Welcome() {
  return (
    <div className='Container'>
      <div className='content'>
        <p className='w'>Welcome to <span>Ajux</span></p>
        <h1>Impact the World by Taking Action</h1>
        <p className='inside'>
          Objectively foster extensible scenarios and business innovation. Energistically predominate prospective experiences with strategic initiatives.
        </p>
        <p className='Started2'>Get Started</p>
      </div>
      <div className='images'>
        <img className='image' src={threepics} alt='Three Pics'></img>
      </div>
    </div>
  );
}

export default Welcome;
