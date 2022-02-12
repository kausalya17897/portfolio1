import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import aboutimg from 'C:/Users/Dinakaran K/.vscode/portfolio1/src/image/selimage.jpg'
import './About.css'
export default function About() {
  return (
    <div className="aboutcontainer">
    <div className='container'>
      <div className='row'>
        <div className="col_2 px_10">
          <h1 className="abtme">About Me</h1>
      <p className='abtp'>  Hello! I'm Zonayed Ahmed, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Computer Science Engineering from Chandigarh University at Punjab, India in 2020. I am available for any kind of job opportunity that suits my interests.
      </p> <div className='dflex '>
            <Stack direction="row" spacing={2}>
         <a href="#">  <Button variant="contained" className="colblue">
        Get Resume
      </Button></a> 
      <Button variant="outlined">
        About Me
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

  
