import React from 'react';
import '../styles/BusinessStyles/BusinessCodingAssessment.css';
import Desktop from '../assets/images/interview/desktop computer-bro.png';

const BusinessCodingAssessment = () => {
  return (
    <div className='business-coding-assessment-main-wrapper'>
          <div className='business-coding-assessment-wrapper'>
          <div className='business-coding-assessment-container'>
            <div className='business-coding-assessment-heading-container'>
                <h2><span className='green-span'>Coding</span> Assessment <span className='green-span'>Tests</span></h2>
                <p>Conduct accurate coding skill based assessments for all the technical profiles</p>
            </div>
            <div className='coding-assessment-content-container'>
              <div>
                    <img className='diskimg' src={Desktop} width={356}/>
              </div>
              <div className='coding-assessment-list-wrapper'>
                    <div className='coding-assessment-list-container'>
                        <p>In all the below languages</p>
                        <ul>
                          <li>C</li>
                          <li>C++</li>
                          <li>Java</li>
                          <li>Python</li>
                          <li>Ruby</li>
                          <li>C#</li>
                          <li>manymore...</li>
                        </ul>
                    </div>
                    <div className='coding-assessment-list-container'>
                        <p>Based on your need and domain</p>
                        <ul>
                          <li>Product Based</li>
                          <li>Algorithms</li>
                          <li>Data Structures</li>
                          <li>Web Development</li>
                          <li><div>Machine Learning</div><div>&</div><div> Data Science</div></li>
                          <li>manymore...</li>
                        </ul>
                    </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BusinessCodingAssessment