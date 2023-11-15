import React from "react";

// import DayInterview from "../components/DayInterview";
import MockInterview from "../components/MockInterview";

import PracticeHero from "../components/PracticeHero";
import Navbar from "../components/Navbar";
import Refer from "../components/refer";

const Practice = () => {
  return (
    <>
    <Navbar/>
      <PracticeHero />
      
      {/* <DayInterview /> */}
      
     
    
      <MockInterview />
      <Refer/>
     
    </>
  );
};

export default Practice;
