import React from 'react';
import DownloadApp from "../components/DownloadApp";
import GetHired from "../components/GetHired";
import HomeHero from "../components/HomeHero";
import OurNumbers from "../components/OurNumbers";
import SlidingBrands from "../components/SlidingBrands";
import Carousel from '../components/Carousel';
import '../styles/home.css';
import Timeline from '../components/Timeline';
import Navbar from '../components/Navbar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = ({openHover}) => {
   // const [isHoverVisible, setHoverVisible] = useState(false);

  // const openHover = () => {
  //   setHoverVisible(true);
  // };

  // const closeHover = () => {
  //   setHoverVisible(false);
  // };
  return (
    
    <div style={{"display":'flex' ,"flexDirection":"column"}}>
        

        <Navbar openHover={openHover} />
        <div className="Home">
          {/* {isHoverVisible && <NavHover closeHover={closeHover} />} */}
          {/* <Navbar openHover={openHover} />- */}
          <HomeHero />
        </div>
     
        <DownloadApp />
        {/* <Opportunities /> */}
        {/* <Showcase type={"home"} /> */}
        {/* <LPM /> */}
        {/* <FeaturedOpp type={"home"} /> */}
        {/* <CardCarousel/> */}
        {/* <Carousel/> */}
        {/* <GetHired /> */}
        <Timeline/>
        <OurNumbers />
      
    </div>
  );
};

export default Home;