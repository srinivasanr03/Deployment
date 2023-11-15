import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import '../styles/CardCarousel.scss'; // Make sure your styles are correctly linked.
import img1 from '../assets/images/c1.jpg';
import img2 from '../assets/images/c1.jpg'; // Unique images for each card.
import img3 from '../assets/images/c1.jpg'; // Unique images for each card.
import img4 from '../assets/images/c1.jpg'; // Unique images for each card.

const Carousel = () => {
  const cardData = [
    {
      title: "Exciting Hackathon Opportunity",
      content: "Participate in this exciting hackathon and win great prizes!",
      image: img1,
      registered: "2,500 Registered",
      daysLeft: "5 days left",
    },
    {
      title: "Scholarship Program",
      content: "Apply for our scholarship program and advance your education.",
      image: img2,
      registered: "1,000 Registered",
      daysLeft: "10 days left",
    },
    {
      title: "Web Development Workshop",
      content: "Join our web development workshop and enhance your skills.",
      image: img3,
      registered: "500 Registered",
      daysLeft: "3 days left",
    },
    {
      title: "Coding Competition",
      content: "Compete in our coding competition and win cash prizes.",
      image: img4,
      registered: "1,200 Registered",
      daysLeft: "7 days left",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: isMobile ? 1 : 3,
    prevArrow: <button className="custom-arrow">Previous</button>,
    nextArrow: <button className="custom-arrow">Next</button>,
    autoplay: true,  // Add autoplay option
    autoplaySpeed: 3000,
  };

  return (
    <div className="featureopp-card-wrapper">
          <div className="featureopp-card">
          <div className="featuredopp-content">
            <h2 className="feature_heading">Featured Opportunities</h2>
            <p className="feature_tagline">
              Participate in these exceptional opportunities curated for the
              exceptional you!
            </p>
          </div>
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <div className="feature_container" key={index}>
                <div className="featureopp-card-img">
                  <img src={card.image} alt="banner" />
                </div>
                <div className="featureopp-card-content">
                  <h4>{card.title}</h4>
                  <p>{card.content}</p>
                  <div className="featureopp-card-bottom">
                    <div className="card-badge">
                      <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d1240708744_people_outline.svg"
                        alt="people"
                      />
                      <span>{card.registered}</span>
                    </div>
                    <div className="card-badge">
                      <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d1240708744_people_outline.svg"
                        alt="calendar"
                      />
                      <span>{card.daysLeft}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
    </div>
  );
};

export default Carousel;