import React from 'react'
import './Project.css'
import ecommapp from '../image/ecomwebthumbnail.png'
import calcapp from '../image/calcthumbnail.jpg'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

const Full=styled.div`
height:min-height;
display:flex;
flex-wrap:wrap;`
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
const Link=styled.a`
cursor:pointer;
width:100%;`
const Title=styled.span`
position:absolute;
font-size:45px;
font-weight:500;
color:white;
z-index:4;
`
const Container = styled.div`
  flex: 1;
  margin: 5px;
  
  width:auto;
  
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
  &:hover ${Title}{
    opacity: 0;
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
  cursor:pointer;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }`
export default function Project() {
    let url="https://google.com"
  return (
<Full>
    <Container>
      <Circle />
      <Image src={ecommapp}/>
      <Title>SHOPPIFY APP</Title>
      <Info>
        <div className='Icon'>
          <a href={url} aria-label="git">
          <GitHubIcon/>
          </a>
        </div>
  
        <Icon>
        
          <LinkIcon/>
      
        </Icon>

      </Info>
    </Container>
    <Container>
      <Circle />
      <Image src={calcapp}/>
      <Title>CALCULATOR</Title>
      <Info>
        <Icon>
          <GitHubIcon/>
        </Icon>
        
        <Icon>
        <Link href="https://shoppifyecom.netlify.app">
          <LinkIcon />
         </Link>
        </Icon>
        
      </Info>
    </Container>
    </Full>
  )
}
