import React from 'react'
import ecommapp from '../image/ecomwebthumbnail.png';
import calcapp from '../image/calcthumbnail.jpg';
import './Project.css';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import bikeapp from '../image/bikethumbnail.jpg';
import movieapp from '../image/moviethumnailimage.jpg'
import contactapp from '../image/contactthumb.png'
import styled from 'styled-components'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

import {IconButton } from '@mui/material';
import Button from '@mui/material/Button';

import Link from '@mui/material/Link';
export default function Projects() {
    const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  
  margin: 5px;
  min-width: 280px;
  max-width:480px;
  height: 350px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  width:75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.0);
  }`
  const Border=styled.div`
  border:1px solid black;
  padding:3px;
  border-radius:2px`
const Flex=styled.div`
display:flex;
gap:20px;
margin-top:20px;`
  return (
      <div>
          <h1 className='projecttitle'>Projects</h1>
    <div className='Full'>
    <Container>
      <Circle />
      <Image src={ecommapp} alt="xdsg"/>
      <Info>
        
      </Info>
      <Flex>
      <Border>
      <Link href="https://github.com/kausalya17897/ecommweb" underline="none" target="_blank">
      <GitHubIcon/>FRONTEND
      </Link>
      </Border>
      <Border>
      <Link href="https://github.com/kausalya17897/ecommwebserver" underline="none" target="_blank">
      <GitHubIcon/>BACKEND
      </Link>
      </Border>
      <Border>
      <Link href="https://shoppifyecom.netlify.app/" underline="none" target="_blank">
      <OpenInNewOutlinedIcon/>LIVE
      </Link></Border>
      </Flex>
    </Container>

    <Container>
      <Circle />
      <Image src={movieapp} alt="xdsg"/>
      <Info>
        
      </Info>
      <Flex>
      <Border>
      <Link href="https://github.com/kausalya17897/crudapp" underline="none" target="_blank">
      <GitHubIcon/>FRONTEND
      </Link>
      </Border>
      <Border>
      <Link href="https://github.com/kausalya17897/moviebackend" underline="none" target="_blank">
      <GitHubIcon/>BACKEND
      </Link>
      </Border>
      <Border>
      <Link href="https://moviecrudapp.netlify.app/" underline="none" target="_blank">
      <OpenInNewOutlinedIcon/>LIVE
      </Link></Border>
      </Flex>
    </Container>
    <Container>
      <Circle />
      <Image src={calcapp} alt="xdsg"/>
      <Info>
       
      </Info>
      <Flex>
      <Border>
      <Link href="https://github.com/kausalya17897/Dom-calculator" underline="none" target="_blank">
      <GitHubIcon/>FRONTEND
      </Link>
      </Border>
     
      <Border>
      <Link href="https://simpleonlinecalc.netlify.app/" underline="none" target="_blank">
      <OpenInNewOutlinedIcon/>LIVE
      </Link></Border>
      </Flex>
    </Container>
    <Container>
      <Circle />
      <Image src={bikeapp} alt="xdsg"/>
      <Info>
        
      </Info>
      <Flex>
      <Border>
      <Link href="https://github.com/kausalya17897/bikefront" underline="none" target="_blank">
      <GitHubIcon/>FRONTEND
      </Link>
      </Border>
      <Border>
      <Link href="https://github.com/kausalya17897/rentalappbackend" underline="none" target="_blank">
      <GitHubIcon/>BACKEND
      </Link>
      </Border>
      <Border>
      <Link href="https://bikerentalapp.netlify.app/" underline="none" target="_blank">
      <OpenInNewOutlinedIcon/>LIVE
      </Link></Border>
      </Flex>
    </Container>
   
   
   
    
    <Container>
      <Circle />
      <Image src={contactapp} alt="xdsg"/>
      <Info>
      
      </Info>
      <Flex>
      <Border>
      <Link href="https://github.com/kausalya17897/contactmanager" underline="none" target="_blank">
      <GitHubIcon/>FRONTEND
      </Link>
      </Border>
      <Border>
      <Link href="https://github.com/kausalya17897/Contactmanagerserver" underline="none" target="_blank">
      <GitHubIcon/>BACKEND
      </Link>
      </Border>
      <Border>
      <Link href="https://contact-connect-manager.netlify.app/" underline="none" target="_blank">
      <OpenInNewOutlinedIcon/>LIVE
      </Link></Border>
      </Flex>
    </Container>
    </div>
    </div>
  )
}
