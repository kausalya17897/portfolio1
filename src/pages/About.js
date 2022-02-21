import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import aboutimg from '../image/selimage.jpg'
import './About.css'
import { useHistory } from 'react-router-dom';
export default function About() {
  const history=useHistory();
  return (
    <div className="aboutcontainer">
    <div className='container'>
      <div className='row'>
        <div className="col_2 px_10">
          <h1 className="abtme">About Me</h1>
      <p className='abtp'>  Hello! I'm K.Kausalya, a passionate web developer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Electronics and Communication Engineering from Sri Ramakrishna Institute of Technology at Coimbatore, India in 2019. I am available for any kind of job opportunity that suits my interests.
      </p> <div className='dflex '>
            <Stack direction="row" spacing={2}>
         <a href="https://drive.google.com/file/d/1mNMf8V2HLg8uCBPoiDS6Qxv5RtPdC7ua/view?usp=sharing">  <Button variant="contained" className="colblue">
        Get Resume
      </Button></a> 
      <Button  onClick={()=>history.push("/Contact")} variant="outlined" >
        Contact Me
      </Button>
      </Stack>

            </div> </div>
      <div className='col_2'>
          <img className="aboutimg" src={aboutimg} alt="aboutimg"/>
        </div>
      </div>
     
    </div>
  </div>
  )
}

  
