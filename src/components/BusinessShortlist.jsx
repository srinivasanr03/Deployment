import React from 'react';
import '../styles/BusinessStyles/BusinessShortlist.css';
import { NavLink } from 'react-router-dom';
import {BsFillLightningChargeFill , BsClipboardData} from 'react-icons/bs';
import {IoBookOutline , IoNewspaperOutline} from 'react-icons/io5';

const BusinessShortlist = () => {
  return (
    <div className='business-main-shortlist-wrapper'>
                <div className='business-shortlist-wrapper'>
                <div className='business-shortlist-container'>
                    <div className='business-shortlist-heading-container'>
                        <span className='green-span'><BsFillLightningChargeFill size={50}/></span>
                        <h2>Our Customers shortlist the top 3% performers,<span className='green-span'> saving 97% of their time</span></h2>
                    </div>
                    <div className='business-shortlist-card-wrapper'>
                        <div className='business-shortlist-card-container'>
                            <span className='green-span'><IoNewspaperOutline size={50}/></span>
                            <h3>Ready-to-use Tests</h3>
                            <p>Tests for Aptitude, Programming, Communication & Interpersonal Skills , many more...</p>
                        </div>
                        <div className='business-shortlist-card-container'>
                            <span className='green-span'><IoBookOutline size={50}/></span>
                            <h3>Skill-based Questions</h3>
                            <p>We test for knowledge required to perfrom the job competently. Not to pass an Entrance exam.</p>
                        </div>
                        <div className='business-shortlist-card-container'>
                            <span className='green-span'><BsClipboardData size={50}/></span>
                            <h3>Pricing that scales</h3>
                            <p>Small and large teams assess tens to tens of thousands of candidates on HireXzo</p>
                        </div>
                    </div>
                    
                </div>
                <div className='business-shortlist-secondary-heading'>
                        <p>Discover the Power of Effective Candidate Testing Today!</p>
                        <div className='business-shortlist-btn-container'>
                            <button className='business-shortlist-btn'>
                                <div>Convinced ?</div>
                                <div>Start Hiring !</div>
                            </button>
                            <NavLink to={"/why-us"}>
                                <button className='business-shortlist-btn'>
                                    <div>Not yet ?</div>
                                    <div>Let us Help you !</div>
                                </button>
                            </NavLink>
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default BusinessShortlist