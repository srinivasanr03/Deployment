import React from 'react';
import '../styles/CompanyCard.css';
import logo from '../assets/images/HireXzo_Solutions_LLP_No_BG.png';

const CompanyCard = () => {
  return (
    <div className='card'>
        <div className='logo-container'>
           <img src={logo} className='logo' />
        </div>
        <div className='company-name'>HIREXZO Solutions LLP</div>
        <div className='gst-pan-container'>
            <div className='content'>
                <div>GST :</div>
                <div>36AAQFH1987H1ZU</div>
            </div>
            <div className='content'>
                <div>PAN : </div>
                <div>AAQFH1987H</div>
            </div>
        </div>
    </div>
  )
}

export default CompanyCard