import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/CommingSoonPage.css';
import Typewriter from 'typewriter-effect';

const CommingSoonPage = ({openHover}) => {
  return (
    <>
      <Navbar openHover={openHover} />
      <div className='comming-soon-wrapper'>
        <img src='https://d33wubrfki0l68.cloudfront.net/4227db250e091cd3de539c24a772c895ee722224/ea052/images/about-main.png'/>
        <div className='text-part-comming-soon'>
            <p>Hold Tight !</p>
            <span className='comming-soon-span'>
                <Typewriter
                        options={{
                            strings: ['Comming Soon...'],
                            autoStart: true,
                            loop: true,
                            
                        }}
                        />
            </span>
        </div>
      </div>
    </>
  )
}

export default CommingSoonPage