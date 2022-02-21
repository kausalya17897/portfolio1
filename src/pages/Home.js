import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import img from '../image/profimg.jpg'
import { useHistory } from 'react-router-dom';
import './Home.css'
export default function Home() {
  const history=useHistory();
  return (
    <div className="container">
    <div className="hom_content dflex str">
    <div className='col_2'>
            <img className="abtimg" src={img} alt="n nd"/>
    </div>
        <div className="homemain col_2">
            <h1 className="homtxt px_50">
                Welcome to my portfolio
            </h1>
            <h2 className="homtxt px_50">
                Hi, I'm Kausalya
            </h2>
            <h3 className="homtxt px_50"> 
                MERN stack developer
            </h3>
            <div className='dflex px_50'>
            <Stack direction="row" spacing={2}>
         <a href="https://drive.google.com/file/d/1mNMf8V2HLg8uCBPoiDS6Qxv5RtPdC7ua/view?usp=sharing"> <Button variant="contained" className="colblue">
        Get Resume
      </Button></a>  
      <Button onClick={()=>history.push("/About") }variant="outlined" >
        About Me
      </Button>
      </Stack>

            </div>
        </div>
        
</div>





        </div>
    
  )
}
