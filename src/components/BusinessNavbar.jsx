import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/HireXzo_Solutions_LLP_No_BG.png";
import Signup from "../pages/signup/Signup";
import { Outlet } from "react-router-dom";
// import HoverCard from "./HoverCard";
import profileLogo from '../assets/images/student.webp';
import BusinessLogo from '../assets/images/Business_logo.png';
import Complete_profile from "./Complete_profile";

import '../styles/BusinessStyles/BusinessNavbar.css'

const BusinessNavbar = ({ openHover }) => {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCoursesClicked, setCoursesClicked] = useState(false);
  const [isProfileNavOpen, setProfileNavOpen] = useState(false);
  const timerRef = useRef(null);

  const toggleNavTabs = () => {
    setNavOpen(!isNavOpen);
  };
  const handleProfileClick = () => {
    setProfileNavOpen(!isProfileNavOpen);
  };

  const closeProfileNav = () => {
    setProfileNavOpen(false);
  };

  const closeNavTabs = () => {
    setNavOpen(false);
  };

  const openSignup = () => {
    setSignupOpen(true);
  };

  const closeSignup = () => {
    setSignupOpen(false);
  };

  const handleLinkClick = () => {
    setNavOpen(false);
  };


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  const handleCoursesHover = () => {
    if (isMobile && !isCoursesClicked) {
      setDropdownOpen(!isDropdownOpen);
    } else if (!isMobile) {
      setDropdownOpen(true);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  };

  const handleCoursesClick = () => {
    if (isMobile) {
      setCoursesClicked(!isCoursesClicked);
      setDropdownOpen(!isDropdownOpen);
    }
  };

  const handleCoursesHoverLeave = () => {
    if (!isMobile) {
      timerRef.current = setTimeout(() => {
        setDropdownOpen(false);
      }, 10000);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <nav>
        <div className={`business-navbar business-container ${isNavOpen ? "business-open" : ""}`}>
          <div className="business-nav-left">
            <div className="business-nav-img">
              <NavLink to={"/business"}>
                <img src={BusinessLogo} alt="logo" />
              </NavLink>
              <span>
                <br />
                <strong></strong>
              </span>
            </div>
          </div>

          <div className={`business-nav-tabs ${isNavOpen ? "business-open" : ""}`}>
            <button className="business-close-button" onClick={closeNavTabs} onClick={scrollToTop} >
              &times;
            </button>
            
            

            <div className="business-jobs-tab">
              <NavLink to="/why-us" onClick={handleLinkClick} onClick={scrollToTop}>
                <span className="business-tab-name">Why-Us?</span>
              </NavLink>
            </div>

            <div className="business-compete-tab">
              <NavLink to="/colleges" onClick={handleLinkClick} onClick={scrollToTop} >
                <span className="business-tab-name">Colleges</span>
              </NavLink>
            </div>

            <div className="business-practice-tab">
              <NavLink to="/contact-us" onClick={handleLinkClick} onClick={scrollToTop} >
                <span className="business-tab-name"></span>Contact-Us
              </NavLink>
            </div>

            <div className="business-practice-tab">
              <NavLink to="/pricing-page" onClick={handleLinkClick} onClick={scrollToTop} >
                <span className="business-tab-name"></span>Pricing
              </NavLink>
            </div>


          </div>

          <div className="business-nav-btns">
            
              <Link to='/'>
                <button className="business-btn host-btn" >
                  <span>Student</span>
                </button>
              </Link>
            
            <button className="business-btn business-host-btn" onClick={openSignup} >
              <span>Login</span>
            </button>
            <button className="business-btn business-profile-btn " onClick={handleProfileClick}>
              <img src={profileLogo} alt="Profile" />
            </button>
            <button className="business-menu-btn" onClick={toggleNavTabs}>
              <div className={`business-menu-icon ${isNavOpen ? "business-open" : ""}`}>
                <div className="business-bar"></div>
                <div className="business-bar"></div>
                <div className="business-bar"></div>
              </div>
            </button>
          </div>
        </div>
        <Signup isOpen={isSignupOpen} onClose={closeSignup} />
      </nav>
      <div className={`business-profile-nav ${isProfileNavOpen ? "business-open" : ""}`}>
        <div className="business-profileHead"> <span id="business-heading"> Profile  </span>
            <button id="business-close" onClick={closeProfileNav}>X</button>
          </div>
          <hr id="business-black_line" />

          <div className="business-profile-info">
    <img src={profileLogo} alt="Profile Logo" className="business-profile-logo" />
    <div className="business-profile-details">
      <h2 className="business-profile-name">John Doe</h2>
      <p className="business-profile-email">john.doe@example.com</p> 
      </div>
  </div>
   <div>  <NavLink to="/Completeprofile">
  <button className="business-complete-profile-button " onClick={closeProfileNav} >
    Complete Profile</button> 
    </NavLink></div> 
  </div>
    </>
  );
};

export default BusinessNavbar;