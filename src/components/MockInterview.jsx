import React from "react";
import "../styles/mockinterview.css";
import img1 from '../assets/images/Events and papers/1.png';
import img2 from '../assets/images/Events and papers/2.png';
import img3 from '../assets/images/Oppurtunities.png';



const MockInterview = () => {


   return (

      <div className="my-component">
         <div className="column">
            <h1 className="h">Push for top-tier performance!</h1>
            <body>
               <div class="containers">
                  <div class="card__container">
                     <article class="card__article">
                        <img src={img1} alt="" class="card__img" />

                        <div class="card__data">
                           <span class="card__description">Practice paper’s</span>
                           <h2 class="card__title">Practice paper’s</h2>
                           <a href="/" class="card__button">Read More</a>
                        </div>
                     </article>

                     <article class="card__article">
                        <img src={img2} alt="" class="card__img" />

                        <div class="card__data">
                           <span class="card__description">Behavioral
                              Development</span>
                           <h2 class="card__title">Behavioral
                              Development</h2>
                           <a href="/" class="card__button">Read More</a>
                        </div>
                     </article>


                  </div>
               </div>
            </body>
         </div>

         <div className="column">
            {/* Content for the second column */} <h1 className="h">Push for top-tier performance!</h1>
            <div className="dev">



               {/* Image in the second column */}
               <img
                  src={img3} // Replace with the actual path to your image
                  alt=""
                  className="column-image"
               />
            </div>

         </div>
      </div>

   );
};

export default MockInterview;
