import React, { useState } from 'react';
import '../styles/Hover.css';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

const NavHover = ({ closeHover }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='hover-card'>
      <div className='main-font'>Get Courses</div>

      <div className='card-container'>
        <div className='course-container' onClick={toggleDropdown}>
          <div className='card-title'>
            <span className='course-name'>AI & ML Course</span>
            <span className='chevron'><FaChevronRight /></span>
          </div>
          <div>Your Future Starts Here!</div>
        </div>

        {isDropdownOpen && (
          <div className='dropdown-content'>
            <Link to="/Courses">Course 1</Link>
            <Link to="/Courses">Course 2</Link>
            <Link to="/Courses">Course 3</Link>
            {/* Add more courses as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavHover;
