import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MarkunreadIcon from '@mui/icons-material/Markunread';
export default function Contact() {
  return (
    
    <div className='contact'>
<h1>Contact Me</h1>
<p>I am available on almost every social media. You can message me, I will reply within 24 hours</p>
<div className='dflex'>
    <GitHubIcon/>
    <LinkedInIcon/>
    <TwitterIcon/>
    <MarkunreadIcon/>
</div>
    </div>
  )
}
