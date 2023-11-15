import React from "react";
import "../styles/practicehero.css";
import { Link } from "react-router-dom";
import InterviewBro from '../assets/images/Interview-bro.png';

const PracticeHero = () => {
  

  return (
    <section className="practicehero">
      <div className="practicehero-container container">
        <div className="practicehero-left">
          <div className="practicehero-left-top">
            <h1 className="ht">Practice and prepration</h1>
            <p className="pt">
              Solve easy to complex problems & get hands-on experience to get
              hired by your dream company!
            </p>
          </div>
          <div className="practicehero-cards">
            <Link to="/mock1">
              {/* <span>
                5-Day <br />
                Interview Prep
              </span> */} <br/><br/><br/>
              <div className="btnm">click me</div>
            </Link>
            
            <Link to="/mock1">
              {/* <span>Mock Interviews</span> */}
              <br/>
              <br />
              <br/>
              <div className="btnm">click me</div>
            </Link>
          </div>
        </div>
        <div className="practicehero-img">
          <img className="im5"
            src={InterviewBro}
            alt="practice hero"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default PracticeHero;
