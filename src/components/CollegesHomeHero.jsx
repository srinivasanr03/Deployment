import React from "react";
import '../styles/CollegesStyles/CollegesHomeHero.css';
import CollegeHero from "../assets/images/Collges-hero.png";
// import Typewriter from 'typewriter-effect';
const CollegesHomeHero = () => {
  const images = [
    {
      title: "learn",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-learn.png?d=324x406",
      link: "https://unstop.com/courses",
    },
    {
      title: "practice",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-practice.png?d=324x406",
      link: "https://unstop.com/practice",
    },
    {
      title: "mentorships",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-mentorships.png?d=324x406",
      link: "https://unstop.com/mentor",
    },
    {
      title: "compete",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-compete.png?d=324x406",
      link: "https://unstop.com/compete",
    },
    {
      title: "jobs",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-jobs.png?d=324x406",
      link: "https://unstop.com/job-portal",
    },
    {
      title: "blogs",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-blogs.png?d=324x406",
      link: "https://unstop.com/blog",
    },
  ];
  
  return (
    <section className="colleges-home-hero">
      <div className="colleges-home-hero-container container">
        <div className="colleges-home-hero-left">
          <h1>
            <strong>
                Your Partner in Building Futures.
            </strong>

          </h1>
          <p>
            <span>
                <strong>
                {/* <Typewriter
                options={{
                    strings: ['Students, Colleges, Recruiters!'],
                    autoStart: true,
                    loop: true,
                    
                }}
                /> */}

                Building Futures, Together.
                </strong>
            </span>
          </p>
        </div>
        <div className="colleges-home-hero-right-image">
          <div className="colleges-home-hero-right-images">
            <img className="colleges-home-hero-image" src={CollegeHero}></img>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default CollegesHomeHero;
