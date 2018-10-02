import React from 'react';  
import MainInfo from '../templates.js'
import MainNavButtons from './ButtonGroupComponent.jsx';
const logo = require('../src/cyanWithGlow.jpg')


const MainContent = (props) => { 
  return (
    <div>
      <div id="maininfo">
        <img src={ logo }></img>
        <p>{ MainInfo }</p>
         <MainNavButtons /> 
      </div>
    </div>
  )
}



export default MainContent; 
 
