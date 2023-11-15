import React, { useState } from 'react';
import "../styles/BusinessStyles/BusinessHome.css";
import BusinessHomeHero from '../components/BusinessHomeHero';
import BusinessWeSimplify from '../components/BusinessWeSimplify';
import BusinessSeamless from '../components/BusinessSeamless';
import BusinessCodingAssessment from '../components/BusinessCodingAssessment';
import BusinessAIProctoring from '../components/BusinessAIProctoring';
import BusinessShortlist from '../components/BusinessShortlist';
// import JobHunt from '../components/JobHunt';

import BusinessNavbar from '../components/BusinessNavbar';

const BusinessHome = () => {
 
  return (
    <>
        <BusinessNavbar/>
        <div className="business-Home">

            {/* <BusinessNavbar/> */}
            <BusinessHomeHero />
            <BusinessWeSimplify/>
            {/* <JobHunt/> */}
            <BusinessSeamless/>
            <BusinessCodingAssessment/>
            <BusinessAIProctoring/>
            <BusinessShortlist/>

        </div>
     
    </>
  );
};

export default BusinessHome;
