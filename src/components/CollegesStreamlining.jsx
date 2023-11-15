import React from 'react';
import '../styles/CollegesStyles/CollegesStreamlining.css';
import StudentImg from "../assets/images/Online world-cuate.png";

const CollegesStreamlining = () => {
  return (
    <div className='streamlining-wrapper'>
        <div className='streamlining-container'>
            <div className='streamlining-heading'>
                <h2>Streamling placements end-to-end</h2>
            </div>
            <div className='streamlining-image-container'>
                <img src={StudentImg}/>
            </div>
            <div className='streamlining-paragraph'>
                <p>It's not limited to placements; <span style={{'color':"#358fff"}}>students can engage in learning, testing, and networking</span></p>
            </div>
        </div>
    </div>
  )
}

export default CollegesStreamlining