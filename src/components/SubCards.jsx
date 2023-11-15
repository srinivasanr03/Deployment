import React from 'react';
import '../styles/SubCards.css';

const SubCards = ({id,title,opt,desc1,desc2,tags,clickHandler}) => {

  return (
    <div className='subcards-container'>

        <div className='subcards-subcontainer' id='id-subcards-subcontainer'>
          <div className='subcontainer-headings-left' id='id-subcontainer-headings-left'>
            <div className='title'>{title} <span style={{'fontWeight':"500" , 'color':"red" , 'fontSize':"24px" , 'opacity':"80%"}}>{opt}</span></div>
            <div className='desc1'>{desc1}</div>
            <div className='desc2'>{desc2}</div>
            <div className='tags'>
            {   
                tags.map((tag) => (
                <div className='tags-content-styling'>
                  {tag}
                </div>
            ))}
            
            </div>
          </div>
          <div className='subcontainer-headings-right' id='id-subcontainer-headings-right'>
                <div className='contact-us'>
                  Contact with us to get started
                </div>
                <div>
                  <button onClick={clickHandler}>Contact sales</button>
                </div>
        </div>
        </div>
    </div>

   


    
      
  );
};

export default SubCards;



