import React from 'react';
import '../styles/WhyUsStyles/WhyUsHire.css';
import Coding from '../assets/Proctoring/Coding-amico.png';
import Team from '../assets/Proctoring/Team spirit-pana.png';

const WhyUsHire = () => {
  return (
    <div className='whyus-hire-wrapper'>
        <div className='whyus-hire-container'>
            <div className='whyus-hire-heading'>
                <h2>Hire for <span className='green-span'>Technical</span> and <span className='green-span'>Non-Technical</span> Roles with Ease</h2>
            </div>
            <div className='whyus-hire-content-wrapper'>
                <div className='whyus-hire-content-subwrapper'>
                        <div className='whyus-hire-content-container' id='main-box-id'>
                            <div className='fixed-width'>
                               <h3 className='green-span'>Technical</h3>
                            </div>
                            <div className='whyus-hire-content-bottom' id='sub-box-id'>
                            <p>HireXzo makes recruiters independent to screen candidates with skill assessments select skills and create programming tests using our team’s support</p>
                                <img src={Coding} width={236}/>
                            </div>
                                                       
                        </div>
                </div>

                <div className='whyus-hire-content-subwrapper'>
                        <div className='whyus-hire-content-container' id='whyus-hire-content-container-id'>
                            <div className='fixed-width'>
                               <h3 className='green-span'>Non-Technical</h3>
                            </div>
                            <div className='whyus-hire-content-bottom' id='whyus-hire-content-bottom-id'>
                                <p>HireXzo helps shortlist the top candidates for non-technical roles such as sales customer support marketing business development and more based on candidate’s skill such as general aptitude logical and analytical reasoning communication and attention to detail.</p>
                                <img src={Team} width={238}/>
                            </div>
                            
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUsHire