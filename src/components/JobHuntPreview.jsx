import React, { useEffect } from 'react';
import '../styles/JobHuntPreview.css';

const JobHuntPreview = ({setOpenPreview,cancelHandler,formData,content}) => {

  useEffect(() => {
    document.body.style.overflowY = "hidden";
  
    return () => {
      document.body.style.overflowY = "scroll";
    }
  }, [])
  

  return (
    <div className='jobhunt-preview'>
        <div className='jobhuntpreview-wrapper' onClick={()=>{setOpenPreview(false)}}></div>
        <div className='jobhuntpreview-container'>
            <div>
                <p>Preview Job Details</p>
            </div>
            <div className='main-details-wrapper'>
                <div className='main-detail-container' id='title'>
                    <h2>{formData.jobTitle}</h2>
                    <div className='location-departmemt-container'>
                        <p className='font-medium'>{formData.location}</p>
                        <div className='font-medium'>{formData.department}</div>
                    </div>
                </div>
                <div className='secondary-details-container' id='sec-container-id'>
                    <div className='job-description-content-container' id='content'>{content}testing in progress</div>
                    <div className='job-description-details-container' id='details'>
                        <div>
                            <p className='make-heading'>Company Name</p>
                            <p>{formData.companyName}</p>
                        </div>
                        <div>
                            <p className='make-heading'>Location</p>
                            <p>{formData.location}</p>
                        </div>
                        <div>
                            <p className='make-heading'>Workplace Type</p>
                            <p>{formData.modeOfWorkSelected}</p>
                        </div>
                        <div>
                            <p className='make-heading'>Employment Type</p>
                            <p>{formData.employmentType}</p>
                        </div>
                        <div>
                            <p className='make-heading'>{formData.salaryPayDuration} CTC</p>
                            <p>{formData.salary}</p>
                        </div>
                        <div>
                            <p className='make-heading'>Skills Required</p>
                            <p>{formData.skills}</p>
                        </div>
                        


                    </div>
                </div>
            </div>
            <div className='preview-form-btn-container'>
                <button onClick={()=>{setOpenPreview(false)}}>Edit</button>
                <button onClick={()=>{cancelHandler(); setOpenPreview(false)}}>post</button>
            </div>
            
        </div>
    </div>
  )
}

export default JobHuntPreview