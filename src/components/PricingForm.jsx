import React, { useEffect, useState } from 'react';
import {BsPersonCircle,BsTelephone} from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import '../styles/PricingForm.css'
import logo from '../assets/images/HireXzo_Solutions_LLP_No_BG.png';

const PricingForm = ({setClicked}) => {

  const options = [
     {label:"Gold" , value:1},
     {label:"Silver" , value:2},
     {label:"Bronze" , value:3},
     {label:"Free" , value:4}
  ]

  const [formData, setformData] = useState(
   {
      fullName:"",
      email:"",
      phoneNumber:"",
      query:"",
   }
  );

  function submitHandler(event){
      event.preventDefault();
      console.log(formData);
      setClicked(false);
  }

  function changeHandler(event){
      setformData( prevFormData =>{
         return{
            ...prevFormData,
            [event.target.name] : event.target.value
         }
      })
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden";
  
    return () => {
      document.body.style.overflowY = "scroll";
    }
  }, [])
  


  return (
   <div className='super-level-wrapper'>
        <div className='modal-wrapper' onClick={submitHandler}></div>
        <div className='modal-container'>
           <form className='form-wrapper'  id='big-form-wrapper'
                 onSubmit={submitHandler}>
              <div className='form-container gradient'>

                 <div className='form-container-left'>
                    <img  src={logo} alt='HireXzo' width={260} height={254} loading='lazy' />
                 </div>

                 <div className='form-container-right'>

                    <div className='perosnal details'>

                       <div className='input-block-container'>
                          <BsPersonCircle className='icon'/>
                          <input 
                                type='text' 
                                placeholder='Name' 
                                className='input-field font'
                                name='fullName'
                                value={formData.fullName}
                                onChange={changeHandler}></input>
                       </div>

                       <div className='input-block-container'>
                          <GrMail className='icon'/>
                          <input 
                                   type='text' 
                                   placeholder='Work Email address' 
                                   className='input-field font'
                                   name='email'
                                   value={formData.email}
                                   onChange={changeHandler}></input>
                       </div>

                       <div className='input-block-container'>
                          <BsTelephone className='icon'/>
                          <input 
                                   type='number' 
                                   placeholder='Phone number'  
                                   className='input-field font'
                                   name='phoneNumber'
                                   value={formData.phoneNumber}
                                   onChange={changeHandler}></input>
                       </div>

                    </div>

                    <div className='course-block-container'>
                       {/* <select 
                                className='course-input-field font'
                             
                    
                                onChange={changeHandler}>
                          {
                             options.map(option =>(
                                <option 
                                      
                                      value={option.value}>{option.label}</option>
                             ))
                          }
                       </select> */}
                       <textarea
                                   type='text' 
                                   placeholder='Write something about your query' 
                                   className='input-field font text-area-class'
                                   name='query'
                                   value={formData.query}
                                   onChange={changeHandler}></textarea>
                    </div>
                    

                    <div className='apply-button'>
                       <button class="btn-green" id="btn">Submit</button>
                    </div>

                 </div>
              </div>
           </form>
        </div>


        {/* <div className='modal-wrapper' onClick={submitHandler}></div> */}
        <div className='modal-container'>
           <form className='form-wrapper' id='small-form-wrapper'
                 onSubmit={submitHandler}>
              <div className='small-form-container gradient'>
                  <img  src={logo} alt='HireXzo' width={260} height={254} loading='lazy' />
                  <div className='small-details-input'>
                      <label className='font'>
                       Name
                       <input type='text' className='font small-input-field'/>
                      </label>
                      <label className='font'>
                       Work Email address
                       <input type='text' className='font small-input-field'/>
                      </label>
                      <label>
                       Phone number
                       <input type='number' className='font small-input-field'/>
                      </label>
                      {/* <label>
                       Plan name
                       <input type='text' className='font small-input-field'/>
                      </label> */}
                      <textarea
                                   type='text' 
                                   placeholder='Write something about your query' 
                                   className='input-field font small-text-area-class'
                                   name='query'
                                   value={formData.query}
                                   onChange={changeHandler}></textarea>
                      <div className='apply-button'>
                       <button class="btn-green" id="btn">Submit</button>
                      </div>
                  </div>
              </div>
           </form>
        </div>
   </div>
 )
}

export default PricingForm