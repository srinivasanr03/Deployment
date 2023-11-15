import React from 'react';
import WhyUsHomeHero from '../components/WhyUsHomeHero';
import WhyUsHire from '../components/WhyUsHire';
import WhyUsManyFeatures from '../components/WhyUsManyFeatures';
import BusinessNavbar from '../components/BusinessNavbar';

const WhyUsHome = () => {
  return (
    <div>
        <BusinessNavbar/>
        <WhyUsHomeHero/>
        <WhyUsHire/>
        <WhyUsManyFeatures/>
    </div>
  )
}

export default WhyUsHome