import React from 'react'
import 'C:/Users/Dinakaran K/.vscode/portfolio1/src/pages/Skills..css';
import {Link,Switch,Route} from 'react-router-dom';
export default function Skills() {
  return (
<div>
  <nav className='navigation navbar pxy_30'>
<ul>
  <Link to="/web">Web</Link>
  <Link to="/programming">Programming</Link>
  <Link to="/Others">Others</Link>
</ul>
  </nav>
  <Switch>
  <Route exact path="/web"><Skillscontainer/>fddf</Route> 
  <Route path="/programming"><Programming/>cgvn</Route>
  <Route path="/Others"><Others/></Route>
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
<h3>Tools</h3>
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
    <div>Skillszxvzvx</div>
  )
}

function Others() {
  return (
    <div>Skilcvdbfls</div>
  )
}


