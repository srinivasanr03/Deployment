import React from 'react';
import '../styles/BusinessStyles/BusinessWeSimplify.css';
import Brand from '../assets/images/interview/Brand.png';
import Source from '../assets/images/interview/Source.png';
import Screen from '../assets/images/interview/Screen.png';
import Access from '../assets/images/interview/Access.png';
import Hire from '../assets/images/interview/Hire.png';

const BusinessWeSimplify = () => {
  return (
    <div className='we-simplify-main-wrapper'>
                <div className='we-simplify-wrapper'>
                <div>
                    <h2 className='we-simplify-heading'>We Simplify your Hiring</h2>
                </div>
                <div className='we-simplify-card-wrapper'>
                    <div className='brand we-simplify-card-container'>
                        <p1 className='p-bus'>Brand</p1>
                        <img className='Brandimg' src={Brand}  />
                    </div>
                    <div className='Source we-simplify-card-container'>
                        <p1 className='p-bus'>Source</p1>
                        <img className='Sourceimg' src={Source} width={156} />
                    </div>
                    <div className='Screen we-simplify-card-container'>
                        <p1 className='p-bus'>Screen</p1>
                        <img className='Screenimg' src={Screen} width={156}/>
                    </div>
                    <div className='Access we-simplify-card-container'>
                        <p1 className='p-bus' >Access</p1>
                        <img className='Accessimg' src={Access} width={156}/>
                    </div>
                    <div className='Hire we-simplify-card-container'>
                        <p1 className='p-bus' >Hire</p1>
                        <img className='Hireimg' src={Hire} width={156}/>
                    </div>
                </div>
                <div></div>
            </div>
    </div>
  )
}

export default BusinessWeSimplify