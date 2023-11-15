import '../styles/PricingPage.css';
import PricingTable from '../components/PricingTable';
// import reviews from "./data";
// import Testimonials from "./components/Testimonials";
import PricingFaq from '../components/PricingFaq';
import SubCard from '../components/SubCard';
import { useState } from 'react';
import PricingForm from '../components/PricingForm';
import BusinessNavbar from '../components/BusinessNavbar';





function PricingPage() {

  const [clicked, setClicked] = useState(false);
  function clickHandler(){
    setClicked(!clicked);
  }

  const [image, setImage] = useState('');
  function imageHandler(e){
      setImage(e.target.files[0]);
  }
  
  return (
    <div className='PricingPage-App'>

        <BusinessNavbar/>
              
        <PricingTable clickHandler={clickHandler}/>
        {
            clicked && <PricingForm setClicked={setClicked}/>
         }

        <div >
           <SubCard clickHandler={clickHandler} />
           {
            clicked && <PricingForm setClicked={setClicked}/>
           }
           
        </div>

        {/*<div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
     
           <div className="text-center">
            
            <h1 className="text-4xl font-bold">Our Testimonials</h1>
            
            <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
            
            <Testimonials reviews={reviews}/>

            

          </div> */}
          <PricingFaq/>

          
        
        </div>

  );
}

export default PricingPage;
