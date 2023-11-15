import React from "react";
import '../styles/WhyUsStyles/WhyUsHomeHero.css';
// import Typewriter from 'typewriter-effect';
const WhyUsHomeHero = () => {
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
    <section className="whyus-home-hero">
      <div className="whyus-home-hero-container container">
        <div className="whyus-home-hero-left">
          <h1>
            <strong>
            Fully Automated Assessment Proctoring
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

                No more cheating on Online tests
                </strong>
            </span>
          </p>
        </div>
        <div className="whyus-home-hero-right-image">
          <div className="whyus-home-hero-right-images">
            <img className="whyus-home-hero-image" src="https://hirexzo.com/assets/img/hero-img.png"></img>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default WhyUsHomeHero;
