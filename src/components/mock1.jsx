import React, { useState } from 'react'; // Import useState from React
import "../styles/mock1.css";
import PopupForm from './formpopup';

function Mock1() { // Rename the function to start with an uppercase letter
  const [isFormVisible, setFormVisibility] = useState(false);

  const openForm = () => {
    setFormVisibility(true);
  };

  const closeForm = () => {
    setFormVisibility(false);
  };

  return (
    <section className="practicehero">
      <div className="cont">
        <div className='cont-div-left'>
          <h1 className='hhh'>Practice - Mock 1:1</h1>
          <p className='ppp'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. .</p>
          <div className="cards-div">
            <div className="cards">
            <buttons onClick={openForm} >  
                <img className='img-a' src="https://d8it4huxumps7.cloudfront.net/uploads/images/63c94d1bdc9e8_full_time.png?d=570x340" alt="" />
              </buttons>
              <button className='cards-aa' onClick={openForm} >RS 499</button>
              {isFormVisible && (
                <div className="overlay">
                  <PopupForm onClose={closeForm} />
                </div>
              )}
            </div>
            <div className="cards">
              <buttons onClick={openForm} > 
                <img className='img-a' src="https://d8it4huxumps7.cloudfront.net/uploads/images/63c94d2c31bba_in_office.png?d=570x340" alt="" />
              </buttons>
              <button className='cards-aa' onClick={openForm} >RS 899</button>
            </div>
            <div className="cards">
              <buttons onClick={openForm} > 
                <img className='img-a' src="https://d8it4huxumps7.cloudfront.net/uploads/images/63c94d50d72f0_part_time.png?d=570x340" alt="" />
              </buttons>
              <button className='cards-aa' onClick={openForm} >RS 1299</button>
            </div>
          </div>
        </div>
        <div className='cont-div-right'>
          <buttons onClick={openForm} >
            <img className='dd' src="https://www.woodenstreet.com/mobile/images-m/referafriend/banner.jpg" alt="" />
          </buttons>
        </div>
      </div>
    </section>
  );
}

export default Mock1; // Export the component with an uppercase name
