import React, { useState, useEffect, useRef } from "react";
import '../styles/Timeline.scss';
import leftImage1 from '../assets/images/opportunities.png';
import rightImage1 from '../assets/images/Courses_images/screen.png';
import lefttImage2 from "../assets/images/interview/Assesment_banner.png";
import righttImage2 from '../assets/images/interview/practice.png';

const textData = [
  {
    company: "Jobs",
    img:leftImage1,
    description: "Use HireXzo's extensive Jobs section to find your route to success. Connect easily with a wide variety of recruiters who are looking for bright people just like you. Look for employment opportunities that fit your interests, abilities, and career goals. Our user-friendly website ensures that your job search is swift and customized, helping you to find the ideal fit for your career path.",
  },
  {
    company: "Courses",
    img:rightImage1,
    description: " Use HireXzo's Courses program to enhance your learning experience. Get access to a carefully chosen collection of courses that will enhance your knowledge and abilities in a range of sectors. Our platform provides a wide selection of courses from famous educational institutions, perfect for both professionals trying to upskill and students looking to expand their horizons. Increase your chances of a successful career.",
  },
  {
    company: "Assessments ",
    img:lefttImage2 ,
    description: " HireXzo's Assessments tool can help you develop your full potential. Customized tests give you useful insights into your skill set and assist you in identifying your areas of strength and growth. Our tests are made to help you succeed, whether you're getting ready for a job interview or just want to see how good you are at something. HireXzo Assessments are the first step towards professional and self-discovery.",
  },
  {
    company: "Practice ",
    img:righttImage2,
    description: "We recognize the value of refining your talents because mastery is attained via practice. Our Practice platform provides an engaging environment where you may improve your skills through role-played activities and interactive challenges. HireXzo's Practice section is your go-to resource if you're getting ready for an impending screening or interview or just trying to stay on top of things in your profession.",
  },
  
];

const Timeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timelineContainerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add a class to start animations when the timeline container is in the viewport
          timelineContainerRef.current.classList.add("in-viewport");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Adjust this threshold as needed
      }
    );

    if (timelineContainerRef.current) {
      observer.observe(timelineContainerRef.current);
    }

    return () => {
      if (timelineContainerRef.current) {
        observer.unobserve(timelineContainerRef.current);
      }
    };
  }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % textData.length);
  //   }, 5000); // Change text every 5 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="timeline-wrapper">
          <div ref={timelineContainerRef} className="timeline">
          {textData.map((data, index) => (
            <div
              key={index}
              className={`timeline-container ${index % 2 === 0 ? "left-container" : "right-container"}`}
            >
              {index % 2 === 0 ? (
                <div className="text-box">
                  <h2>{data.company}</h2>
                  {/* <small>{data.date}</small> */}
                  <p>{data.description}</p>
                  <span className="left-container-arrow"></span>
                </div>
              ) : (
                <div className="text-box">
                  <h2>{data.company}</h2>
                  {/* <small>{data.date}</small> */}
                  <p>{data.description}</p>
                  <span className="right-container-arrow"></span>
                </div>
              )}
              {index % 2 === 0 ? (
                <img src={data.img} alt="Right Image" className="container-image image-slide-left box-hoverr " />
              ) : (
                

                <img src={data.img} alt="Left Image" className="container-image image-slide-left  box-hoverl" />
              )}
            </div>
          ))}
        </div>
    </div>
  );
};

export default Timeline;