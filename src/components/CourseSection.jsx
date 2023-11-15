import React from 'react';
import Navbar from './Navbar';
import CourseHeroSection from './CourseHeroSection';
import { Route,Routes } from 'react-router-dom';

const CourseSection = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/courses' element={<CourseHeroSection/>}/>
        </Routes>
    </div>
  )
}

export default CourseSection