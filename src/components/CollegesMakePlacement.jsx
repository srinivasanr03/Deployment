import React from 'react';
import '../styles/CollegesStyles/CollegesMakePlacement.css';
import CoreImg from '../assets/images/Profiling-amico.png';

const CollegesMakePlacement = () => {
  return (
    <div className='make-placement-wrapper'>
        <div className='make-placement-content-container'>
            <div className='make-placement-content'>
                <h2>Make your placement cell accessible online</h2>
                <p>Digitisation & Automation of Campus Placements, tried and tested by <br/> universities across.</p>
            </div>
            <div className='make-placement-content-image-container'>
                <img src={CoreImg} width={280} height={380}/>
            </div>
        </div>
        <div className='colleges-contact-us-btn'>
            <button>Covinced ? Contact us !</button>
        </div>
    </div>
  )
}

export default CollegesMakePlacement