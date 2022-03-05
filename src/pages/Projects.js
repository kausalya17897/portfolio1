import React from 'react'
import ecommapp from '../image/ecomwebthumbnail.png';
import calcapp from '../image/calcthumbnail.jpg';
import './Project.css';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import bikeapp from '../image/bikethumbnail.jpg';
import movieapp from '../image/moviethumnailimage.jpg'
export default function Projects() {
  return (
      <div>
          <h1 className='projecttitle'>Projects</h1>
    <div className='Full'>
        
    <div className='Container'>
        <img src={ecommapp} alt="shopifythumbnail" className='Image'/>
        <div className='Info'>
        <a href='https://shoppifyecom.netlify.app/'><LinkIcon/></a>
        </div> 
    </div>
    <div className='Container'>
        <img src={calcapp} alt="shopifythumbnail" className='Image'/>
        <div className='Info'>
        <a href='https://simpleonlinecalc.netlify.app/'><LinkIcon/></a>
        </div>
    </div>
    <div className='Container'>
        <img src={bikeapp} alt="bikethumbnail" className='Image'/>
        <div className='Info'>
        <a href='https://bikerentalapp.netlify.app/'><LinkIcon/></a>
        </div>
    </div>
    <div className='Container'>
        <img src={movieapp} alt="shopifythumbnail" className='Image'/>
        <div className='Info'>
        <a href='https://moviecrudapp.netlify.app/'><LinkIcon/></a>
        </div>
    </div>
  
    
    
    
    </div>
    </div>
  )
}
