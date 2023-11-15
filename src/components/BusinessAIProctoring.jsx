import React from 'react';
import '../styles/BusinessStyles/BusinessAIProctoring.css';
import Face from '../assets/Proctoring/Security-bro.png';
import Full from '../assets/Proctoring/Security On-rafiki.png';
import Tab from '../assets/Proctoring/Security On-bro.png';

const BusinessAIProctoring = () => {
  return (
    <div className='business-ai-proctoring-main-wrapper'>
                <div className='business-ai-proctoring-wrapper'>
                <div className='business-ai-proctoring-container'>
                    <div className='business-ai-proctoring-heading'>
                        <h2><sapn className='green-span'>AI proctoring</sapn> assessments</h2>
                    </div>
                    <div className='business-ai-proctoring-content-wrapper'>
                        <div className='business-ai-proctoring-content' style={{"borderBottomColor":"#4bb5ff"}}>
                            <p style={{"color":"#4bb5ff"}}>Full Screen Mode</p>
                            <img className='Tab' src={Full} />
                        </div>
                        <div className='business-ai-proctoring-content' style={{"borderBottomColor":"#4CFCFF"}}>
                            <p style={{"color":"#00d4d8"}}>Face detection</p>
                            <img className='Tab' src={Face} 
                            />
                        </div>
                        <div className='business-ai-proctoring-content' style={{"borderBottomColor":"#00E395"}}>
                            <p style={{"color":"#00E395"}}>Tab/App change detection</p>
                            <img id='tab' className='Tab' src={Tab}/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BusinessAIProctoring