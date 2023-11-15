import React from 'react';
// import '../styles/dropdownCard.css';
import '../styles/Hover.css';
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const dropdownCard = ({ dropdown }) => {
  const coursesData = [
    {
      id: 1,
      path:"/Courses",
      courseName: "AI & ML Course",
      description: "Your Future Starts Here!",
    },
    {
      id: 2,
      path:"/Courses",
      courseName: "Web Developent",
      description: "lorem.........",
    },
    {
      id: 3,
      path:"/Courses",
      courseName: "Data Analyst",
      description: "lorem...........",
    },
    {
      id: 4,
      path:"/Courses",
      courseName: "Professional Skills",
      description: "lorem.......",
    },
    // {
    //   id: 5,
    //   path:"/Courses",
    //   courseName: "Python",
    //   description: "lorem...........",
    // },
  ];

  return (
    <div className={`dropdown-card ${dropdown ? 'dropdown-card-active' : ''}`}>
      <div className='dropdown-main-font'>Get Courses</div>

      <div className='dropdowncard-container'>
        {coursesData.map((course, index) => (
          <Link to={course.path} key={course.id}>
            <div className="dropdown-course-container">
              <div className='dropdown-card-title'>
                <span className='dropdown-course-name'>{course.courseName}</span>
                <span className='chevron'><FaChevronRight /></span>
              </div>
              <div className='dropdown-course-description'>{course.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default dropdownCard;