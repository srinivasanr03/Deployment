// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import React, { useState } from 'react';
// import "./styles/app.css";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Practice from "./pages/Practice";
// import JobPortal from "./pages/JobPortal";
// import MobileNav from "./components/MobileNav";
// import Signup from "./pages/signup/Signup";
// import NavHover from'./components/NavHover';
// import Courses from './pages/Courses';
// import BusinessHome from './pages/BusinessHome';
// import WhyUsHome from "./pages/WhyUsHome";
// import CollegesHome from "./pages/CollegesHome";


// function App() {
//   const [isHoverVisible, setHoverVisible] = useState(false);

//   const openHover = () => {
//     setHoverVisible(true);
//   };

//   const closeHover = () => {
//     setHoverVisible(false);
//   };


//   return (
//     <>
//     <Router>
//        <Navbar openHover={openHover} />
//       <Routes>
        
//         <Route
//           path="/"
//           element={<Home />}
//         />
        
//         <Route
//           path="/Courses-list"
//           element={<NavHover/>}
//         />

        // <Route
        //   path="/business"
        //   element={<BusinessHome/>}

        // />

        // <Route path="/why-us" element={<WhyUsHome/>}/>

//         <Route path='/courses' element={<Courses/>}/>

//         <Route path="/colleges" element={<CollegesHome/>} />

//         <Route
//           path="/practice"
//           element={<Practice />}
//         />
//         <Route
//           path="/job-portal"
//           element={<JobPortal />}
//         />
//       <Route path="/signup" element={<Signup/>} />
//       </Routes>
//       <MobileNav />
      
//       <Footer /> 
//       {/* {isHoverVisible && <NavHover closeHover={closeHover} />} */}

//     </Router>
//     </>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes , useParams} from "react-router-dom";
import React, { useState } from 'react';
import "./styles/app.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import MobileNav from "./components/MobileNav";
import Signup from "./pages/signup/Signup";
import NavHover from'./components/NavHover';
import CorePython from "./pages/CorePython.jsx";
import AdvancedPython from "./pages/AdvancedPython.jsx";
import MachineLearning from "./pages/MachineLearning.jsx";
import DeepLearning from "./pages/DeepLearning.jsx";
import Jobs from "./pages/Jobs";
// import Compete from './pages/Compete';
import Job_Description from  './components/Job_Description';
import jobData from "./jobData.js";
import Complete_profile from "./components/Complete_profile";
import BusinessHome from "./pages/BusinessHome.jsx";
import WhyUsHome from "./pages/WhyUsHome.jsx";
import CollegesHome from "./pages/CollegesHome.jsx";
import CommingSoonPage from "./pages/CommingSoonPage.jsx";
import PricingPage from './pages/PricingPage.jsx';
import BusinessNavbar from './components/BusinessNavbar.jsx'
import Contact from './components/contact.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermsnCondt from "./components/TermsnCondt.jsx";
function App() {
  const [isHoverVisible, setHoverVisible] = useState(false);

  const openHover = () => {
    setHoverVisible(true);
  };

  const closeHover = () => {
    setHoverVisible(false);
  };

  

  return (
    <>
        <Router>
          
              <Routes>
              
              <Route
                path="/"
                element={<Home openHover={openHover} />}
              />
            {/*         
              <Route
                path="/Courses-list"
                element={<NavHover/>}
              /> */}

              <Route path='/course1' element={<CorePython openHover={openHover}/>}/>
              <Route path="/course2" element={<AdvancedPython openHover={openHover}/>}/>
              <Route path="/course3" element={<MachineLearning openHover={openHover}/>}/>
              <Route path="/course4" element={<DeepLearning openHover={openHover}/>}/>

              <Route
                path="/practice"
                element={<Practice openHover={openHover} />}
              />
              <Route
                path="/job-portal"
                element={<Jobs openHover={openHover} />}
              />

              <Route path="/contact-us" element={<Contact/>}/>

              <Route
                path="/business"
                element={<BusinessHome openHover={openHover} />}

              />

              <Route path="/why-us" element={<WhyUsHome openHover={openHover} />}/>

              <Route path="/colleges" element={<CollegesHome openHover={openHover} />} />

              <Route path="/pricing-page" element={<PricingPage openHover={openHover} />} />


              <Route path="/jobs/:jobId" element={<Job_Description jobData={jobData} openHover={openHover} />} />
              
              {/* <Route
                path="/compete"
                element={<Compete/>}
              /> */}
            <Route path="/signup" element={<Signup/>} />
            <Route path="/CompleteProfile" element={<Complete_profile openHover={openHover} />} />



            <Route path="/comming-soon" element={<CommingSoonPage openHover={openHover} />}/>
            </Routes>
      {/* <MobileNav /> */}
      
      <Footer /> 
      {/* {isHoverVisible && <NavHover closeHover={closeHover} />} */}

    </Router>
    </>
  );
}

export default App;
