import React from 'react';
import CollegesHomeHero from '../components/CollegesHomeHero';
import CollegesMakePlacement from '../components/CollegesMakePlacement';
import CollegesStreamlining from '../components/CollegesStreamlining';
import BusinessNavbar from '../components/BusinessNavbar';

const CollegesHome = ({openHover}) => {
  return (
    <div>
        <BusinessNavbar openHover={openHover} />
        <CollegesHomeHero/>
        <CollegesMakePlacement/>
        <CollegesStreamlining/>
    </div>
  )
}

export default CollegesHome