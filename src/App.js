
import './App.css';
import {Link,Switch,Route} from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Skills from './pages/Skills.js';
import Projects from './pages/Project.js';
import Education from './pages/Education.js';
import Contact from './pages/Contact.js';


function App() {
  return (
    <div className="App">
      <div className='header dflex alc px_30'>
      <div>
     <h3 className='txt'>Kausalya.K</h3>
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
      
      </div>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/About"><About/></Route>
        <Route path="/Skills"><Skills/></Route>
        <Route path="/Projects"><Projects/></Route>
        <Route path="/Education"><Education/></Route>
        <Route path="/Contact"><Contact/></Route>
      </Switch>
    </div>
  );
}

export default App;
