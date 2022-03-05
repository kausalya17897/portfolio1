import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Skills..css';
import {Switch,Route} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export default function Skills() {
  const history=useHistory();
  return (
<div>
  {/*<nav className='navigation navbar pxy_30 skillnav'>
<ul>
  
<Stack direction="row" spacing={2}>
  
  <Button onClick={()=>history.push('/Skills')} variant="outlined" className="colblue">Web</Button>
  <Button onClick={()=>history.push('/programming')} variant="outlined" className="colblue">Programming</Button>
  
  <Button onClick={()=>history.push('/Others')} variant="outlined" className="colblue">Others</Button>
  
  </Stack>
</ul>
  </nav>
  <Switch>
  <Route exact path="/"><Skillscontainer/>fddf</Route> 
  <Route path="/programming"><Programming/>cgvn</Route>
  <Route path="/Others"></Route>
  </Switch>
  <div className='skillscontainer'>
    <div className='skills px_10'>
    <h1 className='tc'>SKILLS</h1>
    <div className='dflex  '>
  <ul className="cl_2">
    <div className="card">
    <div className="card dflex  jb ">
      <div>HTML</div>
      <div>95%</div>
      </div>
      <span className='bar'><span className='html'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>CSS</div>
      <div>90%</div>
      </div>
      <span className='bar'><span className='css'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>JavaScript</div>
      <div>85%</div>
      </div>
      <span className='bar'><span className='javascript'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>Bootstrap</div>
      <div>85%</div>
      </div>
      <span className='bar'><span className='react'></span></span>
      <div>
      </div>
    </div>
    </ul>
    <ul className='cl_2'>
    <div className="card">
    <div className="card dflex  jb ">
      <div>React Js</div>
      <div>85%</div>
      </div>
      <span className='bar'><span className='react'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>Mongodb</div>
      <div>70%</div>
      </div>
      <span className='bar'><span className='mongodb'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>Express</div>
      <div>65%</div>
      </div>
      <span className='bar'><span className='express'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>Node Js</div>
      <div>70%</div>
      </div>
      <span className='bar'><span className='node'></span></span>
      <div>
      </div>

    </div>
    
    
    
  </ul>
 
  </div>
  </div>
  <div className='tools'>

<Programming/>
<Tools/>

  </div>
  </div>
</div>
  )
}


 function Skillscontainer() {
  return (
    
    <div className='skillscontainer'>
    <div className='skills px_10'>
    <h1 className='tc'>SKILLS</h1>
    <div className='dflex  '>
  <ul className="cl_2">
    <div className="card">
    <div className="card dflex  jb ">
      <div>HTML</div>
      <div>95%</div>
      </div>
      <span className='bar'><span className='html'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>CSS</div>
      <div>90%</div>
      </div>
      <span className='bar'><span className='css'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>JavaScript</div>
      <div>85%</div>
      </div>
      <span className='bar'><span className='javascript'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>Bootstrap</div>
      <div>85%</div>
      </div>
      <span className='bar'><span className='react'></span></span>
      <div>
      </div>
    </div>
    </ul>
    <ul className='cl_2'>
    <div className="card">
    <div className="card dflex  jb ">
      <div>React Js</div>
      <div>85%</div>
      </div>
      <span className='bar'><span className='react'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>Mongodb</div>
      <div>70%</div>
      </div>
      <span className='bar'><span className='mongodb'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>Express</div>
      <div>65%</div>
      </div>
      <span className='bar'><span className='express'></span></span>
      <div>
      </div>
    </div>
    <div className="card">
    <div className="card dflex  jb ">
      <div>Node Js</div>
      <div>70%</div>
      </div>
      <span className='bar'><span className='node'></span></span>
      <div>
      </div>
    </div>
    
    
    
  </ul>
 
  </div>
  </div>
  <div className='tools'>
<h3>Tools</h3>

  </div>
  </div>
  )
}
function Programming() {
  return (
    <div className='skillscontainer'>
    <div className='skills px_10'>
    <h1 className='tc'>Programming</h1>
    <div className="card">
    <div className="card dflex  jb ">
      <div>JavaScript</div>
      <div>95%</div>
      </div>
      <span className='bar'><span className='html'></span></span>
      <div>
      </div>
    </div>
   
  </div>
  */}

  
  </div>
  
  )
}

export function Tools(){
  return(
      <div className='skills px_10'>
    <h1 className='tc'>Tools</h1>

    <div className='dflex'>

    <div className="card">
    <div className="card dflex jb ">
      <div>vscode</div>
      <div className="bluebg">95%</div>
      </div>
      <span className='bar'><span className='html'></span></span>
    </div>
   
    
    <div className="card">
    <div className="card dflex  jb ">
      <div>Git</div>
      <div className="bluebg">95%</div>
      </div>
      <span className='bar'><span className='html'></span></span>
    </div>
    </div>

    </div>
    
  )
}
