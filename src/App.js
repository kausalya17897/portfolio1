
import './App.css';
import {Link,Switch,Route} from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Skills from './pages/Skills.js';
import Skill from './pages/Skill.js';
import Projects from './pages/Project.js';
import Education from './pages/Education.js';
import Contact from './pages/Contact.js';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
function App() {
  const [show, setShow] = useState(false);
  const summarystyles = { display: show ? "block" : "none" };
  return (
    <div className="App">
      <div className='header dflex alc px_30'>
      <div className='sign'>
        
     <h3 className='txt'><span>«</span>Kausalya.K<span>/⋟</span></h3>
      </div>
      <nav className="navigation pxy_30">
      <ul className="navbar dflex">
        <Link to="/" className="navitem mx_15">Home</Link>
        <Link to="/About"className="navitem mx_15">About</Link>
        <Link to="/Skills"className="navitem mx_15">Skills</Link>
        <Link to="/Projects"className="navitem mx_15">Projects</Link>
        <Link to="/Contact"className="navitem mx_15">Contact me</Link>
        </ul>
      </nav>
      
      <div className="hamburgericon">
      <IconButton aria-label="hide"
      color="primary" className="hamburgericon" onClick={() => setShow(!show)}><MenuIcon/></IconButton>
      </div>
      </div>
      <ul className='navmenu' style={summarystyles}>
        <li>
        <Link to="/" className="navsitem">Home</Link>
        </li>
        <li>
        <Link to="/About"className="navsitem">About</Link>
        </li>
        <li>
        <Link to="/Skills"className="navsitem">Skills</Link> 
        </li>
        <li>
        <Link to="/Contact"className="navsitem">Contact me</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/About"><About/></Route>
        <Route path="/Skills"><Skill/></Route>
        <Route path="/Projects"><Projects/></Route>
        <Route path="/Education"><Education/></Route>
        <Route path="/Contact"><Contact/></Route>
      </Switch>
    </div>
  );
}

export default App;
