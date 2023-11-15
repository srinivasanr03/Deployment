import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import profile_Logo from '../components/Profile_Logo.jsx';
import '../styles/Complete_profile.scss'

import defaultProfileImage from '../assets/images/student.webp';
const Complete_profile = () => {
  const navigate= useNavigate(); 
  const [profileImage, setProfileImage] = useState(null);
  
  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
  };

  const handleCancelImage = () => {
    setProfileImage(null);
    document.getElementById('imageInput').value = ''; // Reset the file input
  };

    const [basicInfo, setBasicInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
      });
      const handleClose = () => {
        // Use history to navigate back to 'ProfileNav' route or component
        navigate('/'); // Replace '/profile' with the actual route to 'ProfileNav'
      };
     
    
      const [skills, setSkills] = useState('');
    
      const [workExperience, setWorkExperience] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      });
    
      const [education, setEducation] = useState({
        school: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        description: '',
      });
    
      const [socialLinks, setSocialLinks] = useState({
        linkedin: '',
        twitter: '',
        github: '',
      });
    
      const handleBasicInfoChange = (event) => {
        const { name, value } = event.target;
        setBasicInfo((prevBasicInfo) => ({
          ...prevBasicInfo,
          [name]: value,
        }));
      };
    
 
    
      const handleSkillsChange = (event) => {
        setSkills(event.target.value);
      };
    
      const handleWorkExperienceChange = (event) => {
        const { name, value } = event.target;
        setWorkExperience((prevWorkExperience) => ({
          ...prevWorkExperience,
          [name]: value,
        }));
      };
    
      const handleEducationChange = (event) => {
        const { name, value } = event.target;
        setEducation((prevEducation) => ({
          ...prevEducation,
          [name]: value,
        }));
      };
    
      const handleSocialLinksChange = (event) => {
        const { name, value } = event.target;
        setSocialLinks((prevSocialLinks) => ({
          ...prevSocialLinks,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
          basicInfo,
          skills,
          workExperience,
          education,
          socialLinks,
          profileImage,
        });
      };
  return (
<>
<div className="Profile_container">
<div className="profile-image-container">
          {profileImage ? (
            <>
              <img src={profileImage} alt="Profile" />
              <button onClick={handleRemoveImage} className="remove-button">
                Remove Image
              </button>
              
            </>
          ) : (
            <>
              <img src={defaultProfileImage} alt="Default Profile" />
              <label htmlFor="imageInput" className="update-button">
                        Update Profile Pic
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
                id="imageInput"
                value=""
              />
            </>
          )}
          {/* {profileImage && (
            <button onClick={handleCancelImage} className="cancel-button">
              Cancel
            </button>
          )} */}
        </div>
  {/* <profile_Logo */}
<form className="Profile"onSubmit={handleSubmit}>
      <h2>Basic Information</h2>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={basicInfo.firstName}
        onChange={handleBasicInfoChange}
        placeholder="Enter your first name"
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={basicInfo.lastName}
        onChange={handleBasicInfoChange}
        placeholder="Enter your last name"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={basicInfo.email}
        onChange={handleBasicInfoChange}
        placeholder="Enter your email"
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={basicInfo.phone}
        onChange={handleBasicInfoChange}
        placeholder="Enter your phone number"
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={basicInfo.address}
        onChange={handleBasicInfoChange}
        placeholder="Enter your address"
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={basicInfo.city}
        onChange={handleBasicInfoChange}
        placeholder="Enter your city"
      />
      <label htmlFor="state">State:</label>
      <input
        type="text"
        id="state"
        name="state"
        value={basicInfo.state}
        onChange={handleBasicInfoChange}
        placeholder="Enter your state"
      />
      <label htmlFor="zip">Zip:</label>
      <input
        type="text"
        id="zip"
        name="zip"
        value={basicInfo.zip}
        onChange={handleBasicInfoChange}
        placeholder="Enter your ZIP code"
      />

      <h2>Skills</h2>
      <textarea value={skills} onChange={handleSkillsChange} />

      <h2>Work Experience</h2>
      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="company"
        name="company"
        value={workExperience.company}
        onChange={handleWorkExperienceChange}
      />
      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        name="position"
        value={workExperience.position}
        onChange={handleWorkExperienceChange}
      />
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={workExperience.startDate}
        onChange={handleWorkExperienceChange}
      />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={workExperience.endDate}
        onChange={handleWorkExperienceChange}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={workExperience.description}
        onChange={handleWorkExperienceChange}
      />

      <h2>Education</h2>
      <label htmlFor="degree">Degree:</label>
      <input
        type="text"
        id="degree"
        name="degree"
        value={education.degree}
        onChange={handleEducationChange}
      />
      <label htmlFor="fieldOfStudy">Field of Study:</label>
      <input
        type="text"
        id="fieldOfStudy"
        name="fieldOfStudy"
        value={education.fieldOfStudy}
        onChange={handleEducationChange}
      />
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={education.startDate}
        onChange={handleEducationChange}
      />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={education.endDate}
        onChange={handleEducationChange}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={education.description}
        onChange={handleEducationChange}
      />

      <h2>Social Links</h2>
      <label htmlFor="linkedin">LinkedIn:</label>
      <input
        type="text"
        id="linkedin"
        name="linkedin"
        value={socialLinks.linkedin}
        onChange={handleSocialLinksChange}
      />
      <label htmlFor="twitter">Twitter:</label>
      <input
        type="text"
        id="twitter"
        name="twitter"
        value={socialLinks.twitter}
        onChange={handleSocialLinksChange}
      />
      <label htmlFor="github">GitHub:</label>
      <input
        type="text"
        id="github"
        name="github"
        value={socialLinks.github}
        onChange={handleSocialLinksChange}
      />
     <div className="profile_btn">
      <button type="submit">Submit</button>
      <button type="button" onClick={handleClose}>
            Close
          </button>
          </div>
    </form>
    </div>
</>
  )
}

export default Complete_profile