import React from 'react'
import './Project.css'
import movieapp from 'C:/Users/Dinakaran K/.vscode/portfolio1/src/image/proj1.jpg';
import bikeapp from 'C:/Users/Dinakaran K/.vscode/portfolio1/src/image/proj2.jpg';

export default function Project() {
  return (
    <div className='project'>
      <div className="dflex gp_20 js">
      <div>
        <h1 className='tc'>Movie app</h1>
        <a href="https://github.com/kausalya17897/crudapp">
        <img className="projimg" src={movieapp} alt="sdf"/>
        </a>
        <p>Language used:HTML,CSS,JavaScript,React Js,Mongodb,Node Js</p>
      </div>
      <div>
        <h1 className='tc'>Bikerental app</h1>
        
      <a href="https://github.com/kausalya17897/bikefront">
        <img className="projimg" src={bikeapp} alt="sdf"/>
        </a>
        <p>Language used:HTML,CSS,JavaScript,React Js,Mongodb,Node Js</p>
      </div>
      </div>
    </div>
  )
}
