import React, { useRef, useState } from 'react';
// import '../styles/JobHunt.css';
import '../styles/BusinessStyles/JobHunt.css'
import JoditEditor from 'jodit-react';
import JobHuntPreview from './JobHuntPreview';

const config = {
    placeholder:"About company (Give a brief summary of what your company does)",
    readonly:false
}


const JobHunt = () => {

  const editor = useRef(null);
  
  const [image, setImage] = useState('');
  function handleImage(e){
    console.log('handleImage called');
    setImage(e.target.files[0])
  }

  const [openPreview, setOpenPreview] = useState(false);

  const [formData, setFormData] = useState({
    jobTitle:"",
    companyName:"",
    department:"",
    location:"",
    modeOfWorkSelected:"in-Office",
    skills:"",
    employmentType:"Full-Time",
    salaryPayDuration:"Annual",
    salary:"",
    workExperienceFrom:"",
    workExperienceTill:"",
    education:"",
    openings:"",

  });

  const [content, setContent] = useState("");

  function changeHandler(event){
    setFormData( prevFormData =>{
       return{
          ...prevFormData,
          [event.target.name] : event.target.value
       }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
    console.log(content);
    setOpenPreview(true);
  }

  function cancelHandler() {
    setFormData({
      jobTitle: "",
      companyName: "",
      department: "",
      location: "",
      modeOfWorkSelected: "in-Office",
      skills: "",
      employmentType:"Full-Time",
      salaryPayDuration: "Annual",
      salary:"",
      workExperienceFrom: "",
      workExperienceTill: "",
      education: "",
      openings: "",
    });
    setContent("");
  }
  

  return (
    <div className='jobshunt-form-wrapper'>


      <form className='jobshunt-form-container' onSubmit={submitHandler}>
      <div className='jobshunt-upload'>
        <div>
          <p>Upload your company's logo</p>
        </div>
        <div>
              <input type='file' name='file' onChange={handleImage}/>
              <button>Submit</button>
        </div>
      </div>

        <p>What job are you hiring for?</p>
        <div className='jobshunt-roles-container'>
            <div className='jobs-company-name-container'>
                   <div className='label-style'>
                        <label htmlFor='job-title' >
                            Job Title<sup style={{'color':"red"}}>*</sup>                      
                        </label>
                        <input 
                                  name="jobTitle" 
                                  type='text' 
                                  style={{'width':"300px"}}
                                  value={formData.jobTitle}
                                  onChange={changeHandler}
                         />
                    </div>


                    <div className='label-style'>
                        <label htmlFor='company-name'>
                            Company Name<sup style={{'color':"red"}}>*</sup>
                        </label>
                        <input 
                                  name='companyName' 
                                  type='text' 
                                  placeholder="Enter your company name"
                                  value={formData.companyName}
                                  onChange={changeHandler}  
                         />
                    </div>
            </div>


            <div className='label-style'>
                <label htmlFor='department'>
                    Department<span className='optional'> (Optional)</span>
                </label>
                <input 
                              name='department' 
                              type='text' 
                              placeholder='Eg. App Development' 
                              style={{'width':"50%"}}
                              value={formData.department}
                              onChange={changeHandler}
                />

            </div>


          <div className='label-style'>
            <label htmlFor='location'>
                Location(s)<sup style={{'color':"red"}}>*</sup>            
            </label>
            <input 
                        name='location' 
                        type='text' 
                        placeholder='Enter Location(s)'
                        value={formData.location}
                        onChange={changeHandler}
             />
          </div>


          {/* <div className='jobshunt-radio-buttons'>
            <label>
              <input type='radio' name='modeOfWorkSelected' value='inOffice' /> in-office
            </label>
            <label>
              <input type='radio' name='modeOfWorkSelected' value='hybrid' /> Hybrid
            </label>
            <label>
              <input type='radio' name='modeOfWorkSelected' value='remote' /> Remote
            </label>
          </div> */}
          <div className='jobshunt-radio-buttons'>
              <label>
                <input
                  type='radio'
                  name='modeOfWorkSelected' // Set the name attribute
                  value='in-Office'
                  checked={formData.modeOfWorkSelected === 'in-Office'}
                  onChange={changeHandler}
                /> in-office
              </label>
              <label>
                <input
                  type='radio'
                  name='modeOfWorkSelected' // Set the name attribute
                  value='Hybrid'
                  checked={formData.modeOfWorkSelected === 'Hybrid'}
                  onChange={changeHandler}
                /> Hybrid
              </label>
              <label>
                <input
                  type='radio'
                  name='modeOfWorkSelected' // Set the name attribute
                  value='Remote'
                  checked={formData.modeOfWorkSelected === 'Remote'}
                  onChange={changeHandler}
                /> Remote
              </label>
            </div>

           <div className='job-desc-section'>
                  <p>Fill in some Details of the job</p>
                  <p>Job Description<span style={{"color":"red"}}>*</span></p>

                  <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}        
                        onChange={newContent=>{setContent(newContent)}}
                      />
           </div>


          {/* Skills Section */}
          <div className='label-style'>
                <label>
                    Skills<sup style={{"color":"red"}}>*</sup>
                </label>
                <p>Add skill keywords to make your job more visible to the right candidates</p>
                <input 
                        type='text' 
                        placeholder='Add minimum 3 skills' 
                        name='skills'
                        value={formData.skills}
                        onChange={changeHandler}  
                />
          </div>

          <div className='label-style'>
            <label>
                Employment Type<sup style={{'color':"red"}}>*</sup>
            </label>
            <select style={{'width':"100px"}} className='faded' value={formData.employmentType} onChange={(e) => {
                                                                                          const selectedValue = e.target.value;
                                                                                          setFormData({
                                                                                            ...formData,
                                                                                            salaryPayDuration: selectedValue
                                                                                          });
                                                                                        }}>

              <option name="employmentType" value="Full-Time">Full-Time</option>
              <option name="employmentType" value="Part-Time">Part-Time</option>
              <option name="employmentType" value="Contract">Contract</option>
              <option name="employmentType" value="Internship">Internship</option>
              <option name="employmentType" value="Freelance">Freelance</option>
            </select>
          </div>

          <div className='label-style'>
            <label>
              Salary Range<sup style={{'color':"red"}}>*</sup>
            </label>

            <select className='faded' value={formData.salaryPayDuration} onChange={(e) => {
                                                                                          const selectedValue = e.target.value;
                                                                                          setFormData({
                                                                                            ...formData,
                                                                                            salaryPayDuration: selectedValue
                                                                                          });
                                                                                        }}>

              <option name="salaryPayDuration" value="Annual">Annual</option>
              <option name="salaryPayDuration" value="Monthly">Monthly</option>
            </select>
            <input 
                      name='salary'
                      value={formData.salary}
                      type='digit' 
                      placeholder='Ex. 2,40,000' 
                      style={{"width":"30%"}} 
                      onChange={changeHandler}
                      />
            
          </div>

          <div className='label-style'>
            <label htmlFor='work-experience'>
                Work Experience(in Years)<sup style={{'color':"red"}}>*</sup>
            </label>
            <div className='work-experience'>
                <input 
                          name='workExperienceFrom' 
                          type='digit' 
                          placeholder='From'
                          value={formData.workExperienceFrom}
                          onChange={changeHandler}
                 />
                <span> - </span>
                <input 
                          name='workExperienceTill' 
                          type='digit' 
                          placeholder='To'
                          value={formData.workExperienceTill}
                          onChange={changeHandler}
                 />
            </div>
            
          </div>

          <div className='education-openings'>
            <div className='label-style'>
                <label htmlFor='Education'>
                Education<span className='optional'>(Optional)</span>            
                </label>
                <input 
                          type='text' 
                          name='education' 
                          placeholder='Enter here' 
                          value={formData.education}
                          onChange={changeHandler}  
                />
            </div>

            <div className='label-style'>
                <label htmlFor='Openings'>
                Number of Openings<span className='optional'>(Optional)</span>
                </label>
                <input 
                          name='openings' 
                          type='text' 
                          placeholder='Number of Openings' 
                          value={formData.openings}
                          onChange={changeHandler}  
                />
            </div>

          </div>

          <div className='jobhunt-btns'>
            <div className='cancelButton' onClick={cancelHandler}>CANCEL</div>
            <button>PREVIEW & PROCEED</button>
          </div>
        </div>
      </form>
      {
        openPreview && <JobHuntPreview setOpenPreview={setOpenPreview} cancelHandler={cancelHandler} formData={formData} content={content} />
      }
    </div>
  );
};

export default JobHunt;
