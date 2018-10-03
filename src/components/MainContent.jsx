import React from 'react';  
import MainNavButtons from './MainNavButtons';
import logo from '../cyanWithGlow.jpg';

const MainContent = (props) => { 
  return (
    <div id="main-content">
      <div id='logo-wrapper'><img id='radon-logo' src={ logo }></img></div>
      <p id='radon-description'>An Object-Oriented State Management Framework</p>
      <MainNavButtons /> 
    </div>
  )
}

export default MainContent;
