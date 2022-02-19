import React from 'react'
import './Contact.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import contactimg from '../image/contact.jpg'
export default function Contact() {
  const iconstyle={
    fontSize:"50px"
  }
  return (
    
    <div className='contact'>
     
      <div className="row">
      <div className="col_2">
    <img src={contactimg} alt="ds" className='ctimg'/>
    </div>
    
        <div className="col_2">
        <h1 className='tc'>Contact Me</h1>
<p className='ctpara'>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me. You can message me, I will reply within 24 hours</p>
<div className='dflex tc px_10 gp_20'>
  <a href="https://github.com/kausalya17897" className="icon">
<GitHubIcon style={iconstyle}className="icon"/></a>
   <a href="https://www.linkedin.com/in/kausalya-17"  className="icon" >
     <LinkedInIcon style={iconstyle} className="icon"/></a>
     <a href="https://mobile.twitter.com/KausalyaK17"  className="icon">
     <TwitterIcon  style={iconstyle} className="icon"/>
     </a>
   
    <MarkunreadIcon style={iconstyle} className="icon"/></div>
    </div>

    </div>
    </div>
  )
}
